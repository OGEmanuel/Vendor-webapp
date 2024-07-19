import { AppShell } from '@mantine/core';
import { AppOutlet } from '../AppOutlet';

export default function TUIDashboardhell() {
  return (
    <AppShell padding="md">
      <AppShell.Main>
        <AppOutlet />
      </AppShell.Main>
    </AppShell>
  );
}
