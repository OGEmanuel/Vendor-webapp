import {
  Avatar,
  Box,
  CloseIcon,
  Group,
  MantineSize,
  Stack,
  Title,
  useMantineTheme,
} from '@mantine/core';
import { randomId, useMediaQuery } from '@mantine/hooks';
import { modals } from '@mantine/modals';
import React from 'react';

export default function useAppModal() {
  const mantine = useMantineTheme();
  const matches = useMediaQuery(`(min-width: ${mantine.breakpoints.sm})`);
  function open(
    content: React.ReactNode,
    title?: string,
    size?: MantineSize,
    onClose?: () => void
  ) {
    const id = randomId();
    modals.open({
      modalId: id,
      size: size,
      fullScreen: matches == false ? true : false,
      centered: true,
      children: (
        <Stack h={'100%'}>
          <Group justify="space-between" mb={'md'}>
            <Box>{title && <Title order={3}>{title}</Title>}</Box>
            <Avatar
              onClick={() => {
                modals.close(id);
              }}
            >
              <CloseIcon />
            </Avatar>
          </Group>
          <Stack flex={1} justify="center">
            {content}
          </Stack>
        </Stack>
      ),
      withCloseButton: false,
      onClose() {
        if (onClose) {
          onClose();
        }
      },
    });
    return id;
  }

  return {
    open,
  };
}
