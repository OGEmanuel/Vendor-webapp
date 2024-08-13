import { Box, Divider, Paper, Text, Title } from '@mantine/core';
import UpdatePayoutForm from './UpdatePayoutForm';
import useActiveVendor from '@/hooks/useActiveVendor';

export default function SetupPayoutProfile() {
  const { summary } = useActiveVendor();
  return (
    <Paper bg="white" withBorder radius={'lg'}>
      <Box p="md">
        <Title order={3}>Payout information</Title>
        <Text c={'dimmed'} size="sm">
          Add preferred bank details to get paid
        </Text>
      </Box>
      <Divider />
      <Box p="md">{summary && <UpdatePayoutForm initial={summary} />}</Box>
    </Paper>
  );
}
