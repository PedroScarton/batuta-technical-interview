import React, { useCallback, useState } from 'react';

import EmailIcon from '@mui/icons-material/Email';
import { Link, Typography } from '@mui/material';

import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';

import Button from '@shared/components/form/button';
import Input from '@shared/components/form/input';
import Margin from '@shared/components/layout/margin';
import CallOut from '@shared/components/ui/callOut';
import Card from '@shared/components/ui/card';
import DarkModeButton from '@shared/components/ui/darkModeButton';
import Locale from '@shared/components/ui/locale';
import { useBatutaTheme } from '@shared/hooks/theme-hooks';

import { useForm } from '@hooks/form-hook';
import { VALIDATOR_EMAIL, VALIDATOR_REQUIRE } from '@utils/validators';

import { forgotPassword } from '../services/authService';
import styles from './recovery.module.css';

const Recovery = () => {
  const { t } = useTranslation('auth');
  const inputs = { email: '' };
  const validities = { email: false };
  const [formState, inputHandler] = useForm(inputs, validities);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState();

  const { palette } = useBatutaTheme();

  const submitHandler = useCallback(
    (event) => {
      event.preventDefault();

      const requestPasswordReset = async () => {
        const { formIsValid, inputValues } = formState;

        if (formIsValid) {
          setLoading(true);

          const { error } = await forgotPassword(inputValues.email);

          setLoading(false);

          if (error) {
            setMessage({ text: t(error.code), status: 'error' });
          } else {
            setMessage({ text: t('FORGOT_PASSWORD_SUCCESS'), status: 'success' });
          }
        }
      };

      requestPasswordReset();
    },
    [formState]
  );

  return (
    <div className={styles.recovery}>
      <Card>
        <div className={styles.cardTop}>
          <div className={styles.welcomeText}>
            <div className="mb-1">
              <Typography variant="title-sm">{t('FORGOT_PASSWORD')} </Typography>
            </div>
            <div>
              <Typography variant="body-md">{t('FORGOT_PASSWORD_MESSAGE')}</Typography>
            </div>
          </div>
          <div className={styles.locale}>
            <DarkModeButton />
            <Locale />
          </div>
        </div>

        {message ? (
          <CallOut type={message.status} title={t('RECOVERY_PASSWORD')} message={message.text} />
        ) : (
          <form onSubmit={submitHandler} className="my-10">
            <Input
              id="email"
              label={t('EMAIL')}
              onInput={inputHandler}
              helperText={t('EMAIL_HELPER2')}
              errorText={t('EMAIL_ERROR')}
              validators={[VALIDATOR_REQUIRE()]}
            />
            <Margin top={32} />
            <Button
              id="auth-loging-forgotPassworSubmit-button"
              type="submit"
              disabled={!formState.formIsValid}
              loading={loading}
              label={t('FORGOT_PASSWORD_SUB')}
              fullWidth
              color={palette.black.main}
            />
          </form>
        )}
        <Margin top={50} />
        <div className={styles.footer}>
          <Link component={RouterLink} className="cursor-default" to="/login" id="auth-loging-backToSignIn-link">
            {t('BACK_TO_SIGN_IN')}
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Recovery;
