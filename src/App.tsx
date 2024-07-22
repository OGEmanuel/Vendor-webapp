import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import '@mantine/notifications/styles.css';
import { Notifications } from '@mantine/notifications';
import '@mantine/nprogress/styles.css';
import { NavigationProgress } from '@mantine/nprogress';
import { Router } from './Router';
import { mantineTheme } from './config/mantine';
import { TUIAppContextProvider } from './ui/TUI/Templates/TUIAppContext';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './config/queryClient';

export default function App() {
  return (
    <MantineProvider theme={mantineTheme}>
      <QueryClientProvider client={queryClient}>
        <TUIAppContextProvider>
          <ModalsProvider>
            <Notifications />
            <NavigationProgress />
            <Router />
          </ModalsProvider>
        </TUIAppContextProvider>
      </QueryClientProvider>
    </MantineProvider>
  );
}
