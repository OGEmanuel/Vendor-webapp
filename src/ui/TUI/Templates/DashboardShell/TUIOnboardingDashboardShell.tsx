import { AppShell, useMantineTheme } from '@mantine/core';
import { AppOutlet } from '../AppOutlet';
import useLoggedInUser from '@/hooks/useLoggedInUser';
import DashboardShellHeader from './components/DashboardShellHeader';

export default function TUIOnboardingDashboardShell() {
  const { firstName, lastName } = useLoggedInUser();
  const theme = useMantineTheme();
  return (
    <AppShell padding="md" styles={{ main: { margin: 0 } }} header={{ height: 60 }}>
      <DashboardShellHeader />
      <AppShell.Main bg={theme.colors.gray[1]}>
        <AppOutlet />
      </AppShell.Main>
    </AppShell>
  );
}
