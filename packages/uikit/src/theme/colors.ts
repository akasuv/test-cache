import { ThemeOptions } from '@mui/material';

export const palette: ThemeOptions['palette'] = {
  mode: 'light',
  primary: {
    main: '#0DB48C',
    light: '#0DB48C',
    dark: '#0DB48C',
    contrastText: '#fff',
  },
  secondary: {
    main: '#0057FF',
    light: '#3378FF',
    dark: '#0057FF',
    contrastText: '#fff',
  },
  neutral: {
    main: '#fff',
    contrastText: '#161616',
  },
  common: {
    black: 'rgba(0,0,0,0.8)',
    white: '#fff',
  },
  text: {
    primary: '#333',
    secondary: '#808080',
    disabled: '#B3B3B3',
  },
  info: {
    main: '#333',
    contrastText: '#fff',
  },
  error: { main: '#F00606', contrastText: '#fff' },
  timezone: {
    light: '#E08178',
    main: '#D86156',
    dark: '#D86156',
    contrastText: '#fff',
  },
  lightGrey: {
    light: '#EAEBEC',
    main: '#f4f5f6',
    dark: '#EAEBEC',
    contrastText: '#333',
  },
  speaker: {
    main: '#F5841F',
    contrastText: '#fff',
  },
  success: {
    main: '#6AD500',
    light: '#e6f2dd',
  },
  warning: {
    main: '#F0B90B',
    light: '#F0B90B10',
  },
  contrastThreshold: 3,
  tonalOffset: 0.1,
  background: {
    paper: '#fff',
    default: '#fff',
  },
  action: {
    disabledBackground: 'none',
    disabled: '#fff',
  },
  grey: {
    100: '#F4F5F6',
  },
  white: {
    100: '#FFFFFF15',
    200: '#FFFFFF25',
    700: '#FFFFFF70',
  },
  black: {
    300: '#00000030',
  },
  richtext: {
    main: '#000000',
    light: '#000000',
    dark: '#000000',
    contrastText: '#fff',
  },
};
