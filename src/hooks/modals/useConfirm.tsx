import { Box, Button, Group, Text, Title } from '@mantine/core';
import useAppModal from './useAppModal';

import NoticeIll from '@/ui/assets/illustrations/NoticeIll.svg?react';
import NoticeInfoIll from '@/ui/assets/illustrations/NoticeInfoIll.svg?react';
import { modals } from '@mantine/modals';

export default function useConfirm() {
  const { open: openModal } = useAppModal();

  function confirmDelete(
    type: 'strict' | 'light',
    title: string,
    reason: string,
    next: () => void
  ) {
    const id = openModal(
      <Box>
        {type == 'light' ? <NoticeInfoIll /> : <NoticeIll />}
        <Title>{title}</Title>
        <Text>{reason}</Text>
        <Group>
          <Button flex={1}>Go Back</Button>
          <Button
            flex={1}
            onClick={() => {
              next();
              modals.close(id);
            }}
          >
            Continue
          </Button>
        </Group>
      </Box>,
      undefined,
      undefined
    );
  }
  return { confirmDelete };
}
