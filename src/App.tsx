import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { Router } from './Router';
import { ModalsProvider } from '@mantine/modals';
import '@mantine/notifications/styles.css';
import { Notifications } from '@mantine/notifications';
import '@mantine/nprogress/styles.css';
import { NavigationProgress } from '@mantine/nprogress';
import { mantineTheme } from './config/mantine';

export default function App() {
  return (
    <MantineProvider theme={mantineTheme}>
      <ModalsProvider>
        <Notifications />
        <NavigationProgress />
        <Router />
      </ModalsProvider>
    </MantineProvider>
  );
}
