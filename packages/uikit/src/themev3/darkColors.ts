import { ThemeOptions } from '@mui/material';

export const darkPalette: ThemeOptions['palette'] = {
  mode: 'dark',
  primary: {
    main: '#ffffff',
    light: '#ffffff',
    dark: '#ffffff',
    contrastText: '#000000',
  },
  neutral: {
    main: '#ffffff1A',
    contrastText: '#ffffff',
  },
  secondary: {
    main: '#0057FF',
    light: '#0057FF',
    dark: '#0057FF',
    contrastText: '#ffffff',
  },
  common: {
    black: 'rgba(0,0,0,0.8)',
    white: '#ffffff',
  },
  text: {
    primary: '#ffffff',
    secondary: '#ffffff80',
    disabled: '#ffffff50',
    third: '#ffffffB3',
  },
  info: {
    light: '#ffffff',
    dark: '#ffffff',
    main: '#ffffff',
    contrastText: '#000000',
  },
  error: { main: '#F00606', contrastText: '#fff' },
  timezone: {
    light: '#E08178',
    main: '#D86156',
    dark: '#D86156',
    contrastText: '#ffffff',
  },
  lightGrey: {
    light: '#ffffff08',
    main: '#ffffff1A',
    dark: '#ffffff33',
    contrastText: '#fff',
  },
  speaker: {
    main: '#F5841F',
    contrastText: '#ffffff',
  },
  loyalty: {
    light: 'rgba(185, 244, 32, 0.1)',
    main: '#B9F420',
    dark: '#B9F420',
    contrastText: '#000000',
  },
  loyaltyKol: {
    light: '#FF5C971A',
    main: '#FF5C97',
    dark: '#FF5C97',
    contrastText: '#000000',
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
    paper: '#000000',
    default: '#000000',
  },
  action: {
    disabledBackground: 'none',
    disabled: '#ffffff',
  },
  grey: {
    100: '#F2F2F2',
    200: '#f4f5f6',
    300: '#EAEAEA',
    400: '#DEDEDE',
  },
  white: {
    50: '#00000008',
    100: '#FFFFFF26',
    200: '#FFFFFF40',
    300: '#FFFFFF30',
    500: '#FFFFFF50',
    700: '#FFFFFFB3',
  },
  black: {
    50: '#00000008',
    100: '#0000001A',
    200: '#00000033',
    300: '#0000004D',
    500: '#00000050',
    700: '#000000B3',
  },
  richtext: {
    main: '#ffffff',
    light: '#ffffff',
    dark: '#ffffff',
    contrastText: '#000000',
  },

  divider: '#ffffff3F',
  cardBackground: '#ffffff1A',
  modalBackground: '#1d1d1d',
};
