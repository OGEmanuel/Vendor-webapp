import FlexDataTable from '@/ui/TUI/Components/FlexTable/FlexTable';
import TUIPageShell from '@/ui/TUI/Templates/TUIPageShell';
import {
  ActionIcon,
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  Group,
  Menu,
  Select,
  Stack,
  Text,
} from '@mantine/core';
import { MoreVerticalIcon, PlusSignIcon, Store01Icon } from 'hugeicons-react';
import useGetVendorMembersQuery from '../hooks/useGetVendorMembers';
import { Member } from '@/sdk/vendor';
import useGetVendorOutletsQuery from '../hooks/useGetVendorOutlets';
import useMemberActions from '@/modules/ManageMember/hooks/useMemberActions';

export default function ManageMembers() {
  const { data } = useGetVendorMembersQuery();
  const { createMember, editMember, removeMember } = useMemberActions();

  function RenderMemberName({ name }: Member) {
    return (
      <Box>
        <Group>
          <Avatar>{name?.slice(0, 1)}</Avatar>
          <Box>
            <Text>{name}</Text>
          </Box>
        </Group>
      </Box>
    );
  }

  function RenderMore(member: Member) {
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
                editMember(member);
              }}
            >
              Edit
            </Menu.Item>
            <Menu.Item
              onClick={() => {
                removeMember(member);
              }}
            >
              Remove member
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Group>
    );
  }
  return (
    <TUIPageShell
      title="Members"
      caption="Manage your team members and their roles within your business."
      right={
        <Button leftSection={<PlusSignIcon />} onClick={createMember}>
          Invite a member
        </Button>
      }
    >
      <FlexDataTable
        RenderMobile={({ record }) => {
          return (
            <Stack p={'md'}>
              <Group>
                <Box flex={1}>
                  <RenderMemberName {...(record as Member)} />
                </Box>
                <Group>
                  <Badge variant="light">{record.status}</Badge>
                  <RenderMore {...(record as Member)} />
                </Group>
              </Group>
              <Divider variant="dashed" />
              <RenderMemberAssignedOutlet {...(record as Member)} />
            </Stack>
          );
        }}
        columns={[
          {
            header: 'Name',
            render: ({ record }) => {
              const _ = record as Member;
              return <RenderMemberName {..._} />;
            },
            accessor: '',
          },
          {
            header: 'Role',
            accessor: 'role',
          },
          {
            header: 'Status',
            render: ({ record }) => {
              return <Badge variant="light">{record.status}</Badge>;
            },
            accessor: '',
          },
          {
            header: 'Assigned Outlet',
            render: ({ record }) => {
              const _ = record as Member;
              return <RenderMemberAssignedOutlet {..._} />;
            },
            accessor: '',
          },
          {
            header: '',
            render: ({ record }) => {
              return <RenderMore {...(record as Member)} />;
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
        records={data ?? []}
      />
    </TUIPageShell>
  );
}

function RenderMemberAssignedOutlet({ outletId }: Member) {
  const { data } = useGetVendorOutletsQuery();
  const outlet = data?.find((_) => _.id == outletId);
  return (
    <Group>
      <Store01Icon />
      <Text fw={'bold'}>{outlet?.outletName}</Text>
    </Group>
  );
}
