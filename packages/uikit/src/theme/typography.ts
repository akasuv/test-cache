import { ThemeOptions } from '@mui/material';
import { breakpoints } from './breakpoints';

export const fontFamily = [
  'Plus Jakarta Sans',
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
  // fontFamily:
  //   '"Microsoft Yahei", "PingFang SC", "PingFang TC", "Hiragino Sans", "Hiragino Kaku Gothic Pro", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, "Oxygen Sans", Cantarell, "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Lucida Grande", Helvetica, Arial, sans-serif',
  // User Handle

  h1: {
    fontWeight: 800,
    fontSize: 40,
    lineHeight: '50px',
    color: '#333',
    [`@media (max-width:${breakpoints!.values!.sm}px)`]: {
      fontSize: '5.6rem',
      lineHeight: '7rem',
    },
  },
  h2: {
    fontWeight: 800,
    fontSize: 24,
    lineHeight: '30px',
    color: '#333',
  },
  h3: {
    fontWeight: 700,
    fontSize: 20,
    lineHeight: '25px',
    color: '#333',
    [`@media (max-width:${breakpoints!.values!.sm}px)`]: {
      fontSize: '3.6rem',
      lineHeight: '4.5rem',
    },
  },
  subtitle1: {
    fontSize: 16,
    fontWeight: 500,
    color: '#333',
    [`@media (max-width:${breakpoints!.values!.sm}px)`]: {
      fontSize: '2.8rem',
      lineHeight: '3.5rem',
    },
  },
  subtitle2: {
    fontSize: 16,
    fontWeight: 400,
    color: '#333',
    [`@media (max-width:${breakpoints!.values!.sm}px)`]: {
      fontSize: '2.6rem',
      lineHeight: '3.2rem',
    },
  },
  body1: {
    fontSize: 16,
    fontWeight: 500,
    lineHeight: '24px',
    color: '#333',
  },
  // block content
  body2: {
    fontSize: 14,
    fontWeight: 400,
    color: '#333',
    [`@media (max-width:750px)`]: {
      fontSize: '2.8rem',
    },
  },
  button: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '20px',
    textTransform: 'none',
    [`@media (max-width:750px)`]: {
      fontSize: '2.6rem',
    },
  },
  p2: {
    fontSize: 16,
    fontWeight: 600,
  },
  p3: {
    fontSize: 14,
    fontWeight: 500,
    [`@media (max-width:${breakpoints!.values!.sm}px)`]: {
      fontSize: '2.6rem',
      lineHeight: '3.2rem',
    },
  },
};
