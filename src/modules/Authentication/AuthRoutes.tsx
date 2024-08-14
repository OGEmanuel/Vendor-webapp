import { Navigate, Route, Routes } from 'react-router-dom';
import Login from '@/modules/Authentication/pages/Login';
import Register from '@/modules/Authentication/pages/Register';
import ResetPassword from '@/modules/Authentication/pages/ResetPassword';
import TUIAuthShell from '@/ui/TUI/Templates/AuthShell/TUIAuthShell';
import ForgotPassword from './pages/ForgotPassword';

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="" element={<TUIAuthShell />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="auth/reset-password" element={<ResetPassword />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="" element={<Navigate to="/login" relative="route" />} />
        <Route path="*" element={<Navigate to="/login" relative="route" />} />
      </Route>
    </Routes>
  );
}
