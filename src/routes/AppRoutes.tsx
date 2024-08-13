import { Box, LoadingOverlay } from '@mantine/core';
import { Suspense, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from '@/modules/Dashboard/pages/DashboardIndex';
import TUIDashboardhell from '@/ui/TUI/Templates/DashboardShell/TUIDashboardShell';
import VendorOnboardingRoutes from '@/modules/VendorOnboarding/VendorOnboardingRoutes';
import useVendorInit from '@/hooks/useVendorInit.ts';
import AccountRoutes from '@/modules/Account/AccountRoutes';
import OrdersManagement from '@/modules/OrdersMangement/OrdersManagement';
import InventoryManagement from '@/modules/InventoryManagment/InventoryManagement';
import ManagementRoutes from '@/modules/Management/ManagementRoutes';

export const AppRoutes = () => {
  const { init } = useVendorInit();

  useEffect(() => {
    init();
  }, []);

  return (
    <Box>
      <Suspense fallback={<LoadingOverlay visible />}>
        <Routes>
          <Route path="onboarding/*" Component={VendorOnboardingRoutes} />
          <Route path="account/*" Component={AccountRoutes} />
          <Route path="" element={<TUIDashboardhell />}>
            <Route path="orders/*" index element={<OrdersManagement />} />
            <Route path="ratings-review/*" element={<Dashboard />} />
            <Route path="inventory/*" element={<InventoryManagement />} />
            <Route path="management/*" element={<ManagementRoutes />} />
            <Route path="home" index element={<Dashboard />} />
            <Route path="" index element={<Dashboard />} />
            <Route path="*" element={<Navigate to={'/'} />} />
          </Route>
        </Routes>
      </Suspense>
    </Box>
  );
};
