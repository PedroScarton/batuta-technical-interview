import { buildAlpha } from './utils';

export const darkNeutral = {
  900: 'rgb(26,26,26)',
  800: 'rgb(38,39,41)',
  700: 'rgb(58,59,61)',
  600: 'rgb(72,72,72)',
  500: 'rgb(84,84,86)',
  400: 'rgb(163,163,163)',
  300: 'rgb(199,197,198)',
  200: 'rgb(229,229,229)',
  100: 'rgb(241,241,241)',
  0: 'rgb(255,255,255)',
};

const lightNeutral = {
  0: darkNeutral[900],
  100: darkNeutral[800],
  200: darkNeutral[700],
  300: darkNeutral[600],
  400: darkNeutral[500],
  500: darkNeutral[400],
  600: darkNeutral[300],
  700: darkNeutral[200],
  800: darkNeutral[100],
  900: darkNeutral[0],
};

const getColor = mode => {
  const neutral = mode === 'dark' ? darkNeutral : lightNeutral;
  const system = {
    danger: 'rgb(229,11,70)',
    alert: 'rgb(255,117,32)',
    warning: 'rgb(249,209,0)',
    success: 'rgb(0,181,119)',
    critical: 'rgb(102,58,181)',
    info: 'rgb(63,190,209)',
  };
  const colors = {
    primary: {
      main: 'rgb(63,190,209)',
      light: 'rgb(82,206,224)',
      dark: 'rgb(50,135,142)',
      contrastText: darkNeutral[900],
    },
    secondary: {
      main: 'rgb(42,125,226)',
      contrastText: darkNeutral[0],
    },
    system,
    backgroundImage: 'rgb(var(--background-gradient-dark))',
    success: { main: system.success },
    danger: {
      main: system.danger,
      contrastText: neutral[0],
    },
    alert: {
      main: system.alert,
      contrastText: neutral[900],
    },
    error: {
      main: system.danger,
      contrastText: neutral[0],
    },
    warning: {
      main: system.warning,
      contrastText: neutral[900],
    },
    critical: {
      main: system.critical,
      contrastText: neutral[0],
    },
    info: {
      main: system.info,
      contrastText: neutral[900],
    },
    black: {
      main: darkNeutral[900],
      contrastText: darkNeutral[0],
    },
    white: {
      main: darkNeutral[0],
      contrastText: darkNeutral[900],
    },
    neutral,
  };

  return {
    ...colors,
    alpha: {
      50: buildAlpha(50, colors),
      25: buildAlpha(25, colors),
      15: buildAlpha(15, colors),
      5: buildAlpha(5, colors),
      1: buildAlpha(1, colors),
    },
  };
};

export default {
  dark: getColor('dark'),
  light: getColor('light'),
};
