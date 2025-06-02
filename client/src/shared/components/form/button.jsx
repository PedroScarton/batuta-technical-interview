import React from 'react';

import LoadingButton from '@mui/lab/LoadingButton';

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
  ...rest
}) => {
  return (
    <div className={`${fullWidth && styles.buttonFullWidth} ${containerClasses || ''}`}>
      <LoadingButton
        variant={variant || 'contained'}
        {...rest}
        fullWidth={fullWidth}
        sx={{ boxShadow, color }}
        color={variantStyle}
        id={id}
      >
        {label}
        {children}
      </LoadingButton>
    </div>
  );
};

export default Button;
