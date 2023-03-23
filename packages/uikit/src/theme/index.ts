import { createTheme, ThemeOptions } from '@mui/material';
import { breakpoints } from './breakpoints';
import { palette } from './colors';
import { components } from './components';
import { fontFamily as _fontFamily, typography } from './typography';

const spacing: ThemeOptions['spacing'] = 10;
const shape: ThemeOptions['shape'] = {
  borderRadius: 6,
};

export const theme = createTheme({ typography, spacing, palette, breakpoints, shape, components });
export const fontFamily = _fontFamily;
