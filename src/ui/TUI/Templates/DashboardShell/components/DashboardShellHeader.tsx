import { AppShell, Avatar, Box, Container, Group, Menu, Text } from '@mantine/core';
import DashboardLogoSvg from '@/ui/assets/DashboardLogo.svg?react';
import { Logout01Icon, Settings01Icon, UserIcon } from 'hugeicons-react';
import useLoggedInUser from '@/hooks/useLoggedInUser';

export default function DashboardShellHeader() {
  const { firstName, lastName } = useLoggedInUser();
  return (
    <AppShell.Header>
      <Container size={'xl'} py="xs" fluid h={'100%'}>
        <Group justify="space-between">
          <DashboardLogoSvg height={30} />
          <Box>
            <Menu>
              <Menu.Target>
                <Group gap={'sm'}>
                  <Avatar size={'sm'} color="blue" variant="filled">
                    A
                  </Avatar>
                  <Box visibleFrom="sm">
                    <Text>
                      {firstName} {lastName}
                    </Text>
                  </Box>
                </Group>
              </Menu.Target>
              <Menu.Dropdown w={170}>
                <Group gap={'sm'} px="xs">
                  <Avatar size={'sm'}>A</Avatar>
                  <Box>
                    <Text size="sm">
                      {firstName} {lastName}
                    </Text>
                    <Text size="xs">Admin</Text>
                  </Box>
                </Group>
                <Menu.Divider />
                <Menu.Item leftSection={<UserIcon size={18} />}>Profile</Menu.Item>
                <Menu.Item leftSection={<Settings01Icon size={18} />}>Settings</Menu.Item>
                <Menu.Item leftSection={<Logout01Icon size={18} />} color="red">
                  Log Out
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Box>
        </Group>
      </Container>
    </AppShell.Header>
  );
}
