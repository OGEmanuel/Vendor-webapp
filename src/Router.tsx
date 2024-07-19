import { AppRoutes } from './routes/AppRoutes';
import { AuthRoutes } from './modules/Authentication/AuthRoutes';
import { useTUIAppContext } from './ui/TUI/Templates/TUIAppContext';

export function Router() {
  const { authToken } = useTUIAppContext();
  return <div>{authToken == undefined ? <AuthRoutes /> : <AppRoutes />}</div>;
}
