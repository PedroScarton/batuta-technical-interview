import React, { useCallback, useMemo } from 'react';

import ReportOutlinedIcon from '@mui/icons-material/ReportOutlined';
import { Button, Typography } from '@mui/material';

import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

import MainContainer from '@shared/components/layout/mainContainer';
import ErrorBoundary, { useErrorBoundaryContext } from '@shared/components/suspense/errorBoundary';

import styles from './error.module.css';

export function ErrorPage({ defaultPage }) {
  const { resetErrorBoundary } = useErrorBoundaryContext();
  const location = useLocation();
  const { t } = useTranslation(['error']);

  const initialLocation = useMemo(() => location.pathname, []);

  useMemo(() => {
    if (location.pathname !== initialLocation) {
      resetErrorBoundary();
    }
  }, [location, initialLocation]);

  const navigate = useNavigate();

  const onClickCallback = useCallback(() => {
    if (!defaultPage) return;
    navigate(defaultPage, { replace: true });
    window.location.reload();
  }, [navigate, defaultPage]);

  return (
    <MainContainer>
      <div className={styles.container}>
        <div className="mb-8">
          <ReportOutlinedIcon color="primary" sx={{ width: '9rem', height: '9rem' }} />
        </div>
        <div>
          <Typography variant="title-lg">{t('ERROR_TITLE')}</Typography>
        </div>
        <div>
          <Typography variant="body-lg">{t('ERROR_SUBTITLE')}</Typography>
        </div>
        <div className={styles.buttons}>
          {defaultPage && (
            <Button
              variant="contained"
              onClick={onClickCallback}
              id="errorPage-navigateToMainPage-button"
            >
              {t('MAIN_PAGE')}
            </Button>
          )}
          {import.meta.env.DEV && (
            <Button
              variant="contained"
              onClick={() => navigate(0)}
              id="errorPage-refreshPage-button"
            >
              {t('REFRESH')}
            </Button>
          )}
        </div>
      </div>
    </MainContainer>
  );
}

export default function ErrorHandlerComponent({ children, ...props }) {
  return (
    <ErrorBoundary
      errorComponent={<ErrorPage defaultPage={props.defaultPage} error={props.error} />}
    >
      {children}
    </ErrorBoundary>
  );
}
