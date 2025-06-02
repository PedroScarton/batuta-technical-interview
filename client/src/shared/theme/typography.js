const breadcrumbStyle = {
  fontFamily: 'Neuemachina, Roboto, Oxygen, -apple-system, BlinkMacSystemFont, Arial, sans-serif',
  fontWeight: 200,
  fontSize: '1rem',
  textTransform: 'uppercase',
  letterSpacing: '2px',
};
const headerStyle = {
  fontFamily: 'Neuemachina, Roboto, Oxygen, -apple-system, BlinkMacSystemFont, Arial, sans-serif',
  letterSpacing: '2px',
  textTransform: 'uppercase',
};
const menuLink = {
  fontSize: '0.875rem',
  fontWeight: 500,
  letterSpacing: '0.5px',
  lineHeight: '18px',
};
const consoleFont = {
  fontFamily: 'JetBrains Mono, source-code-pro, Menlo, Monaco, Consolas, Courier, monospace',
  fontWeight: '400',
};
export const figmaFonts = {
  fontFamily: 'Roboto, Oxygen, -apple-system, BlinkMacSystemFont, Arial, sans-serif',
  button: {
    fontWeight: 400,
    fontSize: '0.875rem',
    letterSpacing: '0.0625rem',
    lineHeight: '1rem',
  },
  breadcrumb: breadcrumbStyle,
  menuLink: { ...menuLink, color: 'rgb(var(--color-neutral-300))' },
  'display-lg': {
    ...headerStyle,
    fontSize: '3rem',
    lineHeight: '3rem',
  },
  'title-lg': {
    ...headerStyle,
    fontSize: '2rem',
    lineHeight: '2.75rem',
  },
  'title-md': {
    ...headerStyle,
    fontSize: '1.75rem',
    lineHeight: '1.75rem',
  },
  'title-sm': {
    ...headerStyle,
    fontSize: '1.25rem',
    lineHeight: '1.75rem',
  },
  'title-xs': {
    ...headerStyle,
    fontSize: '1rem',
    lineHeight: '1.5rem',
  },
  'body-lg': {
    fontSize: '1rem',
    lineHeight: '1.5rem',
    letterSpacing: '1.25%',
    fontWeight: 400,
  },
  'body-md': {
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    letterSpacing: '1.25%',
    fontWeight: 400,
  },
  'body-sm': {
    fontSize: '0.75rem',
    lineHeight: '1.125rem',
    letterSpacing: '1.25%',
    fontWeight: 400,
  },
  'label-xxl': {
    fontWeight: 500,
    fontSize: '2rem',
    lineHeight: '2.125rem',
    letterSpacing: '0.5px',
  },
  'label-xl': {
    fontWeight: 500,
    fontSize: '1.5rem',
    lineHeight: '1.625rem',
    letterSpacing: '0.5px',
  },
  'label-lg': {
    fontWeight: 700,
    fontSize: '1.25rem',
    lineHeight: '1.375rem',
    letterSpacing: '0.5px',
  },
  'label-md': {
    fontWeight: 500,
    fontSize: '0.875rem',
    lineHeight: '1rem',
    letterSpacing: '0.5px',
  },
  'label-sm': {
    fontWeight: 500,
    fontSize: '0.75rem',
    lineHeight: '1rem',
    letterSpacing: '0.5px',
  },
  'charts-legend': {
    ...headerStyle,
    fontSize: '0.75rem',
    lineHeight: '1rem',
  },
  'console-lg': {
    ...consoleFont,
    fontSize: '1rem',
    lineHeight: '1.5rem',
    letterSpacing: '1.25%',
  },
  'console-md': {
    ...consoleFont,
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    letterSpacing: '1.25%',
  },
  'link-lg': {
    textDecoration: 'underline',
    fontSize: '1rem',
    lineHeight: '1.25rem',
    letterSpacing: '1.25%',
  },
  'link-md': {
    textDecoration: 'underline',
    fontSize: '0.875rem',
    lineHeight: '1rem',
    letterSpacing: '1.25%',
  },
  'link-sm': {
    textDecoration: 'underline',
    fontSize: '0.75rem',
    lineHeight: '1rem',
    letterSpacing: '1.25%',
  },
  'link-md-color': {
    textDecoration: 'underline',
    fontSize: '0.875rem',
    lineHeight: '1rem',
    letterSpacing: '1.25%',
    color: 'primary',
  },
};

figmaFonts['span-lg'] = {
  ...figmaFonts['body-lg'],
  fontWeight: 800,
};
figmaFonts['span-md'] = {
  ...figmaFonts['body-md'],
  fontWeight: 800,
};
figmaFonts['span-sm'] = {
  ...figmaFonts['body-sm'],
  fontWeight: 800,
};

figmaFonts['italic-lg'] = {
  ...figmaFonts['body-lg'],
  fontWeight: 300,
  fontStyle: 'italic',
};
figmaFonts['italic-md'] = {
  ...figmaFonts['body-md'],
  fontWeight: 300,
  fontStyle: 'italic',
};
figmaFonts['italic-sm'] = {
  ...figmaFonts['body-sm'],
  fontWeight: 300,
  fontStyle: 'italic',
};
