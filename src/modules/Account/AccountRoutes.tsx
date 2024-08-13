import UpdateProfile from './pages/UpdateProfile';
import FlexTabs from '@/ui/TUI/Components/FlexTabs/FlexTabs';
import { Container, Tabs, Text, useMantineTheme } from '@mantine/core';
import {
  CustomerSupportIcon,
  LockerIcon,
  Logout01Icon,
  Settings01Icon,
  UserIcon,
} from 'hugeicons-react';
import Settings from './pages/Settings';
import ChangePassword from './pages/ChangePassword';
import TUIAccountShell from '@/ui/TUI/Templates/DashboardShell/TUIAccountShell';
import { useMediaQuery } from '@mantine/hooks';
import React from 'react';

const moduleSubPages = [
  {
    label: 'Profile',
    id: 'profile',
    children: <UpdateProfile />,
    icon: <UserIcon size={20} />,
  },
  {
    label: 'Settings',
    id: 'settings',
    children: <Settings />,
    icon: <Settings01Icon size={20} />,
  },
  {
    label: 'Change password',
    id: 'change-password',
    children: <ChangePassword />,
    icon: <LockerIcon size={20} />,
  },
];

export default function AccountRoutes() {
  const theme = useMantineTheme();
  const matches = useMediaQuery(`(min-width: ${theme.breakpoints.sm})`);
  return (
    <TUIAccountShell>
      <Container my={'xl'} px={0}>
        <FlexTabs>
          <Tabs.List>
            {moduleSubPages.map((_) => {
              return (
                <Tabs.Tab value={_.id} leftSection={matches !== true ? undefined : _.icon}>
                  {_.label}
                </Tabs.Tab>
              );
            })}

            {matches && (
              <React.Fragment>
                <Tabs.Tab
                  value="support "
                  leftSection={<CustomerSupportIcon color="red" />}
                  color="red"
                >
                  <Text c={'red'}>Customer Support</Text>
                </Tabs.Tab>

                <Tabs.Tab value="log-out " leftSection={<Logout01Icon color="red" />} color="red">
                  <Text c={'red'}>Log Out</Text>
                </Tabs.Tab>
              </React.Fragment>
            )}
          </Tabs.List>
          {moduleSubPages.map((_, idx) => {
            return (
              <Tabs.Panel
                value={_.id}
                key={idx}
                p={'0px'}
                px={matches !== true ? undefined : 'xl'}
                mt={matches !== true ? 'xl' : undefined}
              >
                {_.children}
              </Tabs.Panel>
            );
          })}
        </FlexTabs>
      </Container>
    </TUIAccountShell>
  );
}
