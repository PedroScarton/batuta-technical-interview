import React from 'react';

import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';

import { useTranslation } from 'react-i18next';

import Button from '@shared/components/form/button';
import Input from '@shared/components/form/input';
import Margin from '@shared/components/layout/margin';
import CallOut from '@shared/components/ui/callOut';
import { useSnackbarAlert } from '@shared/providers/customSnackbarsProvider';
import { useSnackbarBackendError } from '@shared/utils/translateBackendError';

import { useForm } from '@hooks/form-hook';
import { VALIDATOR_REQUIRE } from '@utils/validators';

import { useDisable2FA } from '../services/authService';
import styles from './disable2FA.module.css';

export default function Disable2FA({ onCancel, onSubmit }) {
  const { t } = useTranslation('auth');

  const inputs = { password: '', token: '' };
  const validities = { password: false, token: false };
  const [formState, inputHandler] = useForm(inputs, validities);

  const { mutate, isError, isPending, error } = useDisable2FA();

  const handleError = useSnackbarBackendError();
  const showSnackbarAlert = useSnackbarAlert();

  const _onDisable = event => {
    event?.preventDefault();
    const { formIsValid, inputValues } = formState;

    formIsValid &&
      mutate(inputValues, {
        onSuccess: () => {
          onSubmit();
          showSnackbarAlert('warning', t('2FA_DISABLED_MSG'), t('2FA_DISABLE'));
        },
        onError: handleError,
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.center}>
          <Typography variant="title-md">{t('2FA_DISABLE')} </Typography>
        </div>

        <Margin top={20} />
        {isError && <CallOut type="error" title={t('ERROR')} message={t(error?.data?.code)} />}
        <Margin bottom={20} />
        <form onSubmit={_onDisable}>
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

          <Stack direction="row-reverse" spacing={2}>
            <Button
              disabled={!formState.formIsValid}
              loading={isPending}
              type="submit"
              label={t('DISABLE')}
              fullWidth
              color="error"
              id="auth-disable2FA-button"
            />
            <Button
              variant="text"
              disabled={isPending}
              onClick={onCancel}
              label={t('CANCEL')}
              id="auth-cancelDisable2FA-button"
              fullWidth
            />
          </Stack>
        </form>
      </div>
    </div>
  );
}
