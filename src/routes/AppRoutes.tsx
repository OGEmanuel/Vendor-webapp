import { Box, LoadingOverlay } from '@mantine/core';
import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from '@/modules/Dashboard';
import TUIDashboardhell from '@/ui/TUI/Templates/DashboardShell/TUIDashboardShell';

export const AppRoutes = () => (
  <Box>
    <BrowserRouter basename="/">
      <Suspense fallback={<LoadingOverlay visible />}>
        <Routes>
          <Route path="" element={<TUIDashboardhell />}>
            <Route path="" index element={<Dashboard />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  </Box>
);
