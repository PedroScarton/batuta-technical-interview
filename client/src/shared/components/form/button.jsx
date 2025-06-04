import React from 'react';

import { Button as MuiButton } from '@mui/material';

import styles from './button.module.css';

const Button = ({
  id,
  label,
  children,
  variant,
  fullWidth,
  containerClasses,
  boxShadow = 0,
  color,
  variantStyle,
  loading = false,
  ...rest
}) => {
  return (
    <div className={`${fullWidth && styles.buttonFullWidth} ${containerClasses || ''}`}>
      <MuiButton
        variant={variant || 'contained'}
        {...rest}
        fullWidth={fullWidth}
        sx={{ boxShadow, color }}
        color={variantStyle}
        id={id}
        disabled={loading}
      >
        {label}
        {children}
      </MuiButton>
    </div>
  );
};

export default Button;
