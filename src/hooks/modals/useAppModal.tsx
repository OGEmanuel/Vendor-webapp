import { Avatar, Box, CloseIcon, Group, MantineSize, Title, useMantineTheme } from '@mantine/core';
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
        <Box>
          <Group justify="space-between">
            <Box>{title && <Title>{title}</Title>}</Box>
            <Avatar
              onClick={() => {
                modals.close(id);
              }}
            >
              <CloseIcon />
            </Avatar>
          </Group>
          {content}
        </Box>
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
