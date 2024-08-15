import { OutletSummary } from '@/sdk/vendor';
import Card from '@/ui/TUI/Components/Card';
import FlexDataTable from '@/ui/TUI/Components/FlexTable/FlexTable';
import { ActionIcon, Badge, Box, Grid, Group, Menu, Stack, Text } from '@mantine/core';
import { MoreVerticalIcon } from 'hugeicons-react';

export default function OutletDetails({ outletSummary }: { outletSummary: OutletSummary }) {
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
            headerNode={
              <Group>
                <Text fw={'bold'}>Members</Text>
              </Group>
            }
            columns={[
              { header: 'Name', accessor: '' },
              { header: 'Status', accessor: '' },
              { header: 'Role', accessor: '' },
            ]}
            records={outletSummary.members}
          />
        </Grid.Col>
      </Grid>
    </Box>
  );
}
