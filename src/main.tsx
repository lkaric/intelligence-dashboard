import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { AppTheme } from './theme';

import { Router } from './router';

const element = document.getElementById('root')!;

createRoot(element).render(
  <StrictMode>
    <AppTheme>
      <Router />
    </AppTheme>
  </StrictMode>,
);
