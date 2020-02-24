import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { ThemeProvider } from '../src/components/Theme';

function renderWithProviders(ui, options) {
  return rtlRender(<ThemeProvider>{ui}</ThemeProvider>, options);
}

export * from '@testing-library/react';
export { renderWithProviders as render };
