import { ScopedCssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../src/theme';
export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <ScopedCssBaseline />
      <Story />
    </ThemeProvider>
  ),
];
