import { AppShell, useMantineTheme } from '@mantine/core';
import useLoggedInUser from '@/hooks/useLoggedInUser';
import DashboardShellHeader from './components/DashboardShellHeader';
import { ReactNode } from 'react';

export default function TUIAccountShell({ children }: { children: ReactNode }) {
  const { firstName, lastName } = useLoggedInUser();
  const theme = useMantineTheme();
  return (
    <AppShell padding="md" styles={{ main: { margin: 0 } }} header={{ height: 60 }}>
      <DashboardShellHeader />
      <AppShell.Main bg={theme.colors.gray[1]}>{children}</AppShell.Main>
    </AppShell>
  );
}
