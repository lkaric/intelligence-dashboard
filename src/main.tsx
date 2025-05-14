import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { CustomProvider as RSUiteProvider } from 'rsuite';

import { Router } from './router';

import 'rsuite/dist/rsuite.min.css';

const element = document.getElementById('root')!;

createRoot(element).render(
  <StrictMode>
    <RSUiteProvider>
      <Router />
    </RSUiteProvider>
  </StrictMode>,
);
