import { ThemeOptions } from '@mui/material';
import font from './font';
export const components: ThemeOptions['components'] = {
  MuiScopedCssBaseline: {
    styleOverrides: {
      root: font,
    },
  },
  MuiCssBaseline: {
    styleOverrides: {
      root: font,
    },
  },
  MuiButtonBase: {
    defaultProps: {
      // The props to change the default for.
      disableRipple: true, // No more ripple!
    },
    styleOverrides: {
      root: {
        transition: 'all .3s ease',
        fontFamily: 'Plus Jakarta Sans',
      },
    },
  },
  MuiButton: {
    defaultProps: {
      disableRipple: true,
    },
    styleOverrides: {
      root: {
        paddingLeft: 20,
        paddingRight: 20,
        boxShadow: 'none',
        fontWeight: 600,
        transition: 'all .3s ease',
        ':hover': {
          boxShadow: 'none',
          opacity: 0.8,
        },
      },
    },
  },
  MuiIconButton: {
    styleOverrides: {
      root: {
        padding: 0,
      },
    },
  },
  MuiUseMediaQuery: {
    defaultProps: {
      // noSsr: true,
    },
  },
  MuiCircularProgress: {
    styleOverrides: {
      root: {
        // color: '#000',
      },
    },
  },
  MuiPopover: {
    styleOverrides: {
      paper: {
        // background: 'transparent',
        zIndex: 99,
      },
    },
  },
  MuiCollapse: {
    styleOverrides: {
      root: {
        '& .SnackbarItem-variantInfo': {
          backgroundColor: '#000 !important',
        },
      },
    },
  },
  // MuiCheckbox: {
  //   styleOverrides: {
  //     root: {
  //       color: '#000 !important',
  //     },
  //   },
  // },
  MuiBackdrop: {
    styleOverrides: {
      root: {
        // backgroundColor: 'rgba(0, 0, 0, 0.1)',
        // filter: 'blur(20px)',
        // backdropFilter: 'blur(5px)',
      },
    },
  },
  MuiInput: {
    styleOverrides: {
      input: {
        '&::placeholder': {
          color: '#b3b3b3',
        },
      },
    },
  },
  MuiAvatar: {
    styleOverrides: {
      root: {
        fontSize: 14,
      },
    },
  },
};
