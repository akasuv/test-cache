import { ThemeOptions } from '@mui/material';

export const lightPalette: ThemeOptions['palette'] = {
  mode: 'light',
  primary: {
    main: '#000000',
    light: '#000000',
    dark: '#000000',
    contrastText: '#fff',
  },
  neutral: {
    main: '#ffffff',
    contrastText: '#000000',
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
    primary: '#000000',
    secondary: '#00000080',
    disabled: '#0000004D',
    third: '#000000B3',
  },
  info: {
    light: '#000000',
    dark: '#000000',
    main: '#000000',
    contrastText: '#ffffff',
  },
  error: { main: '#F00606', contrastText: '#ffffff' },
  timezone: {
    light: '#E08178',
    main: '#D86156',
    dark: '#D86156',
    contrastText: '#ffffff',
  },
  lightGrey: {
    light: '#EAEBEC',
    main: '#00000008',
    dark: '#EAEBEC',
    contrastText: '#000000',
  },
  speaker: {
    main: '#F5841F',
    contrastText: '#ffffff',
  },
  loyalty: {
    light: '#B9F4201A',
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
    paper: '#ffffff',
    default: '#ffffff',
  },
  action: {
    disabledBackground: 'none',
    disabled: '#ffffff',
  },
  grey: {
    50: '#f0f0f0',
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
    500: '#FFFFFF80',
    700: '#FFFFFFB3',
  },
  black: {
    50: '#00000008',
    100: '#0000001A',
    200: '#00000033',
    300: '#0000004D',
    500: '#00000080',
    700: '#000000B3',
  },

  richtext: {
    main: '#000000',
    light: '#000000',
    dark: '#000000',
    contrastText: '#fff',
  },
  divider: '#0000001A',
  cardBackground: '#00000008',
  modalBackground: '#fff',
};
