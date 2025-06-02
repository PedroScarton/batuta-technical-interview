import React from 'react';

import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import { Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';

import styles from './error.module.css';

const ErrorPage = ({ error, drawer = false, onClose }) => {
  return (
    <div className={styles.container}>
      {drawer && (
        <div className={styles.drawerHeader}>
          <IconButton onClick={onClose}>
            <CloseSharpIcon />
          </IconButton>
        </div>
      )}
      <div className={styles.content}>
        <div className={styles.text}>
          <Typography variant="body-lg">{error}</Typography>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
