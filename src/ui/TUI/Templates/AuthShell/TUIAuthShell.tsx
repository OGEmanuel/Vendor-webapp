import { AppShell } from '@mantine/core';
import { AppOutlet } from '../AppOutlet';

export default function TUIAuthShell() {
  return (
    <AppShell header={{ height: 0 }} padding={0} >
      <AppShell.Main
      
        style={{
          display: 'flex',
          justifyContent: 'stretch',
          justifyItems: 'stretch',
          alignItems: 'stretch',
          overflow:"hidden"
        }}
      >
        <AppOutlet />
      </AppShell.Main>
    </AppShell>
  );
}
