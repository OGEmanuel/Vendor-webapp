import { Box, Button, Group, Paper, Text } from '@mantine/core';
import EmptyState from './EmptyState';
import EmptyItemsIcon from '@/ui/assets/illustrations/svg-jsx/EmptyItemsIcon';
import { ArrowDown01Icon, PlusSignIcon } from 'hugeicons-react';
import TableHeader from './TableHeader';

const Items = () => {
  const data = [];

  for (let i = 0; i < 6; i++) {
    data.push({
      id: i,
      name: 'Mega chows',
    });
  }
  return data.length > 0 ? (
    <Box>
      <TableHeader>
        <Group>
          <Paper style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
            <Text c={'#111113'} fw={500}>
              All items
            </Text>
            <ArrowDown01Icon />
          </Paper>
          <Button leftSection={<PlusSignIcon size={20} />} onClick={() => open()}>
            item
          </Button>
        </Group>
      </TableHeader>
    </Box>
  ) : (
    <EmptyState
      emptyIcon={<EmptyItemsIcon />}
      emptyText={'No items Available'}
      emptySubText={'Add items to your inventory so they can be easily managed and tracked.'}
      button={<Button>Add item</Button>}
    />
  );
};

export default Items;
