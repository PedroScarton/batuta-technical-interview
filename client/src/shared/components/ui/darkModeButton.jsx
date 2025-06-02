import React, { useCallback, useContext } from 'react';

import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import IconButton from '@mui/material/IconButton';

import { ThemeContext } from '@shared/theme/theme';

const DarkModeButton = ({ notWork = false }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleClick = useCallback(() => {
    if (notWork) {
      return;
    }
    const themeToSet = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', themeToSet);
    setTheme(themeToSet);
  }, [theme]);

  return (
    <IconButton onClick={handleClick} id="theme-button" size="small">
      {theme === 'dark' ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
    </IconButton>
  );
};

export default DarkModeButton;
