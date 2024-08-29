import { Flex, Group, Text } from '@mantine/core';
import { ReactNode } from 'react';

const EmptyState = ({
  emptyIcon,
  emptyText,
  emptySubText,
  button,
}: {
  emptyIcon: ReactNode;
  emptyText: string;
  emptySubText: string;
  button?: ReactNode;
}) => {
  return (
    <Flex align={'center'} justify={'center'} style={{ height: 'calc(100vh - 147.58px)' }}>
      <Group
        style={{
          display: 'flex',
          gap: 16,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}
        w={405}
      >
        {emptyIcon}
        <Flex gap={8} direction="column" align="center" justify="center">
          <Text c={'#111113'} fw={700}>
            {emptyText}
          </Text>
          <Text c={'#7E7E80'} ta={'center'}>
            {emptySubText}
          </Text>
        </Flex>
        {button}
      </Group>
    </Flex>
  );
};

export default EmptyState;
