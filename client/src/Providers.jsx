import React, { useState } from 'react';

import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import AuthProvider from '@shared/providers/authProvider';
import CustomSnackbarProvider from '@shared/providers/customSnackbarsProvider';
import QueryProvider from '@shared/providers/queryProvider';
import ThemeColorSwitch from '@shared/providers/themeColorSwitch';
import { ThemeContext, themes } from '@shared/theme/theme';

export default function Providers({ children }) {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const themeProviderValue = { theme, setTheme };
  return (
    <ThemeContext.Provider value={themeProviderValue}>
      <ThemeColorSwitch theme={theme} />
      <ThemeProvider theme={themes[theme]}>
        <CssBaseline />
        <CustomSnackbarProvider>
          <AuthProvider>
            <QueryProvider>{children}</QueryProvider>
          </AuthProvider>
        </CustomSnackbarProvider>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
