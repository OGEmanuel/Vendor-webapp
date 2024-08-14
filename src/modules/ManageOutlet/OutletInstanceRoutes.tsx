import { Route, Routes } from 'react-router-dom';
import ManageOutlet from './pages/ManageOutlet';

export default function OutletInstanceRoutes() {
  return (
    <Routes>
      <Route path=":outletId" index Component={ManageOutlet} />
    </Routes>
  );
}
