import { Box, Button, Group, Input, Paper, Text } from '@mantine/core';
import { Search01Icon } from 'hugeicons-react';

const Overview = () => {
  return (
    <Box>
      <Paper bd={'1px solid #ECECEC'} mt={40} radius={'8px 8px 0px 0px'} px={16} py={12}>
        <Group justify="space-between">
          <Input leftSection={<Search01Icon size={'20px'} />} width={360} placeholder={'Search'} />
          <Button bg={'#FFFFFF'} c={'#3C3C3D'} bd={'1px solid #ECECEC'} fw={500}>
            Rearrange
          </Button>
        </Group>
      </Paper>
      <Box bd={'1px solid #ECECEC'} p={16}>
        <Paper py={18} px={16} bd={'1px solid #ECECEC'} radius={8}>
          <Text fw={700} size={'20px'}>
            Mega chows
          </Text>
        </Paper>
      </Box>
    </Box>
  );
};

export default Overview;
