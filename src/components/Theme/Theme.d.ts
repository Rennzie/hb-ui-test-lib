export interface Theme {
  color: {
    common: {
      black: string;
      white: string;
    };
    primary: SimpleColor;
    text: TextColors;
  };

  typography: {
    primaryFont: string;
  };
}

interface SimpleColor {
  light: string;
  main: string;
  dark: string;
  contrastText: string;
}

interface TextColors {
  primary: string;
  secondary: string;
  disabled: string;
  caption: string;
}
