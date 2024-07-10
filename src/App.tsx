import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { Router } from './Router';
import { theme } from './theme';
import { ModalsProvider } from '@mantine/modals';
import '@mantine/notifications/styles.css';
import { Notifications } from '@mantine/notifications';
import '@mantine/nprogress/styles.css';
import { NavigationProgress } from '@mantine/nprogress';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <ModalsProvider>
        <Notifications />
        <NavigationProgress />
        <Router />
      </ModalsProvider>
    </MantineProvider>
  );
}
