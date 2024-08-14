import { OutletSummary } from '@/sdk/vendor';
import { Box, Grid, Stack } from '@mantine/core';
import UpdateOutletConfigForm from '../components/UpdateOutletConfigForm';
import UpdateOutletAvailabilityForm from '../components/UpdateOutletAvailabilityForm';
import OutletClosedWidget from '../components/OutletClosedWidget';

export default function OutletAvailability({ outletSummary }: { outletSummary: OutletSummary }) {
  return (
    <Box>
      <Grid>
        <Grid.Col span={{ md: 6 }}>
          <Stack>
            <OutletClosedWidget outlet={outletSummary} />
            <UpdateOutletConfigForm initial={outletSummary} />
          </Stack>
        </Grid.Col>
        <Grid.Col span={{ md: 6 }}>
          <UpdateOutletAvailabilityForm initial={outletSummary} />
        </Grid.Col>
      </Grid>
    </Box>
  );
}
