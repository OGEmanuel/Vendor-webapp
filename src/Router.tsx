import { useEffect, useState } from 'react';
import { AuthRoutes } from './modules/Authentication/AuthRoutes';
import { AppRoutes } from './routes/AppRoutes';
import { useTUIAppContext } from './ui/TUI/Templates/TUIAppContext';
import { Loader, Stack } from '@mantine/core';

export function Router() {
  const [show, setShow] = useState(false);
  const { authToken } = useTUIAppContext();
  console.log(authToken, 'token');

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 2000);
  }, []);

  if (show == false) {
    return (
      <Stack h={'100vh'} justify="center" align='center'>
        <Loader />
      </Stack>
    );
  }

  return <div>{authToken !== undefined ? <AppRoutes /> : <AuthRoutes />}</div>;
}
