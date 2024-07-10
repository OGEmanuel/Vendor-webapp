import ForgotPassword from '@/pages/Authentication/ForgotPassword';
import Login from '@/pages/Authentication/Login';
import Register from '@/pages/Authentication/Register';
import ResetPassword from '@/pages/Authentication/ResetPassword';
import TUIAuthShell from '@/ui/TUI/Templates/TUIAuthShell';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

export function AuthRoutes() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="" element={<TUIAuthShell />}>
          <Route path="signin" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="" element={<Navigate to="/login" relative="route" />} />
          <Route path="*" element={<Navigate to="/auth/login" relative="route" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
