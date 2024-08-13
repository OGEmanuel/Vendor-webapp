import useGetMemberShipCredentialsQuery from '@/hooks/queries/useGetMembershipCredentialsQuery';
import { useTUIAppContext } from '@/ui/TUI/Templates/TUIAppContext';
import { ActionIcon, Box, Divider, Group, Paper, Text } from '@mantine/core';
import { ArrowRight01Icon } from 'hugeicons-react';

export default function VendorPicker() {
  const { data } = useGetMemberShipCredentialsQuery();
  const { setActiveVendorCredentials } = useTUIAppContext();
  return (
    <Box>
      <Paper>
        {(data?.data ?? []).map((cred, index) => {
          return (
            <Box>
              <Group key={index} p={'md'}>
                <Box flex={1}>
                  <Text>{cred.vendorName}</Text>
                  <Text size="sm" c={'dimmed'}>
                    {cred.vendorStatus}
                  </Text>
                </Box>
                <ActionIcon
                  onClick={() => {
                    setActiveVendorCredentials(cred);
                  }}
                >
                  <ArrowRight01Icon />
                </ActionIcon>
              </Group>
              <Divider />
            </Box>
          );
        })}
      </Paper>
    </Box>
  );
}
