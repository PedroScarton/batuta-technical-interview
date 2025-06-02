import { figmaFonts } from './typography';

export const themeIndependentComponents = {
  MuiChip: {
    styleOverrides: {
      root: ({ theme }) => ({
        fontWeight: 400,
        color: theme.palette.neutral[0],
      }),
      filled: ({ theme }) => ({
        '&.MuiChip-colorPrimary': {
          color: theme.palette.black.main,
          '&:hover': {
            color: theme.palette.alpha[50].black.main,
          },
        },
        '&.MuiChip-colorWarning': {
          color: theme.palette.black.main,
          '&:hover': {
            color: theme.palette.alpha[50].black.main,
          },
        },
      }),
      outlined: ({ theme }) => ({
        '&.MuiChip-colorPrimary': {
          color: theme.palette.primary.main,
        },
        '&.MuiChip-colorInfo': {
          color: theme.palette.neutral[100],
          '&:hover': {
            backgroundColor: theme.palette.neutral[700],
          },
        },
      }),
    },
  },
  MuiDrawer: {
    styleOverrides: {
      paper: {
        background: 'transparent',
        border: 'none',
        zIndex: '10',
        position: 'relative',
        width: '100%',
      },
      root: {
        height: 'calc(100dvh - 3.5rem) !important',
        zIndex: '10',
        position: 'fixed',
        right: 0,
        bottom: 0,
      },
    },
  },
  MuiCssBaseline: {
    styleOverrides: {
      main: {
        backgroundImage: 'var(--main-background-dark)',
        backgroundAttachment: 'fixed',
      },
      header: {
        background: 'rgb(var(--color-neutral-800))',
      },
      aside: {
        background: 'rgb(var(--color-neutral-800))',
      },
    },
    text: {
      color: 'rgb(var(--color-neutral-0))',
    },
    startIcon: {
      marginLeft: 0,
    },
  },
  MuiCssBaseline: {
    styleOverrides: {
      main: {
        backgroundImage: 'var(--background-gradient)',
      },
      header: {
        background: 'rgb(var(--color-neutral-900))',
      },
      aside: {
        background: 'rgb(var(--color-black))',
        color: 'rgb(var(--color-white))',
      },
      span: {
        '&.tab': {
          '& span': {
            background: 'rgb(var(--color-neutral-800))',
          },
        },
        '&.activeTab': {
          color: 'rgb(var(--color-neutral-900))',
          borderColor: 'rgb(var(--color-primary-main))',
          '& span': {
            '&:nth-of-type(2)': {
              background: 'rgb(var(--color-primary-main))',
              borderColor: 'rgb(var(--color-primary-main))',
            },
            '&:first-of-type': {
              background: 'rgb(var(--color-primary-main))',
              borderColor: 'rgb(var(--color-primary-main))',
            },
          },
        },
        '&.borderTab': {
          color: 'rgb(var(--color-primary-main))',
          '& span': {
            borderColor: 'rgb(var(--color-primary-light)) !important',
          },
        },
        '&.borderTab span': {
          borderColor: 'rgb(var(--color-primary-light))',
        },
      },
      '.modal': {
        background: 'rgb(var(--color-neutral-0))',
      },
      '.modal.outlined': {
        border: '1px solid rgb(var(--color-neutral-500))',
      },
      '.modal.lighter': {
        background: 'rgb(var(--color-neutral-700))',
      },
      '.overviewMap': {
        fill: 'rgb(var(--color-neutral-400))',
        stroke: 'rgb(var(--color-neutral-800))',
      },
      '.overviewMap2': {
        fill: 'rgb(var(--color-neutral-400))',
        stroke: 'rgb(var(--color-neutral-800))',
      },
      '.overviewMapMarker': {
        fill: 'rgb(var(--color-system-success))',
        stroke: 'rgb(var(--color-neutral-100)/0.5)',
      },
      '.overviewMapMarker.active': {
        fill: 'rgb(var(--color-system-success))',
        stroke: 'rgb(var(--color-neutral-100)/0.5)',
      },
      '.userItem': {
        color: 'rgb(var(--color-neutral-0))',
        borderColor: 'rgb(var(--color-neutral-500))',
        '&:hover': {
          color: 'rgb(var(--color-neutral-700))',
        },
      },
      '.userSelect div': {
        color: 'rgb(var(--color-neutral-600))',
      },
      text: {
        fill: 'rgb(var(--color-neutral-0))',
      },
    },
  },
  MuiSwitch: {
    styleOverrides: {
      root: {
        borderRadius: 100,
        width: 42,
        height: 24,
        padding: 8,
        margin: 0,
      },
      switchBase: {
        borderRadius: 100,
        color: 'rgb(var(--color-neutral-0))',
        padding: 0,
        '&.Mui-checked': {
          WebkitTransform: 'translateX(.75rem)',
          MozTransform: 'translateX(.75rem)',
          msTransform: 'translateX(.75rem)',
          transform: `translateX(.75rem)`,
        },
      },
      thumb: {
        borderRadius: 100,
        width: 12,
        height: 12,
        color: 'rgb(var(--color-neutral-0))',
      },
      track: {
        borderRadius: 100,
        backgroundColor: 'rgb(var(--color-neutral-600))',
        borderWidth: 0,
        opacity: 1,
        '.Mui-checked.Mui-checked + &': {
          opacity: 1,
          backgroundColor: 'rgb(var(--color-primary-main))',
        },
      },
    },
  },
  MuiButton: {
    defaultProps: {
      disableElevation: true,
    },
    styleOverrides: {
      root: {
        fontWeight: 500,
        borderRadius: 8,
        textTransform: 'none',
        fontFamily: 'Roboto',
        fontSize: '.875rem',
        '&:hover': {
          boxShadow: 'none',
        },
        padding: '.75rem 1.5rem',
      },
      startIcon: {
        marginLeft: 0,
      },
      text: {
        '&.blue': {
          color: 'rgb(var(--color-primary-light))',
        },
      },
    },
    variants: [
      {
        props: { color: 'secondary' },
        style: {
          '&:hover': {
            background: 'rgb(var(--color-secondary))',
          },
        },
      },
      {
        props: { variant: 'outlined' },
        style: {
          border: '1px solid',
        },
      },
      {
        props: { variant: 'outlined-blue' },
        style: {
          color: 'rgb(var(--color-primary-light))',
          border: '1px solid rgb(var(--color-primary-light))',
        },
      },
      {
        props: { variant: 'nav-menu' },
        style: {
          padding: '.375rem .5rem',
          '&:hover': {
            backgroundColor: 'rgb(var(--color-neutral-0)/0.1) !important',
          },
        },
      },
      {
        props: { variant: 'sidebar' },
        style: {
          padding: '.375rem',
          borderRadius: '.25rem',
          minWidth: 'unset',
          '&:hover': {
            backgroundColor: 'rgb(var(--color-neutral-0)/0.1)',
          },
        },
      },
      {
        props: { variant: 'sidebar_active' },
        style: {
          padding: '.375rem',
          borderRadius: '.25rem',
          minWidth: 'unset',
          backgroundColor: 'rgb(var(--color-neutral-0)/0.1)',
          '&:hover': {
            backgroundColor: 'rgb(var(--color-neutral-0)/0.1)',
            color: 'rgb(var(--color-neutral-0))',
          },
        },
      },
    ],
  },
  MuiIconButton: {
    styleOverrides: {
      root: {
        color: 'inherit',
      },
    },
  },
  MuiLink: {
    styleOverrides: {
      root: ({ theme }) => ({
        textDecoration: 'none',
        color:
          theme.palette.mode === 'dark'
            ? 'rgb(var(--color-neutral-0))'
            : 'rgb(var(--color-primary-main))',
        '&:hover, &:visited:hover': {
          color: 'rgb(var(--color-neutral-400))',
        },
        '&:visited': {
          color: 'rgb(var(--color-neutral-0))',
        },
      }),
    },
    variants: [
      {
        props: { variant: 'breadcrumb' },
        style: {
          color: 'rgb(var(--color-neutral-0))',
          '&:hover, &:visited:hover': {
            color: 'rgb(var(--color-neutral-300))',
          },
          '&:visited': {
            color: 'rgb(var(--color-neutral-0))',
          },
        },
      },
      {
        props: { variant: 'body1-link' },
        style: {
          color: 'rgb(var(--color-primary-light))',
          '&:visited': {
            color: 'rgb(var(--color-primary-light))',
          },
        },
      },
    ],
  },
  MuiTableHead: {
    styleOverrides: {
      root: {
        zIndex: '1000',
        marginBottom: '.5rem',
        background: 'rgb(var(--color-neutral-800))',
      },
    },
  },
  MuiTableRow: {
    styleOverrides: {
      head: {
        borderRadius: '1rem',
        ':nth-of-type(2)': {
          height: '1.25rem',
        },
      },
      root: {
        fontSize: '0.75rem',
        '&.Mui-selected': {
          backgroundColor: 'rgb(var(--color-primary-main)/.05)',
        },
        ':first-of-type .MuiTableCell-body:first-of-type': {
          borderRadius: '.5rem 0rem 0rem 0rem',
        },
        ':first-of-type .MuiTableCell-body:last-of-type': {
          borderRadius: '0rem .5rem 0rem 0rem',
        },
        ':last-of-type .MuiTableCell-body:first-of-type': {
          borderRadius: '0rem 0rem 0rem .5rem',
        },
        ':last-of-type .MuiTableCell-body:last-of-type': {
          borderRadius: '0rem 0rem .5rem 0rem',
        },
        '& .MuiTableCell-root.checkable:first-of-type': {
          // borderRight: '0',
          paddingLeft: '.5rem',
          paddingRight: '.5rem',
        },
        '& .MuiTableCell-root.checkable:nth-of-type(2)': {
          borderLeft: '0',
        },
        '& .MuiTableCell-root.Mui-selected': {
          backgroundColor: 'rgb(var(--color-primary-main)/.15)',
        },
      },
    },
  },
  MuiTableBody: {
    styleOverrides: {
      root: {
        borderRadius: '.5rem',
      },
    },
  },
  MuiTableCell: {
    styleOverrides: {
      head: {
        fontSize: '0.875rem',
        lineHeight: 'unset',
        padding: '.5rem',
        background: 'none',
        ':first-of-type': {
          borderRadius: '.5rem 0rem 0rem .5rem',
        },
        ':last-of-type': {
          borderRadius: '0rem .5rem .5rem 0rem',
        },
      },
      body: {
        fontSize: '0.875rem',
        lineHeight: 'unset',
        padding: '.5rem',
        fontWeight: '300',
      },
      root: {
        border: '1px solid rgb(var(--color-neutral-500))',
      },
    },
  },
  MuiContainer: {
    styleOverrides: {
      root: {
        background: 'rgb(var(--color-neutral-700))',
      },
    },
    variants: [
      {
        props: { variant: 'contrast' },
        style: {
          background: 'rgb(var(--color-neutral-800))',
        },
      },
    ],
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        borderWidth: 1.5,
        background: 'rgb(var(--color-neutral-800))',
        borderColor: 'rgb(var(--color-neutral-500))',
        borderStyle: 'solid',
        borderWidth: '1px',
        color: 'rgb(var(--color-neutral-0))',
        boxShadow: 'none',
      },
    },
    variants: [
      {
        props: { variant: 'tab' },
        style: {
          borderRadius: 0,
          borderTopRightRadius: 8,
          borderTopLeftRadius: 8,
          background: 'rgb(var(--color-neutral-900))',
          border: 'none',
        },
      },
      {
        props: { variant: 'tab', active: 'true' },
        style: {
          background: 'rgb(var(--color-neutral-800))',
        },
      },
      {
        props: { variant: 'modal' },
        style: {
          background: 'rgb(var(--color-neutral-800))',
        },
      },
      {
        props: { variant: 'light' },
        style: {
          background: 'rgb(var(--color-neutral-700))',
        },
      },
      {
        props: { variant: 'light-no_border' },
        style: {
          background: 'rgb(var(--color-neutral-700))',
          borderWidth: 0,
          borderColor: 'transparent',
        },
      },
      {
        props: { variant: 'userMenu' },
        style: {
          borderRadius: 0,
          border: 'none',
          background: 'rgb(var(--color-neutral-800)) !important',
        },
      },
      {
        props: { variant: 'container' },
        style: {
          border: 'none',
          borderRadius: 0,
          background: 'rgb(var(--color-neutral-800))',
        },
      },
      {
        props: { variant: 'codebox' },
        style: {
          border: 'none',
          borderRadius: 8,
          background: 'rgb(var(--color-neutral-900))',
        },
      },
      {
        props: { variant: 'settings' },
        style: {
          border: 'none',
          borderRadius: 0,
          '&:hover': {
            background: 'rgb(var(--color-neutral-700))',
          },
        },
      },
      {
        props: { variant: 'activeSettings' },
        style: {
          border: 'none',
          borderRadius: 0,
          background: 'rgb(var(--color-neutral-500))',
        },
      },
      {
        props: { variant: 'overview' },
        style: {
          background: 'rgb(var(--color-neutral-800))',
        },
      },
      {
        props: { variant: 'noBorder' },
        style: {
          background: 'rgb(var(--color-neutral-800))',
          borderWidth: 0,
          borderColor: 'transparent',
        },
      },
      {
        props: { variant: 'transparent' },
        style: {
          background: 'transparent',
          borderWidth: 0,
          borderColor: 'transparent',
        },
      },
      {
        props: { variant: 'cardWithShadows' },
        style: {
          display: 'flex',
          flexDirection: 'column',
          border: 'none',
          padding: '.5rem',
          gap: '.5rem',
          height: '20rem',
          boxShadow: '0rem .25rem 1rem rgb(var(--color-black)/0.25)',
          background: 'rgb(var(--color-neutral-800))',
        },
      },
      {
        props: { variant: 'cardWithShadowsLight' },
        style: {
          display: 'flex',
          flexDirection: 'column',
          border: 'none',
          padding: '.5rem',
          gap: '.5rem',
          height: '20rem',
          boxShadow: '0rem .25rem 1.375rem rgb(var(--color-black)/0.25)',
          background: 'rgb(var(--color-neutral-700))',
        },
      },
    ],
  },
  MuiAccordion: {
    styleOverrides: {
      root: {
        margin: '0',
        border: '1px solid rgb(var(--color-neutral-500))',
        boxShadow: 'none',
        background: 'rgb(var(--color-neutral-800))',
      },
    },
  },
  MuiAccordionSummary: {
    styleOverrides: {
      expandIconWrapper: {
        color: 'rgb(var(--color-blue))',
      },
      root: {
        '&.Mui-expanded': {
          borderBottom: '1px solid rgb(var(--color-neutral-500))',
          minHeight: 50,
          margin: 0,
        },
        '& .MuiAccordionSummary-content.Mui-expanded': {
          margin: 0,
        },
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      outlined: {
        border: '1px solid rgb(var(--color-neutral-500))',
        background: 'rgb(var(--color-neutral-800))',
      },
      root: {
        '&.selected': {
          border: '1px solid rgb(var(--color-primary-light))',
        },
      },
    },
  },
  MuiDivider: {
    styleOverrides: {
      root: {
        backgroundColor: 'rgb(var(--color-neutral-500))',
      },
    },
  },
  MuiTypography: {
    variants: [
      {
        props: { variant: 'disabled' },
        style: {
          color: 'rgb(var(--color-neutral-0)/0.5)',
        },
      },
      {
        props: { variant: 'smallCardTitle' },
        style: {
          fontFamily: 'Neuemachina',
          fontSize: '.875rem',
          textTransform: 'uppercase',
          letterSpacing: '0.125rem',
          fontWeight: '400',
        },
      },
    ],
  },
  MuiAlert: {
    variants: [
      {
        props: { severity: 'info' },
        style: {
          background: 'rgb(var(--color-primary-main)/0.15)',
          backdropFilter: 'blur(.675rem)',
          boxShadow: '0rem .5rem 1.25rem 0rem rgb(var(--color-primary-main)/0.15)',
          color: 'rgb(var(--color-neutral-0))',
          '& .MuiAlert-icon .MuiSvgIcon-root': {
            color: 'rgb(var(--color-primary-main))',
          },
        },
      },
      {
        props: { severity: 'success' },
        style: {
          background: 'rgb(var(--color-system-success)/0.15)',
          backdropFilter: 'blur(.675rem)',
          boxShadow: '0rem .5rem 1.25rem 0rem rgb(var(--color-system-success)/0.15)',
          color: 'rgb(var(--color-neutral-0))',
          '& .MuiAlert-icon .MuiSvgIcon-root': {
            color: 'rgb(var(--color-system-success))',
          },
        },
      },
      {
        props: { severity: 'error' },
        style: {
          background: 'rgb(var(--color-system-danger)/0.15)',
          backdropFilter: 'blur(.675rem)',
          boxShadow: '0rem .5rem 1.25rem 0rem rgb(var(--color-system-danger)/0.15)',
          color: 'rgb(var(--color-neutral-0))',
          '& .MuiAlert-icon .MuiSvgIcon-root': {
            color: 'rgb(var(--color-system-danger))',
          },
        },
      },
      {
        props: { severity: 'warning' },
        style: {
          background: 'rgb(var(--color-system-warning)/0.15)',
          backdropFilter: 'blur(.675rem)',
          boxShadow: '0rem .5rem 1.25rem 0rem rgb(var(--color-system-warning)/0.15)',
          color: 'rgb(var(--color-neutral-0))',
          '& .MuiAlert-icon .MuiSvgIcon-root': {
            color: 'rgb(var(--color-system-warning))',
          },
        },
      },
      {
        props: { severity: 'info', type: 'callOut' },
        style: {
          background: 'rgb(var(--color-primary-main)/0.05)',
          backdropFilter: 'blur(.675rem)',
          boxShadow: '0rem .5rem 1.25rem 0rem rgb(var(--color-black)/0.15)',
          color: 'rgb(var(--color-neutral-0))',
        },
      },
      {
        props: { severity: 'success', type: 'callOut' },
        style: {
          background: 'rgb(var(--color-system-success)/0.05)',
          backdropFilter: 'blur(.675rem)',
          boxShadow: '0rem .5rem 1.25rem 0rem rgb(var(--color-black)/0.15)',
          color: 'rgb(var(--color-neutral-0))',
        },
      },
      {
        props: { severity: 'error', type: 'callOut' },
        style: {
          background: 'rgb(var(--color-system-danger)/0.05)',
          backdropFilter: 'blur(.675rem)',
          boxShadow: '0rem .5rem 1.25rem 0rem rgb(var(--color-black)/0.15)',
          color: 'rgb(var(--color-neutral-0))',
        },
      },
      {
        props: { severity: 'warning', type: 'callOut' },
        style: {
          background: 'rgb(var(--color-system-warning)/0.05)',
          backdropFilter: 'blur(.675rem)',
          boxShadow: '0rem .5rem 1.25rem 0rem rgb(var(--color-black)/0.15)',
          color: 'rgb(var(--color-neutral-0))',
        },
      },
    ],
  },
  MuiAlertTitle: {
    styleOverrides: {
      root: {
        fontFamily: 'Neuemachina',
        textTransform: 'uppercase',
        fontSize: '1.25rem',
        fontWeight: '400',
      },
    },
  },
  MuiSnackbarContent: {
    styleOverrides: {
      root: {
        backgroundColor: 'transparent',
        border: 'none',
        boxShadow: 'none',
      },
    },
  },
  MuiFormLabel: {
    styleOverrides: {
      root: figmaFonts['display-md'],
    },
  },
  MuiFormControlLabel: {
    styleOverrides: {
      root: figmaFonts['body-lg'],
    },
  },
};
