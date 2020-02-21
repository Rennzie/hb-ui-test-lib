import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles';
import { defaultTheme } from './DefaultTheme';

interface ThemeProviderProps {
  children: React.ReactChild;
}

// eslint-disable-next-line import/prefer-default-export
export function ThemeProvider({ children }: ThemeProviderProps) {
  return <MuiThemeProvider theme={defaultTheme}>{children}</MuiThemeProvider>;
}

export default ThemeProvider;
