import {
  ActionIcon,
  AppShell,
  Avatar,
  Box,
  CloseIcon,
  Container,
  Divider,
  Drawer,
  Group,
  Menu,
  Stack,
  Text,
} from '@mantine/core';
import DashboardLogoSvg from '@/ui/assets/DashboardLogo.svg';
import LogoTextOnlyPrimary from '@/ui/assets/LogoTextOnlyPrimary.svg';
import { Logout01Icon, Menu01Icon, Settings01Icon, UserIcon } from 'hugeicons-react';
import useLoggedInUser from '@/hooks/useLoggedInUser';
import { useNavigate } from 'react-router-dom';
import { useDisclosure } from '@mantine/hooks';
import TUIDashboardSideNavigation from './TUIDashboardSideNavigation';

export default function DashboardShellHeader() {
  const { firstName, lastName, profile } = useLoggedInUser();
  const navigate = useNavigate();
  return (
    <AppShell.Header>
      <Container size={'xl'} py="xs" fluid h={'100%'}>
        <Stack h={'100%'} justify="center">
          <Group justify="space-between">
            <Box visibleFrom="sm">
              <img src={DashboardLogoSvg} />
            </Box>
            <Box hiddenFrom="sm">
              <Group>
                <MobileNavigationDrawer />
                <img src={LogoTextOnlyPrimary} height={30} />
              </Group>
            </Box>
            <Box>
              <Menu>
                <Menu.Target>
                  <Group gap={'sm'}>
                    <Avatar size={'sm'} color="blue" variant="filled" src={profile?.profilePhoto}>
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
                  <Menu.Item
                    leftSection={<UserIcon size={18} />}
                    onClick={() => {
                      navigate('/account');
                    }}
                  >
                    Profile
                  </Menu.Item>
                  <Menu.Item
                    leftSection={<Settings01Icon size={18} />}
                    onClick={() => {
                      navigate('/management');
                    }}
                  >
                    Settings
                  </Menu.Item>
                  <Menu.Item leftSection={<Logout01Icon size={18} />} color="red">
                    Log Out
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </Box>
          </Group>
        </Stack>
      </Container>
    </AppShell.Header>
  );
}

export function MobileNavigationDrawer() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        withCloseButton={false}
        size={'70%'}
        p={0}
        styles={{ body: { padding: 0 } }}
      >
        <Group p={'sm'}>
          <ActionIcon variant="subtle" color="dark" size={'lg'} onClick={close}>
            <CloseIcon />
          </ActionIcon>
          <img src={LogoTextOnlyPrimary} height={30} />
        </Group>
        <Divider />
        <TUIDashboardSideNavigation />
      </Drawer>
      <ActionIcon variant="default" size={'lg'} onClick={open}>
        <Menu01Icon />
      </ActionIcon>
    </>
  );
}
