import useActiveVendor from '@/hooks/useActiveVendor';
import { Avatar, Box, Group, Text } from '@mantine/core';
import { ArrowRight01Icon } from 'hugeicons-react';

export default function VendorSwitcher() {
  const { summary } = useActiveVendor();
  console.log(summary, 'vendor dey jare');
  return (
    <Box>
      <Group p={'sm'}>
        <Avatar size={'md'} color={summary?.logo ?? ''}></Avatar>
        <Text flex={1}>{summary?.vendorName}</Text>
        <ArrowRight01Icon />
      </Group>
    </Box>
  );
}
