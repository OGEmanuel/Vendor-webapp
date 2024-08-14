import { Box, LoadingOverlay } from '@mantine/core';
import { Suspense, useEffect, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import TUIDashboardhell from '@/ui/TUI/Templates/DashboardShell/TUIDashboardShell';
import useVendorInit from '@/hooks/useVendorInit.ts';
// Lazy load the components
const Dashboard = lazy(() => import('@/modules/Dashboard/pages/DashboardIndex'));
const VendorOnboardingRoutes = lazy(() => import('@/modules/VendorOnboarding/VendorOnboardingRoutes'));
const AccountRoutes = lazy(() => import('@/modules/Account/AccountRoutes'));
const OrdersManagement = lazy(() => import('@/modules/OrdersMangement/OrdersManagement'));
const InventoryManagement = lazy(() => import('@/modules/InventoryManagment/InventoryManagement'));
const ManagementRoutes = lazy(() => import('@/modules/Management/ManagementRoutes'));

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
