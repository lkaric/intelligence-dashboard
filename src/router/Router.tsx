import { BrowserRouter, Routes, Route, Navigate } from 'react-router';

import { Layout } from '../features';

import { DashboardPage } from '../pages';

const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route index path="/" element={<Navigate to="/dashboard" />} />
      <Route element={<Layout />}>
        <Route index path="/dashboard" element={<DashboardPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export { Router };
