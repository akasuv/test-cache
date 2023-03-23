import { Color } from '@mui/material';

declare module '@mui/material/styles' {
  interface TypeText {
    third: string;
  }
  interface Palette {
    timezone?: Palette['primary'];
    richtext: Palette['primary'];
    speaker?: Palette['primary'];
    loyalty?: Palette['primary'];
    loyaltyKol?: Palette['primary'];
    lightGrey?: Palette['primary'];
    neutral: PaletteOptions['primary'];
    white: Partial<Color>;
    black: Partial<Color>;
    cardBackground?: string;
    text: TypeText & { third: string };
    modalBackground?: string;
  }
  interface PaletteOptions {
    timezone?: PaletteOptions['primary'];
    loyalty?: PaletteOptions['primary'];
    loyaltyKol?: Palette['primary'];
    richtext: Palette['primary'];
    speaker?: PaletteOptions['primary'];
    lightGrey?: PaletteOptions['primary'];
    neutral: PaletteOptions['primary'];
    white: Partial<Color>;
    black: Partial<Color>;
    text: TypeText & { third: string };
    cardBackground?: string;
    modalBackground?: string;
  }

  interface TypographyVariants {
    p2: React.CSSProperties;
    p3: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    p2?: React.CSSProperties;
    p3?: React.CSSProperties;
  }

  interface Theme {
    ButtonBase: {
      timezone: React.CSSProperties['color'];
      loyalty: React.CSSProperties['color'];
      loyaltyKol: React.CSSProperties['color'];
    };
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsColorOverrides {
    timezone: true;
    loyalty: true;
    loyaltyKol: true;
  }
  interface TypographyPropsVariantOverrides {
    p2: true;
    p3: true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    timezone: true;
    lightGrey: true;
    neutral: true;
    loyalty: true;
    loyaltyKol: true;
  }
}

declare module '@mui/lab/LoadingButton' {
  interface LoadingButtonPropsColorOverrides {
    timezone: true;
    lightGrey: true;
    neutral: true;
    loyalty: true;
    loyaltyKol: true;
  }
}
