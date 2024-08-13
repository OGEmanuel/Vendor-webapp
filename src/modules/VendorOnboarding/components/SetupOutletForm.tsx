import useActiveVendor from '@/hooks/useActiveVendor';
import { Box, Divider, Paper, Text, Title } from '@mantine/core';
import UpdateDefaultOutletForm from './UpdateDefaultOutletForm';

export default function SetupOutlet() {
  const { summary } = useActiveVendor();
  return (
    <Paper bg="white" withBorder radius={'lg'}>
      <Box p="md">
        <Title order={3}>Create an outlet</Title>
        <Text c={'dimmed'} size="sm">
          Setup your business outlet to start selling
        </Text>
      </Box>
      <Divider />
      <Box p="md">
        {summary && summary.outlets.length >= 0 && (
          <UpdateDefaultOutletForm initial={summary.outlets[0]} />
        )}
        {/* <NewOutletForm  initial={}/> */}
      </Box>
    </Paper>
  );
}
