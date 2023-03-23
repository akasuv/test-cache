import { ThemeOptions } from '@mui/material';
import { breakpoints } from './breakpoints';

export const fontFamily = [
  'Lexend',
  'Microsoft Yahei',
  'PingFang SC',
  'PingFang TC',
  'Hiragino Sans',
  'Hiragino Kaku Gothic Pro',
  '-apple-system',
  'system-ui',
  'BlinkMacSystemFont',
  'Segoe UI',
  'Roboto',
  'Helvetica Neue',
  'Fira Sans',
  'Ubuntu',
  'Oxygen',
  'Oxygen Sans',
  'Cantarell',
  'Droid Sans',
  'Apple Color Emoji',
  'Segoe UI Emoji',
  'Segoe UI Emoji',
  'Segoe UI Symbol',
  'Lucida Grande',
  'Helvetica',
  'Arial',
  'sans-serif',
];

export const typography: ThemeOptions['typography'] = {
  fontFamily: fontFamily.join(','),
  h1: {
    fontWeight: 500,
    fontSize: 50,
    lineHeight: '62px',
    [`@media (max-width:${breakpoints!.values!.sm}px)`]: {
      fontSize: 28,
      lineHeight: '35px',
    },
  },
  h2: {
    fontWeight: 500,
    fontSize: 36,
    lineHeight: '45px',
    [`@media (max-width:${breakpoints!.values!.sm}px)`]: {
      fontSize: 18,
      lineHeight: '22px',
    },
  },

  h3: {
    fontWeight: 500,
    fontSize: 26,
    lineHeight: '32px',
    [`@media (max-width:${breakpoints!.values!.sm}px)`]: {
      fontSize: 23,
      lineHeight: '29px',
    },
  },
  h4: {
    fontWeight: 500,
    fontSize: 22,
    lineHeight: '28px',
    [`@media (max-width:${breakpoints!.values!.sm}px)`]: {
      fontSize: 18,
      lineHeight: '24px',
    },
  },
  subtitle1: {
    fontSize: 16,
    fontWeight: 500,
    lineHeight: '20px',
    // [`@media (max-width:${breakpoints!.values!.sm}px)`]: {
    //   fontSize: 13,
    //   lineHeight: '16px',
    // },
  },
  subtitle2: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: '20px',
    // [`@media (max-width:${breakpoints!.values!.sm}px)`]: {
    //   fontSize: 14,
    //   lineHeight: '18px',
    // },
  },
  body1: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: '18px',
    // [`@media (max-width:${breakpoints!.values!.sm}px)`]: {
    //   fontSize: 14,
    //   lineHeight: '18px',
    // },
  },
  // block content
  body2: {
    fontSize: 14,
    fontWeight: 400,
  },
  button: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '20px',
    textTransform: 'none',
  },
  p2: {
    fontSize: 16,
    fontWeight: 600,
  },
  p3: {
    fontSize: 14,
    fontWeight: 500,
  },
};
