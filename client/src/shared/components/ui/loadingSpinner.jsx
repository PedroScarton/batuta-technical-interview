import React from 'react';

import { useBatutaTheme } from '@shared/hooks/theme-hooks';

import Backdrop from './backdrop';
import LogoFluid from './dataBoundComponents/logoFluid';
import styles from './loadingSpinner.module.css';

const LoadingSpinner = ({ contained = false, color, size, style }) => {
  const { themeMode } = useBatutaTheme();

  return contained ? (
    <div className={styles.contained} style={style}>
      <LogoFluid
        size={size}
        color={color || themeMode === 'dark' ? 'rgb(241,241,241)' : 'rgb(26,26,26)'}
      />
    </div>
  ) : (
    <Backdrop main>
      <div className={styles.center}>
        <LogoFluid
          size={size}
          color={color || themeMode === 'dark' ? 'rgb(241,241,241)' : 'rgb(26,26,26)'}
        />
      </div>
    </Backdrop>
  );
};
export default LoadingSpinner;
