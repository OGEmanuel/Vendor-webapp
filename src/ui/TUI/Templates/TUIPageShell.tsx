import { Box, Divider, Group, Stack, Text } from '@mantine/core';

export default function TUIPageShell({
  children,
  right,
  title,
}: {
  children: React.ReactNode;
  title: string;
  right: React.ReactNode;
}) {
  return (
    <Stack>
      <Group justify="space-between" align="center">
        <Box flex={1} p="md">
          <Text size="xl">{title}</Text>
          <Text>caption goes here</Text>
        </Box>
        <Box>{right}</Box>
      </Group>
      <Divider />
      {children}
    </Stack>
  );
}
