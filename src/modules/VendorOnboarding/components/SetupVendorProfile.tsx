import { Box, Divider, Paper, Text, Title } from '@mantine/core';
import SetupVendorProfileForm from './SetupVendorProfileForm';
import useActiveVendor from '@/hooks/useActiveVendor';
import UpdateVendorProfileForm from './UpdateVendorProfileForm';

export default function SetupVendorProfile() {
  const { summary } = useActiveVendor();

  return (
    <Paper bg="white" withBorder radius={'lg'}>
      <Box p="md">
        <Title order={3}>Setup your vendor profile</Title>
        <Text c={'dimmed'} size="sm">
          Provide essential details to create a complete profile for your business.
        </Text>
      </Box>
      <Divider />
      <Box p="md">
        {summary?.id !== undefined ? <UpdateVendorProfileForm initial={summary} /> : <SetupVendorProfileForm />}
      </Box>
    </Paper>
  );
}
