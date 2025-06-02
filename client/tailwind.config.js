import plugin from 'tailwindcss/plugin';

export const content = ['./src/**/*.{html,js,jsx}', './index.html'];
export const darkMode = 'class';
export const theme = {
  colors: {
    transparent: 'transparent',
    /* dynamic colors */
    primary: {
      DEFAULT: 'rgb(var(--color-primary-main) / <alpha-value>)',
      main: 'rgb(var(--color-primary-main) / <alpha-value>)',
      light: 'rgb(var(--color-primary-light) / <alpha-value>)',
      dark: 'rgb(var(--color-primary-dark) / <alpha-value>)',
    },
    black: 'rgb(var(--color-black) / <alpha-value>)',
    white: 'rgb(var(--color-white) / <alpha-value>)',
    secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
    neutral: {
      [0]: 'rgb(var(--color-neutral-0) / <alpha-value>)',
      [100]: 'rgb(var(--color-neutral-100) / <alpha-value>)',
      [200]: 'rgb(var(--color-neutral-200) / <alpha-value>)',
      [300]: 'rgb(var(--color-neutral-300) / <alpha-value>)',
      [400]: 'rgb(var(--color-neutral-400) / <alpha-value>)',
      [500]: 'rgb(var(--color-neutral-500) / <alpha-value>)',
      [600]: 'rgb(var(--color-neutral-600) / <alpha-value>)',
      [700]: 'rgb(var(--color-neutral-700) / <alpha-value>)',
      [800]: 'rgb(var(--color-neutral-800) / <alpha-value>)',
      [900]: 'rgb(var(--color-neutral-900) / <alpha-value>)',
    },
    system: {
      danger: 'rgb(var(--color-system-danger) / <alpha-value>)',
      alert: 'rgb(var(--color-system-alert) / <alpha-value>)',
      warning: 'rgb(var(--color-system-warning) / <alpha-value>)',
      success: 'rgb(var(--color-system-success) / <alpha-value>)',
    },
  },
  fontFamily: {
    title: [
      'Neuemachina',
      'Roboto',
      'Oxygen',
      '-apple-system',
      'BlinkMacSystemFont',
      'Arial',
      'sans-serif',
    ],
    sans: ['Roboto', 'Oxygen', '-apple-system', 'BlinkMacSystemFont', 'Arial', 'sans-serif'],
    mono: [
      'JetBrains Mono',
      'source-code-pro',
      'Menlo',
      'Monaco',
      'Consolas',
      'Courier',
      'monospace',
    ],
  },
  fontSize: {
    tiny: '0.6875rem',
    xs: '.75rem',
    sm: '.875rem',
    base: '1rem',
    lg: '1.25rem',
    xl: '1.5rem',
    '2xl': '1.875rem',
    '3xl': '2rem',
    '4xl': '2.5rem',
    '5xl': '3rem',
    '6xl': '4rem',
    '7xl': '5rem',
  },
  letterSpacing: {
    wide: '0.0125rem',
    wider: '0.03125rem',
    widest: '0.125rem',
  },
  extend: {
    maxWidth: {
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
    },
    boxShadow: {
      sm: '.125rem .125rem 0.25rem rgb(var(--color-black)/0.35), inset 0rem 0rem 1rem rgb(var(--color-black)/ 0.02)',
      md: '.25rem .25rem .375rem rgb(var(--color-black)/0.35), inset 0rem 0rem 1rem rgb(var(--color-black)/ 0.02)',
      inner:
        '0rem 0rem 1rem rgb(var(--color-black)/ 0.02), inset .125rem .125rem 0.25rem rgb(var(--color-black)/0.1)',
      glow: '0rem 0rem .5rem rgb(var(--color-black)/.25), 0rem 0rem 2rem rgb(var(--color-primary-dark)), 0rem 0rem 3.125rem rgb(var(--color-primary-main)/.25), inset 0rem 0rem .5rem rgb(var(--color-black)/.1)',
      'glow-sm':
        '0rem 0rem .125rem rgb(var(--color-black)/.25), 0rem 0rem .5rem rgb(var(--color-primary-dark)), 0rem 0rem .5rem rgb(var(--color-primary-main)/.25), inset 0rem 0rem .125rem rgb(var(--color-black)/.1)',
      card: '0rem 0.25rem 1rem rgb(var(--color-black)/0.35)',
    },
    lineHeight: {
      11: '3rem',
      12: '4rem',
    },
    borderRadius: {
      sm: '0.25rem',
      md: '.5rem',
      lg: '1rem',
      xl: '3.125rem',
    },
    transitionDuration: {
      300: '300ms',
    },
    zIndex: {
      negative: '-999999',
      max: '999999',
    },
    keyframes: {
      blink: {
        '0%, 100%': { opacity: 1 },
        '50%': { opacity: 0 },
      },
      wiggle: {
        '0%, 100%': { transform: 'rotate(-3deg)' },
        '50%': { transform: 'rotate(3deg)' },
      },
      breathe: {
        '0%, 100%': {
          boxShadow: '0 0 20rem .125rem var(--color-primary-100-translucent)',
          borderColor: 'rgb(var(--color-primary-300) / <alpha-value>)',
        },
        '50%': {
          boxShadow: '0 0 20rem .125rem transparent',
          borderColor: 'rgb(var(--color-primary-700) / <alpha-value>)',
        },
      },
      blob: {
        '0%': {
          transform: 'translate(0, 0) scale(1)',
        },
        '33%': {
          transform: 'translate(30px, -50px) scale(1.1)',
        },
        '66%': {
          transform: 'translate(-20px, 20px) scale(0.9)',
        },
        '100%': {
          transform: 'translate(0, 0) scale(1)',
        },
      },
      'glow-pulse': {
        '0%, 100%': {
          filter: 'drop-shadow(0 0 2px rgba(0, 255, 255, 0.4))',
          opacity: '0.7',
        },
        '50%': {
          filter: 'drop-shadow(0 0 6px rgba(0, 255, 255, 0.8)) blur(2px)',
          opacity: '1',
        },
      },
    },
    animation: {
      wiggle: 'wiggle .5s ease-in-out infinite',
      blink: 'blink 1s ease-in-out infinite',
      'breathe-slow': 'breathe 5s infinite ease-in-out',
      blob: 'blob 7s infinite ease-in-out',
      'glow-pulse': 'glow-pulse 1.6s ease-in-out infinite',
    },
  },
};
export const plugins = [
  require('@tailwindcss/aspect-ratio'),
  require('@tailwindcss/forms')({
    strategy: 'class',
  }),
  require('@tailwindcss/typography'),
  require('@tailwindcss/container-queries'),

  // Prevents the blue highlighting of some elements in Chrome when tapping them.
  plugin(function ({ addUtilities }) {
    addUtilities({
      '*': { '-webkit-tap-highlight-color': 'transparent' },
    });
  }),

  // Hides scrollbar
  plugin(function ({ addUtilities }) {
    addUtilities({
      '.hide-scrollbar': {
        'overflow-y': 'scroll',
        'scrollbar-width': 'none' /* Firefox */,
        '-ms-overflow-style': 'none' /* Internet Explorer 10+ */,
      },
      /* WebKit */
      '.hide-scrollbar::-webkit-scrollbar': {
        width: 0,
        height: 0,
      },
    });
  }),
];
