import React, { useCallback, useContext } from 'react';

import { Typography } from '@mui/material';

import { useTranslation } from 'react-i18next';

import Button from '@shared/components/form/button';
import Margin from '@shared/components/layout/margin';
import BubbleBackground from '@shared/components/ui/bubbleBackground';
import Card from '@shared/components/ui/card';
import DarkModeButton from '@shared/components/ui/darkModeButton';
import Locale from '@shared/components/ui/locale';
import { useBatutaTheme } from '@shared/hooks/theme-hooks';
import { useAuth } from '@shared/providers/authProvider';
import { ThemeContext } from '@shared/theme/theme';

import LightLogo from '@assets/images/Batuta_Logo_Black.svg';
import DarkLogo from '@assets/images/Batuta_Logo_White.svg';

import styles from './login.module.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation('auth');
  const navigate = useNavigate();

  const { signOut } = useAuth();

  const { palette } = useBatutaTheme();

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    signOut();

    navigate('/login');
  }, []);

  return (
    <div className={styles.login}>
      <BubbleBackground />
      <Card className="bg-neutral-900 opacity-85">
        <div className={styles.logotipo}>
          <img src={theme == 'dark' ? DarkLogo : LightLogo} alt="Batuta logotipo" />
        </div>

        <div className={styles.singInText}>
          <div className="mt-2">
            <div className="mb-1">
              <Typography variant="title-sm">{t('SUCCESS')}</Typography>
            </div>
          </div>
          <div className={styles.locale}>
            <DarkModeButton />
            <Locale />
          </div>
        </div>

        <Margin top={32} />

        <div className="flex flex-col gap-2">
          <Button
            id="auth-login-signIn-button"
            onClick={onSubmit}
            variant="contained"
            label={t('SIGN_OUT')}
            fullWidth
            color={palette.black.main}
          />
        </div>
      </Card>
    </div>
  );
};

export default Login;
