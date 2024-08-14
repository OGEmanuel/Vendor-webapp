import { Box, Button, Group, Paper, Text } from '@mantine/core';
import TempClosedIlls from '@/ui/assets/illustrations/TempClosed.svg';
import useOutletActions from '../hooks/useOutletActions';
import { Outlet } from '@/sdk/vendor';

export default function OutletClosedWidget({ outlet }: { outlet: Outlet }) {
  const { openOutlet } = useOutletActions();
  if (outlet.config?.isClosed==true) {
    return (
      <Paper p={'lg'} bg={'black'}>
        <Group>
          <img src={TempClosedIlls} width={100} style={{ display: 'block' }} />
          <Box flex={1}>
            <Text c="white">Temporarily closed</Text>
            <Text c={'#B5B5B6'}>
              Your outlet is currently marked as closed and cannot receive orders.
            </Text>
          </Box>
        </Group>
        <Group justify="flex-end">
          <Button
            onClick={() => {
              openOutlet(outlet);
            }}
          >
            Open now
          </Button>
        </Group>
      </Paper>
    );
  }
  return <Box />;
}
