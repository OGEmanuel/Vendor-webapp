import { Box, Divider, Group, Paper, Text } from '@mantine/core';

export default function Card({
  title,
  right,
  children,
}: {
  title: string;
  right?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <Paper bg={'white'} withBorder>
      <Box>
        <Group p={'md'} justify='space-between'>
          <Text fw={'bold'}>{title}</Text>
          {right}
        </Group>
        <Divider />
        <Box p={'md'}>{children}</Box>
      </Box>
    </Paper>
  );
}
