import FlexDataTable from '@/ui/TUI/Components/FlexTable/FlexTable';
import TUIPageShell from '@/ui/TUI/Templates/TUIPageShell';
import { ActionIcon, Avatar, Badge, Box, Group, Menu, Select, Text } from '@mantine/core';
import {
  MoreVerticalIcon,
  UserEdit01Icon,
  UserRemove01Icon,
  UserSwitchIcon,
} from 'hugeicons-react';

export default function ManageMembers() {
  return (
    <TUIPageShell title="Members">
      <FlexDataTable
         RenderMobile={({ }) => {
          return <Box></Box>;
        }}
        columns={[
          {
            header: 'Name',
            render: ({}) => {
              return (
                <Box>
                  <Group>
                    <Avatar>A</Avatar>
                    <Box>
                      <Text>Joshua Nwafor</Text>
                      <Text size="xs" c={'dimmed'}>
                        joshuanwafor01@gmail.com
                      </Text>
                    </Box>
                  </Group>
                </Box>
              );
            },
            accessor: '',
          },
          {
            header: 'Phone number',
            render: ({}) => {
              return <Box>Phone number</Box>;
            },
            accessor: '',
          },
          {
            header: 'Role',
            render: ({}) => {
              return <Box>Role</Box>;
            },

            accessor: '',
          },
          {
            header: 'Status',
            render: ({}) => {
              return (
                <Box>
                  <Badge color="green" variant="light">
                    Status
                  </Badge>
                </Box>
              );
            },

            accessor: '',
          },
          {
            header: 'Assigned Outlet',
            render: ({}) => {
              return <Box>Outlet name</Box>;
            },

            accessor: '',
          },

          {
            header: '',
            render: ({}) => {
              return (
                <Group justify='flex-end'>
                  <Menu>
                    <Menu.Target>
                      <ActionIcon variant="default">
                        <MoreVerticalIcon />
                      </ActionIcon>
                    </Menu.Target>
                    <Menu.Dropdown>
                      <Menu.Item leftSection={<UserSwitchIcon />}>Make admin</Menu.Item>
                      <Menu.Item leftSection={<UserEdit01Icon />}>Edit</Menu.Item>
                      <Menu.Item leftSection={<UserRemove01Icon />}>Remove member</Menu.Item>
                    </Menu.Dropdown>
                  </Menu>
                </Group>
              );
            },
            accessor: '',
          },
        ]}
        headerNode={
          <div>
            <Group justify="flex-end">
              <Select placeholder="all outlets" />
            </Group>
          </div>
        }
        records={[{}, {}, {}, {}]}
      />
    </TUIPageShell>
  );
}
