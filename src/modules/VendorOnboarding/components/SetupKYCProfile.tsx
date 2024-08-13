import { Box, Divider, Paper, Text, Title } from '@mantine/core';
import UpdateKYCForm from './UpdateKYCForm';
import useActiveVendor from '@/hooks/useActiveVendor';

export default function SetupKYCProfile() {
  const { summary } = useActiveVendor();

  return (
    <Paper bg="white" withBorder radius={'lg'}>
      <Box p="md">
        <Title order={3}>Vendor documentation</Title>
        <Text c={'dimmed'} size="sm">
          Upload the required documents to verify your business
        </Text>
      </Box>
      <Divider />
      <Box p="md">{summary && <UpdateKYCForm initial={summary} />}</Box>
    </Paper>
  );
}
