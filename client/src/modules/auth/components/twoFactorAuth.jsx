import React, { useEffect, useState } from 'react';

import Lock from '@mui/icons-material/Lock';
import LockOpen from '@mui/icons-material/LockOpen';
import { Card, Typography } from '@mui/material';

import { useTour } from '@reactour/tour';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import Button from '@shared/components/form/button';
import LoadingSpinner from '@shared/components/ui/loadingSpinner';
import { useAuthInfo } from '@shared/providers/currentUserProvider';

import Disable2FA from './disable2FA';
import Enable2FA from './enable2FA';
import styles from './twoFactorAuth.module.css';

export default function TwoFactorAuth() {
  const { t } = useTranslation('auth');
  const { isOpen: tourOpen } = useTour();

  const [disableFormVisible, setDisableFormVisible] = useState(false);
  const [enableFormVisible, setEnableFormVisible] = useState(false);

  const { info, loading: loadingInfo, refetchAuthInfo } = useAuthInfo();

  const twoFactorEnabled = info && info.twoFactorEnabled && !tourOpen;

  useEffect(() => {
    if (!twoFactorEnabled) {
      setDisableFormVisible(false);
    }
  }, [twoFactorEnabled]);

  const showEnableForm = () => {
    setDisableFormVisible(false);
    setEnableFormVisible(true);
  };

  const showDisableForm = () => {
    setDisableFormVisible(true);
    setEnableFormVisible(false);
  };

  const showStartingPage = () => {
    refetchAuthInfo();
    setDisableFormVisible(false);
    setEnableFormVisible(false);
  };

  if (loadingInfo) {
    return (
      <Card className={styles.loadingCtn}>
        <LoadingSpinner contained />
      </Card>
    );
  }

  let currentElement = (
    <div id="two-factor-auth-container">
      <div className={styles.status}>
        {twoFactorEnabled ? <Lock /> : <LockOpen />}
        <div className="my-2">
          <Typography variant="title-sm">
            {twoFactorEnabled ? t('2FA_AUTH') : t('2FA_DISABLED')}
          </Typography>
        </div>
        <div className={styles.margin}>
          {twoFactorEnabled && (
            <div>
              <Typography variant="body-md">{t('2FA_ENABLED_TEXT')}</Typography>
            </div>
          )}
        </div>
      </div>
      <div className={styles.btnContainer}>
        <Button
          color={twoFactorEnabled ? 'error' : 'primary'}
          label={twoFactorEnabled ? t('2FA_DISABLE') : t('2FA_ENABLE')}
          fullWidth
          onClick={twoFactorEnabled ? showDisableForm : showEnableForm}
          id="auth-disableOrEnable2FA-button"
        />
      </div>
    </div>
  );

  if (enableFormVisible) {
    currentElement = (
      <Enable2FA onCancel={() => setEnableFormVisible(false)} onSubmit={showStartingPage} />
    );
  }

  if (disableFormVisible) {
    currentElement = (
      <Disable2FA onCancel={() => setDisableFormVisible(false)} onSubmit={showStartingPage} />
    );
  }

  return <Card className={styles.container}>{currentElement}</Card>;
}

TwoFactorAuth.propTypes = {
  twoFactorEnabled: PropTypes.bool,
};
