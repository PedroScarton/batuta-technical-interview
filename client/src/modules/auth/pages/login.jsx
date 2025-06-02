import React, { useCallback, useContext, useEffect, useRef } from 'react';

import { Link, Typography } from '@mui/material';

import { useTranslation } from 'react-i18next';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

import Button from '@shared/components/form/button';
import Input from '@shared/components/form/input';
import Margin from '@shared/components/layout/margin';
import BubbleBackground from '@shared/components/ui/bubbleBackground';
import CallOut from '@shared/components/ui/callOut';
import Card from '@shared/components/ui/card';
import DarkModeButton from '@shared/components/ui/darkModeButton';
import Locale from '@shared/components/ui/locale';
import { useBatutaTheme } from '@shared/hooks/theme-hooks';
import { useAuth } from '@shared/providers/authProvider';
import { ThemeContext } from '@shared/theme/theme';

import ErrorEmailIcon from '@assets/icons/email_pink.svg';
import LightLogo from '@assets/images/Batuta_Logo_Black.svg';
import DarkLogo from '@assets/images/Batuta_Logo_White.svg';
import { useForm } from '@hooks/form-hook';
import { VALIDATOR_EMAIL, VALIDATOR_REQUIRE } from '@utils/validators';

import styles from './login.module.css';

const Login = () => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation('auth');
  const inputs = { email: '', password: '' };
  const validities = { email: false, password: false };
  const [formState, inputHandler] = useForm(inputs, validities);
  const { signIn, state } = useAuth();
  const naveigate = useNavigate();

  const { palette } = useBatutaTheme();

  const emailInputRef = useRef(null);

  useEffect(() => {
    if (emailInputRef.current) {
      emailInputRef.current.focus();
    }
  }, []);

  const submitHandler = useCallback(() => {
    const { inputValues } = formState;

    const token = signIn(inputValues);

    if (token) {
      naveigate('/loged');
    }
  }, [formState, signIn, state]);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      submitHandler();
    }
  };

  return (
    <div className={styles.login} onKeyDown={handleKeyPress}>
      <BubbleBackground />
      <Card className="bg-neutral-900 opacity-85">
        <div className={styles.logotipo}>
          <img src={theme == 'dark' ? DarkLogo : LightLogo} alt="Batuta logotipo" />
        </div>

        <div className={styles.singInText}>
          <div className="mt-2">
            <div className="mb-1">
              <Typography variant="title-sm">{t('SIGN_IN')}</Typography>
            </div>
            <Typography variant="body-md">{t('SIGN_IN_MESSAGE')}</Typography>
          </div>
          <div className={styles.locale}>
            <DarkModeButton />
            <Locale />
          </div>
        </div>

        {state.message && (
          <>
            <CallOut
              type={state.message.status}
              title={t(state.message.title)}
              message={t(state.message.text)}
            />
            <Margin bottom={16} />
          </>
        )}

        <div className={`${styles.emailPasswordBox} ${styles.boxShown}`}>
          <Input
            id="email"
            label={t('EMAIL')}
            onInput={inputHandler}
            helperText={t('EMAIL_HELPER')}
            errorText={t('EMAIL_ERROR')}
            errorIcon={ErrorEmailIcon}
            validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
            required
            reference={emailInputRef}
          />
          <Margin top={16} />
          <Input
            type="password"
            id="password"
            label={t('password')}
            onInput={inputHandler}
            errorText={t('PASSWORD_ERROR')}
            validators={[VALIDATOR_REQUIRE()]}
            required
          />
        </div>

        <Margin top={32} />

        <div className="flex flex-col gap-2">
          <Button
            id="auth-login-signIn-button"
            onClick={submitHandler}
            variant="contained"
            disabled={!formState.formIsValid}
            label={t('SIGN_IN')}
            loading={state.isSigningIn}
            fullWidth
            color={palette.black.main}
          />
          <div className={styles.linkContainer}>
            <Link
              component={RouterLink}
              className={styles.link}
              to="/recovery"
              id="auth-login-forgotPasswordOrBack-link"
            >
              {t('FORGOT_PASSWORD')}
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Login;
