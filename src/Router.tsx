import { AuthRoutes } from './modules/Authentication/AuthRoutes';
import { AppRoutes } from './routes/AppRoutes';
import { useTUIAppContext } from './ui/TUI/Templates/TUIAppContext';

export function Router() {
  const { authToken } = useTUIAppContext();
  return <div>{authToken !== '' ? <AppRoutes /> : <AuthRoutes />}</div>;
}
