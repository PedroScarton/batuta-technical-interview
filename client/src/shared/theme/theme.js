import { createContext } from 'react';

import { createTheme } from '@mui/material';

import colors from './colors';
import { themeIndependentComponents } from './components';
import { figmaFonts } from './typography';

export const themes = {
  dark: createTheme({
    palette: {
      mode: 'dark',
      ...colors['dark'],
    },
    typography: figmaFonts,
    components: {
      ...themeIndependentComponents,
    },
  }),

  light: createTheme({
    palette: {
      type: 'light',
      ...colors['light'],
    },
    typography: figmaFonts,
    components: {
      ...themeIndependentComponents,
    },
  }),
};

export const ThemeContext = createContext({
  theme: themes.light,
  setTheme: () => {},
});
