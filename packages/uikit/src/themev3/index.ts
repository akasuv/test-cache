import { createTheme, ThemeOptions } from '@mui/material';
import { breakpoints } from './breakpoints';
import { lightPalette } from './colors';
import { genComponents } from './components';
import { darkPalette } from './darkColors';
import { typography } from './typography';

const spacing: ThemeOptions['spacing'] = 10;
const shape: ThemeOptions['shape'] = {
  borderRadius: 10,
};
export const genTheme = (theme: 'light' | 'dark' = 'light') => {
  const palette = theme === 'light' ? lightPalette : darkPalette;

  const components = genComponents(palette!);
  return createTheme({ palette, typography, spacing, breakpoints, shape, components });
};

export const themev3 = genTheme('light');
export const themeDarkv3 = genTheme('dark');
