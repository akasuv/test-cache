import { ThemeOptions } from '@mui/material/styles';
import font from './font';

const buttonStyle = (palette: any) => {
  return {
    defaultProps: {
      disableRipple: true,
    },
    styleOverrides: {
      root: ({ ownerState }: any) => {
        // if (ownerState.color === 'lightGrey') console.log(ownerState);
        return {
          paddingLeft: 20,
          paddingRight: 20,
          boxShadow: 'none',
          borderRadius: '10px',
          height: 44,
          transition: 'all .3s ease',
          '&.MuiButton-contained': {
            '&.MuiLoadingButton-loading': {
              backgroundColor: palette.primary.main,
              color: 'transparent',
            },
            '& .MuiLoadingButton-loadingIndicator': {
              color: palette.primary.contrastText,
            },
          },
          '&.MuiButton-outlined': {
            opacity: 1,
            backgroundColor: 'transparent',
            '&.MuiButton-outlinedInfo': {
              '&:hover': {
                backgroundColor: palette.info?.main || '#161616',
                color: palette.info?.contrastText,
              },
            },

            '&.MuiButton-outlinedPrimary': {
              '&.MuiLoadingButton-loading': {
                backgroundColor: '#fff',
                color: 'transparent',
              },
              '& .MuiLoadingButton-loadingIndicator': {
                color: palette.primary.main,
              },
            },
            '&.MuiButton-outlinedNeutral': {
              color: palette.info?.main,
              '&:hover': {
                backgroundColor: palette.neutral?.main,
                color: palette.info?.main,
              },
            },
            '&.MuiButton-containedNeutral': {
              '&.MuiLoadingButton-loading': {
                backgroundColor: palette.neutral?.main + ' !important',
                color: 'transparent',
              },
              '& .MuiLoadingButton-loadingIndicator': {
                color: palette.neutral?.contrastText,
              },
            },
          },

          ':hover': {
            boxShadow: 'none',
            opacity: 0.8,
          },

          '&.Mui-disabled': {
            borderColor: palette.lightGrey?.light,
            backgroundColor: palette.lightGrey?.light,
            color: palette.text?.disabled,
          },

          ...(ownerState.variant === 'outlined' &&
            ownerState.color === 'lightGrey' && {
              borderColor: palette.lightGrey.dark,
              color: palette.lightGrey.contrastText,
              background: `${palette.background.default} !important`,
              '& .MuiLoadingButton-loadingIndicator': {
                color: palette.lightGrey.contrastText,
              },
            }),
        };
      },
    },
  };
};
export const genComponents = (palette: any): ThemeOptions['components'] => {
  return {
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
    MuiButton: buttonStyle(palette),
    MuiButtonBase: buttonStyle(palette),
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: 0,
          transition: 'all .3s ease',
          boxShadow: 'none',
        },
      },
    },
    MuiUseMediaQuery: {
      defaultProps: {},
    },
    MuiCircularProgress: {
      styleOverrides: {
        root: {},
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
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

    MuiBackdrop: {
      styleOverrides: {
        root: {},
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
    MuiCheckbox: {
      styleOverrides: {
        root: {
          ':hover': {
            backgroundColor: 'transparent',
          },
        },
      },
    },
  };
};
