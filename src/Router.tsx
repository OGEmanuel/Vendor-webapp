import { AuthRoutes } from './modules/Authentication/AuthRoutes';
import { AppRoutes } from './routes/AppRoutes';
import { useTUIAppContext } from './ui/TUI/Templates/TUIAppContext';

export function Router() {
  const { authToken } = useTUIAppContext();
  console.log(authToken, "token")
  return <div>{authToken!==undefined ? <AppRoutes /> : <AuthRoutes />}</div>;
}
