import { AppShell, Container, Group, Stack } from '@mantine/core';
import { AppOutlet } from '../AppOutlet';
import TextLogo from '@/ui/assets/LogoWithText.svg';

export default function TUIAuthShell() {
  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShell.Header>
        <Container h="100%">
          <Stack h="100%" justify="center">
            <Group>
              <img src={TextLogo} height={30} alt="illustration" />
            </Group>
          </Stack>
        </Container>
      </AppShell.Header>
      <AppShell.Main
        style={{
          display: 'flex',
          justifyContent: 'stretch',
          justifyItems: 'stretch',
          alignItems: 'stretch',
        }}
      >
        <AppOutlet />
      </AppShell.Main>
    </AppShell>
  );
}
