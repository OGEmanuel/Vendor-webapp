import Dashboard from '@/pages/Dashboard';
import TUIDashboardhell from '@/ui/TUI/Templates/TUIDashboardShell';
import { Box, LoadingOverlay } from '@mantine/core';
import { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

export const AppRoutes = () => (
  <Box>
    <BrowserRouter basename="/">
      <Suspense fallback={<LoadingOverlay visible />}>
        <Routes>
          <Route path="" element={<TUIDashboardhell />} />
          <Route path="" index element={<Dashboard />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </Box>
);
