import { AppShell, useMantineTheme } from '@mantine/core';
import { AppOutlet } from '../AppOutlet';
import DashboardShellHeader from './components/DashboardShellHeader';
import useActiveVendor from '@/hooks/useActiveVendor';
import { useEffect } from 'react';
import TUIDashboardSideNavigation from './components/TUIDashboardSideNavigation';
export default function TUIDashboardhell() {
  const theme = useMantineTheme();
  const { reloadVendorSummary } = useActiveVendor();

  useEffect(() => {
    reloadVendorSummary();
  }, []);
  return (
    <AppShell
      styles={{ main: { margin: 0 } }}
      header={{ height: 60 }}
      navbar={{ width: 250, breakpoint: 'sm', collapsed: { mobile: true } }}
    >
      <DashboardShellHeader />
      <AppShell.Navbar>
        <TUIDashboardSideNavigation />
      </AppShell.Navbar>
      <AppShell.Main bg={theme.colors.gray[0]}>
        <AppOutlet />
      </AppShell.Main>
    </AppShell>
  );
}
