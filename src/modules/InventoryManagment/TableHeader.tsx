import { Paper, Group, Input } from '@mantine/core';
import { Search01Icon } from 'hugeicons-react';
import { ReactNode } from 'react';

const TableHeader = ({ children, radius }: { children: ReactNode; radius?: string }) => {
  return (
    <Paper bd={'1px solid #ECECEC'} mt={40} radius={radius || '16px 16px 0px 0px'} px={16} py={12}>
      <Group justify="space-between">
        <Input leftSection={<Search01Icon size={'20px'} />} width={360} placeholder={'Search'} />
        {children}
      </Group>
    </Paper>
  );
};

export default TableHeader;
