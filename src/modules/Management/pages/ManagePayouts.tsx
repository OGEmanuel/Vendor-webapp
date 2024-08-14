import FlexDataTable from '@/ui/TUI/Components/FlexTable/FlexTable';
import TUIPageShell from '@/ui/TUI/Templates/TUIPageShell';
import { ActionIcon, Badge, Box, Group, Menu, Select, Text } from '@mantine/core';
import { MoreVerticalIcon } from 'hugeicons-react';

export default function ManagePayouts() {
  return (
    <TUIPageShell title="Payouts">
      <FlexDataTable
        RenderMobile={({}) => {
          return <Box></Box>;
        }}
        columns={[
          {
            header: 'Name',
            render: ({}) => {
              return (
                <Box>
                  <Group>
                    <Box>
                      <Text>Outlet name goes here</Text>
                      <Text size="xs" c={'dimmed'}>
                        Full address goes here
                      </Text>
                    </Box>
                  </Group>
                </Box>
              );
            },
            accessor: '',
          },
          {
            header: 'Market type',
            render: ({}) => {
              return <Box>Local market</Box>;
            },
            accessor: '',
          },
          {
            header: 'Status',
            render: ({}) => {
              return (
                <Badge size="lg" color="green" variant="light">
                  Role
                </Badge>
              );
            },
            accessor: '',
          },
          {
            header: 'Availability',
            render: ({}) => {
              return (
                <Badge size="lg" color="green" variant="dot">
                  Opened
                </Badge>
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
                <Group justify="flex-end">
                  <Menu>
                    <Menu.Target>
                      <ActionIcon variant="default">
                        <MoreVerticalIcon />
                      </ActionIcon>
                    </Menu.Target>
                    <Menu.Dropdown>
                      <Menu.Item>View</Menu.Item>
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
              <Select placeholder="all payouts" />
            </Group>
          </div>
        }
        records={[{}, {}, {}, {}]}
      />
    </TUIPageShell>
  );
}
