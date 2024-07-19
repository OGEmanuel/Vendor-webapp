import { AppShell, Burger } from '@mantine/core';
import { AppOutlet } from '../AppOutlet';
import { useDisclosure } from '@mantine/hooks';

export default function TUIDashboardhell() {
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell padding="md">
      <AppShell.Main>
        <AppOutlet />
      </AppShell.Main>
    </AppShell>
  );
}
