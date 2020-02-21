/* eslint-disable import/prefer-default-export */
import { Theme } from './Theme';

export const defaultTheme: Theme = {
  color: {
    common: {
      black: '#000',
      white: '#fff',
    },
    primary: {
      light: '',
      main: '#00c8ed',
      dark: '#02b2d4',
      contrastText: '#fff',
    },
    // secondary: {
    //   light: '',
    //   main: '',
    //   dark: '',
    //   contrastText: '',
    // },
    // warning: {
    //   light: '',
    //   main: '',
    //   dark: '',
    //   contrastText: '',
    // },
    text: {
      primary: '#fff',
      secondary: '',
      disabled: '',
      caption: '',
    },
  },
  typography: {
    primaryFont: 'Helvetica',
  },
};
