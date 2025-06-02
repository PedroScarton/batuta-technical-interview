import React, { useMemo } from 'react';

import { Alert, AlertTitle, Typography } from '@mui/material';

import { useBatutaTheme } from '@shared/hooks/theme-hooks';

import styles from './alert.module.css';

const backgroundAlertMap = palette => ({
  info: palette.primary.main,
  success: palette.system.success,
  error: palette.system.danger,
  warning: palette.system.warning,
});

const AlertBatuta = ({ type, title, message, onClose }) => {
  const { palette } = useBatutaTheme();

  const backgroundAlert = useMemo(() => backgroundAlertMap(palette), [palette]);
  const bg = backgroundAlert[type] || backgroundAlert.info;

  return (
    <Alert
      onClose={onClose}
      severity={type || 'info'}
      sx={{ width: '100%' }}
      className={styles.container}
    >
      {title && <AlertTitle>{title}</AlertTitle>}
      {message && <Typography variant="body-md">{message}</Typography>}
      <div className={styles.animatedBar} style={{ background: bg }} />
    </Alert>
  );
};

export default AlertBatuta;
