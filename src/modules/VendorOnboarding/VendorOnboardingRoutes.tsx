import { Route, Routes } from 'react-router-dom';
import VendorOnboardingPage from './pages/VendorOnboarding';
import TUIOnboardingDashboardShell from '@/ui/TUI/Templates/DashboardShell/TUIOnboardingDashboardShell';

export default function VendorOnboardingRoutes() {
  return (
    <Routes>
      <Route Component={TUIOnboardingDashboardShell}>
        <Route path="" index Component={VendorOnboardingPage} />
      </Route>
    </Routes>
  );
}
