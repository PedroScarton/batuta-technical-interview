import { useMemo } from 'react';

import { useTheme } from '@mui/material';

export function useBatutaTheme() {
  const theme = useTheme();
  const palette = useMemo(() => theme.palette, [theme]);
  return {
    palette,
    themeMode: theme.palette.mode,
    themeDirection: theme.direction,
  };
}

export function useChartsPalette() {
  const { palette } = useBatutaTheme();
  return {
    POSITIVE: palette.system.success,
    NEGATIVE: palette.system.danger,
    CRITICAL: palette.system.danger,
    HIGH: palette.system.alert,
    MEDIUM: palette.system.warning,
    LOW: palette.neutral[400],
    NEUTRAL: palette.neutral[600],
  };
}
