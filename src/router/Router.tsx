import { BrowserRouter, Routes, Route } from 'react-router';

import { DashboardPage, LandingPage } from '../pages';

const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route index path="/" element={<LandingPage />} />
    </Routes>
    <Routes>
      <Route index path="/dashboard" element={<DashboardPage />} />
    </Routes>
  </BrowserRouter>
);

export { Router };
