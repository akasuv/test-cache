import LoadingButton from '@mui/lab/LoadingButton';
import { alpha, styled } from '@mui/material/styles';

const StyledLoadingButton = styled(LoadingButton)<{ showTextWhenLoading?: boolean }>(
  ({ theme, showTextWhenLoading = false }) => {
    return {
      transition: 'all 0.3s',
      // contained
      '&.MuiButton-contained': {
        '&.MuiButton-containedPrimary': {
          '&.MuiLoadingButton-loading': {
            backgroundColor: theme.palette.primary.main,
            color: 'transparent',
          },
        },
        '&.MuiButton-containedSecondary': {
          '&.Mui-disabled': {
            backgroundColor: theme.palette.secondary.main,
            opacity: 0.5,
          },
        },
        '&.MuiButton-containedInfo': {
          '&.MuiLoadingButton-loading': {
            color: showTextWhenLoading ? theme.palette.text.secondary : theme.palette.info.main,
            backgroundColor: theme.palette.info.main,
            '& .MuiLoadingButton-loadingIndicator': {
              position: showTextWhenLoading ? 'static' : 'absolute',
              color: theme.palette.text.secondary,
            },
          },

          '&.Mui-disabled': {
            backgroundColor: alpha(theme.palette.info.main, 0.07),
          },
        },
        '&.MuiButton-containedLightGrey': {
          color: theme.palette.text.primary,
          '&.MuiLoadingButton-loading': {
            backgroundColor: theme.palette.grey[100],
            color: 'transparent',
            '& .MuiLoadingButton-loadingIndicator': {
              color: theme.palette.text.primary,
            },
          },
        },
        '&.MuiButton-containedError': {
          '&.MuiLoadingButton-loading': {
            backgroundColor: theme.palette.error.main,
            color: showTextWhenLoading ? theme.palette.error.contrastText : theme.palette.error.main,
            opacity: 0.5,
            '& .MuiLoadingButton-loadingIndicator': {
              position: showTextWhenLoading ? 'static' : 'absolute',
              color: '#fff',
            },
          },
        },
      },
      // outlined
      '&.MuiButton-outlined': {
        '&.MuiButton-outlinedPrimary': {
          '&.MuiLoadingButton-loading': {
            backgroundColor: '#fff',
            color: 'transparent',
          },
          '& .MuiLoadingButton-loadingIndicator': {
            color: theme.palette.primary.main,
          },
        },

        '&.MuiButton-outlinedLightGrey': {
          '&.Mui-disabled': {
            color: theme.palette.text.disabled,
          },
          color: theme.palette.text.primary,
          borderColor: theme.palette.grey[100],
          backgroundColor: '#fff',
          '&.MuiLoadingButton-loading': {
            color: 'transparent',
            backgroundColor: '#fff',
            '& .MuiLoadingButton-loadingIndicator': {
              color: theme.palette.text.primary,
            },
          },
          '&:hover': {
            backgroundColor: '#f4f5f6',
          },
        },
      },

      '&.Mui-disabled': {
        backgroundColor: theme.palette.grey[100],
        color: theme.palette.text.disabled,
      },
    };
  },
);
export default StyledLoadingButton;
