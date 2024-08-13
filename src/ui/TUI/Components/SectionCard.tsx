import { Box, Divider, Paper, Text, Title } from '@mantine/core';
import useActiveVendor from '@/hooks/useActiveVendor';
import React from 'react';

export default function SectionCard({
  caption,
  children,
  title,
}: {
  title: string;
  caption: string;
  children: React.ReactNode;
}) {
  useActiveVendor();
  return (
    <Paper bg="white" withBorder radius={'lg'}>
      <Box p="md">
        <Title order={3}>{title}</Title>
        <Text c={'dimmed'} size="sm">
          {caption}
        </Text>
      </Box>
      <Divider />
      <Box p="md">{children}</Box>
    </Paper>
  );
}
