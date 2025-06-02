import React, { useCallback, useEffect, useState } from 'react';

import { Link, Stack, Typography } from '@mui/material';

import PropTypes from 'prop-types';
import QRCode from 'qrcode.react';
import { useTranslation } from 'react-i18next';

import Button from '@shared/components/form/button';
import CopyToClipboardButton from '@shared/components/form/copyToClipboardButton';
import Input from '@shared/components/form/input';
import Margin from '@shared/components/layout/margin';
import CallOut from '@shared/components/ui/callOut';
import LoadingSpinner from '@shared/components/ui/loadingSpinner';
import { useBatutaTheme } from '@shared/hooks/theme-hooks';
import { useSnackbarAlert } from '@shared/providers/customSnackbarsProvider';
import { useSnackbarBackendError } from '@shared/utils/translateBackendError';

import { useForm } from '@hooks/form-hook';
import { VALIDATOR_REQUIRE } from '@utils/validators';

import { get2FASecretAndUrl, useEnable2FA } from '../services/authService';
import styles from './enable2FA.module.css';

const RenderCodes = (codes = []) =>
  codes.map(c => (
    <Typography variant="console-md" key={c}>
      <code className={styles.code}>{c}</code>
    </Typography>
  ));

function Enable2FA({ onCancel, onSubmit }) {
  const { t } = useTranslation('auth');

  const inputs = { password: '', token: '' };
  const validities = { password: false, token: false };
  const [formState, inputHandler] = useForm(inputs, validities);

  const handleError = useSnackbarBackendError();
  const showSnackbarAlert = useSnackbarAlert();

  const { palette } = useBatutaTheme();

  const [loading, setLoading] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const [url, setUrl] = useState(null);
  const [secret, setSecret] = useState(null);
  const [showCodes, setShowCodes] = useState(false);
  const [codes, setCodes] = useState([]);

  const { mutate, isError, isPending, error, reset } = useEnable2FA();

  useEffect(() => {
    const load2FASecret = async () => {
      setLoadError(false);
      setLoading(true);

      const { url, secret, error } = await get2FASecretAndUrl();

      setLoading(false);

      if (error) {
        setLoadError(true);
      } else {
        setUrl(url);
        setSecret(secret);
      }
    };

    load2FASecret();
  }, []);

  const _onConfirmEnable = event => {
    event?.preventDefault();
    const { formIsValid, inputValues } = formState;

    formIsValid &&
      mutate(
        { secret, ...inputValues },
        {
          onSuccess: ({ twoFactorCodes }) => {
            setUrl(null);
            setSecret(null);
            setShowCodes(true);
            setCodes(twoFactorCodes);
            showSnackbarAlert('success', t('2FA_ENABLED_MSG'), t('2FA_ENABLE'));
          },
          onError: handleError,
        }
      );
  };

  const _onCancelEnable = useCallback(() => {
    setUrl(null);
    setSecret(null);
    onCancel();
    reset();
  }, [reset]);

  const _onModalDone = useCallback(() => {
    setShowCodes(false);
    onSubmit();
  }, []);

  if (loading) {
    return (
      <>
        <LoadingSpinner />
      </>
    );
  }

  if (showCodes) {
    return (
      <div>
        <div className={styles.ctnHeader}>
          <div className="mb-2">
            <Typography variant="title-md">{t('2FA_AUTH')}</Typography>
          </div>
          <div className="mb-4">
            <Typography variant="body-md">{t('2FA_CODES_TEXT')}</Typography>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4">
          <div className="flex flex-col items-center justify-center gap-2">
            {RenderCodes(codes?.slice(0, 5)).map(code => (
              <Typography variant="console-md" key={code}>
                {code}
              </Typography>
            ))}
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            {RenderCodes(codes?.slice(5)).map(code => (
              <Typography variant="console-md" key={code}>
                {code}
              </Typography>
            ))}
          </div>
        </div>

        <div className="mt-2 flex justify-center">
          <CopyToClipboardButton variant="text" label={t('COPY')} value={codes.join(',')} />
        </div>

        <div className={styles.note}>
          <div>
            <Typography variant="body-md">{t('2FA_NOTE_1')}</Typography>
          </div>
          <div>
            <Typography variant="body-md">{t('2FA_NOTE_2')}</Typography>
          </div>
        </div>

        <div className={styles.btn}>
          <Button
            label={t('DONE')}
            onClick={_onModalDone}
            fullWidth
            id="auth-enable2FADone-button"
          />
        </div>
      </div>
    );
  }

  return (
    <>
      {loadError && (
        <CallOut type="error" title={t('2FA_ERROR')} message={t('2FA_ENABLE_UNEXPECTED_ERROR')} />
      )}
      <div className={styles.container}>
        <div>
          <div className={styles.center}>
            <div>
              <Typography variant="body-lg">
                {t('2FA_ENABLE_HELP1')}
                <Link
                  variant="body1-link"
                  href="https://apps.apple.com/us/app/google-authenticator/id388497605"
                  target="_blank"
                  className={styles.link}
                >
                  App store
                </Link>
                {t('2FA_ENABLE_HELP2')}
                <Link
                  variant="body1-link"
                  href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=es_CL&gl=US"
                  target="_blank"
                  className={styles.link}
                >
                  Play store
                </Link>
                {t('2FA_ENABLE_HELP3')}
              </Typography>
            </div>
            <div className={styles.qrContainer}>
              <div className={styles.qr}>
                <QRCode size={200} value={url} />
              </div>
            </div>
            <div>
              <Typography variant="body-lg">{t('2FA_ENABLE_HELP_ALT')}</Typography>
            </div>

            <div className={styles.btnContainer}>
              <CopyToClipboardButton variant="text" label={t('2FA_COPY_SECRET')} value={secret} />
            </div>
          </div>
          <Margin top={12} />
          {isError && <CallOut type="error" title={t('ERROR')} message={t(error?.data?.code)} />}
          <Margin bottom={20} />
          <form className={styles.form} onSubmit={_onConfirmEnable}>
            <Input
              type="password"
              id="password"
              label={t('password')}
              onInput={inputHandler}
              errorText={t('PASSWORD_ERROR')}
              validators={[VALIDATOR_REQUIRE()]}
              required
            />
            <Margin top={10} />
            <Input
              id="token"
              label={t('2FA_TOKEN')}
              onInput={inputHandler}
              helperText={t('2FA_TOKEN_HELPER')}
              errorText={t('2FA_TOKEN_ERROR')}
              validators={[VALIDATOR_REQUIRE()]}
              required
            />
            <Margin top={20} />

            <Stack direction="row-reverse" className="gap-4">
              <Button
                disabled={!formState.formIsValid}
                loading={isPending}
                type="submit"
                label={t('ENABLE')}
                color={palette.black.main}
                fullWidth
                id="auth-enable2FA-button"
              />
              <Button
                disabled={isPending}
                onClick={_onCancelEnable}
                label={t('CANCEL')}
                variant="text"
                variantStyle="error"
                fullWidth
                id="auth-cancelEnable2FA-button"
              />
            </Stack>
          </form>
        </div>
      </div>
    </>
  );
}

Enable2FA.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  twoFactorEnabled: PropTypes.bool,
};

export default Enable2FA;
