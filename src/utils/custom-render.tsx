import React from 'react';

import { render, RenderResult } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { themes } from '../styles/theme';

export const customRender = (children: React.ReactNode): RenderResult => {
  return render(<ThemeProvider theme={themes['light']}>{children}</ThemeProvider>);
};
