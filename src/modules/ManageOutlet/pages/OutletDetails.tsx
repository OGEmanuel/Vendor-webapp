import useMemberActions from '@/modules/ManageMember/hooks/useMemberActions';
import { Member, OutletSummary } from '@/sdk/vendor';
import Card from '@/ui/TUI/Components/Card';
import FlexDataTable from '@/ui/TUI/Components/FlexTable/FlexTable';
import {
  ActionIcon,
  Avatar,
  Badge,
  Box,
  Grid,
  Group,
  Menu,
  Stack,
  Text,
} from '@mantine/core';
import { MoreVerticalIcon } from 'hugeicons-react';

export default function OutletDetails({ outletSummary }: { outletSummary: OutletSummary }) {
  const { editMember, removeMember } = useMemberActions();

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
    <Box>
      <Grid>
        <Grid.Col span={{ md: 6 }}>
          <Card
            title="Outlet Information"
            right={
              <Menu>
                <Menu.Target>
                  <ActionIcon variant="default">
                    <MoreVerticalIcon />
                  </ActionIcon>
                </Menu.Target>
              </Menu>
            }
          >
            <Stack gap={'xl'}>
              <Group justify="space-between">
                <Text>Outlet name</Text>
                <Text tt={'capitalize'}>{outletSummary?.outletName}</Text>
              </Group>
              <Group justify="space-between">
                <Text flex={1}>Address</Text>
                <Text flex={1} ta={'right'} tt={'capitalize'}>
                  {outletSummary.address?.address ?? 'N/A'}
                </Text>
              </Group>

              <Group justify="space-between">
                <Text>Segment</Text>
                <Text tt={'capitalize'}>{outletSummary?.primaryMarketSegment}</Text>
              </Group>

              <Group justify="space-between">
                <Text>Verification status</Text>
                <Text>
                  <Badge variant="light" size="lg">
                    {outletSummary.verificationStatus ?? 'Pending'}
                  </Badge>
                </Text>
              </Group>

              <Group justify="space-between">
                <Text>Availability</Text>
                <Text>
                  <Badge variant="dot" size="lg" color="green">
                    Open
                  </Badge>
                </Text>
              </Group>

              <Group justify="space-between">
                <Text>Zone</Text>
                <Text>Not Set</Text>
              </Group>
            </Stack>
          </Card>
        </Grid.Col>
        <Grid.Col span={{ md: 6 }}>
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
                header: '',
                render: ({ record }) => {
                  return <RenderMore {...(record as Member)} />;
                },
                accessor: '',
              },
            ]}
            headerNode={
              <div>
                <Group>
                  <Text fw={"bold"}>Members</Text>
                </Group>
              </div>
            }
            records={outletSummary.members ?? []}
          />
        </Grid.Col>
      </Grid>
    </Box>
  );
}
