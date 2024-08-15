import FlexDataTable from '@/ui/TUI/Components/FlexTable/FlexTable';
import TUIPageShell from '@/ui/TUI/Templates/TUIPageShell';
import { ActionIcon, Badge, Box, Button, Divider, Group, Menu, Select, Text } from '@mantine/core';
import { MoreVerticalIcon, PlusSignIcon } from 'hugeicons-react';
import useGetVendorOutletsQuery from '../hooks/useGetVendorOutlets';
import { Outlet } from '@/sdk/vendor';
import { useNavigate } from 'react-router-dom';
import useOutletActions from '@/modules/ManageOutlet/hooks/useOutletActions';

export default function ManageOutlets() {
  const { data: outlets } = useGetVendorOutletsQuery();
  const { createOutlet, editOutlet } = useOutletActions();

  function RenderOutletNameCol({ outlet: { outletName, address } }: { outlet: Outlet }) {
    return (
      <Box>
        <Group>
          <Box>
            <Text tt={'capitalize'}>{outletName}</Text>
            <Text size="xs" c={'dimmed'} tt={'capitalize'}>
              {address?.address ?? 'No address'}
            </Text>
          </Box>
        </Group>
      </Box>
    );
  }

  function RenderStatus({ outlet: { verificationStatus } }: { outlet: Outlet }) {
    return (
      <Badge size="lg" color={verificationStatus == 'approved' ? 'green' : 'gray'} variant="light">
        {verificationStatus ?? 'Pending'}
      </Badge>
    );
  }

  function RenderAvailability({}: { outlet: Outlet }) {
    return (
      <Badge size="lg" color="green" variant="dot">
        Opened
      </Badge>
    );
  }

  function RenderMore({ outlet }: { outlet: Outlet }) {
    const navigate = useNavigate();
    return (
      <Group justify="flex-end">
        <Menu>
          <Menu.Target>
            <ActionIcon variant="default">
              <MoreVerticalIcon />
            </ActionIcon>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item
              onClick={() => {
                navigate(`/management/outlets/${outlet.id}`);
              }}
            >
              View
            </Menu.Item>
            <Menu.Item
              onClick={() => {
                editOutlet(outlet);
              }}
            >
              Edit
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Group>
    );
  }

  return (
    <TUIPageShell
      title="Outlets"
      caption="Manage your outlets and details here"
      right={
        <Button
          leftSection={<PlusSignIcon />}
          onClick={() => {
            createOutlet();
          }}
        >
          Add an outlet
        </Button>
      }
    >
      <FlexDataTable
        RenderMobile={({ record }) => {
          let { primaryMarketSegment } = record as Outlet;
          return (
            <Box
              style={(theme) => {
                return { borderTop: `.5px solid ${theme.colors.gray[0]}` };
              }}
            >
              <Group p={'sm'}>
                <Box flex={1}>
                  <RenderOutletNameCol outlet={record as Outlet} />
                </Box>
                <Group>
                  <RenderStatus outlet={record as Outlet} />
                  <RenderMore outlet={record as Outlet} />
                </Group>
              </Group>
              <Divider />
              <Group p={'sm'}>
                <Box flex={1}>
                  <Box tt={'capitalize'}>🛒{primaryMarketSegment}</Box>
                </Box>
                <Group>
                  <RenderAvailability outlet={record as Outlet} />
                </Group>
              </Group>
            </Box>
          );
        }}
        columns={[
          {
            header: 'Name',
            render: ({ record }) => {
              let { outletName, address } = record as Outlet;
              return <RenderOutletNameCol outlet={record as Outlet} />;
            },
            accessor: '',
          },
          {
            header: 'Market type',
            render: ({ record }) => {
              let { primaryMarketSegment } = record as Outlet;
              return <Box tt={'capitalize'}>🛒{primaryMarketSegment}</Box>;
            },
            accessor: '',
          },
          {
            header: 'Status',
            render: ({ record }) => {
              let { verificationStatus } = record as Outlet;
              return <RenderStatus outlet={record as Outlet} />;
            },
            accessor: '',
          },
          {
            header: 'Availability',
            render: ({ record }) => {
              return <RenderAvailability outlet={record as Outlet} />;
            },
            accessor: '',
          },
          {
            header: '',
            render: ({ record }) => {
              return <RenderMore outlet={record as Outlet} />;
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
        records={outlets ?? []}
      />
    </TUIPageShell>
  );
}
