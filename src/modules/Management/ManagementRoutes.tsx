import { Route, Routes } from 'react-router-dom';
import ManagementSettings from './pages/ManagementSettings';
import ManageOutlets from './pages/ManageOutlets';
import ManageMembers from './pages/ManageMembers';
import ManagePayouts from './pages/ManagePayouts';
import OutletInstanceRoutes from '../ManageOutlet/OutletInstanceRoutes';

export default function ManagementRoutes() {
  return (
    <Routes>
      <Route path="" index Component={ManagementSettings} />
      <Route path="outlets" Component={ManageOutlets} />
      <Route path="outlets/*" Component={OutletInstanceRoutes} />
      <Route path="members" Component={ManageMembers} />
      <Route path="payouts" Component={ManagePayouts} />
    </Routes>
  );
}
