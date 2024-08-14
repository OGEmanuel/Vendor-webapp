import useAppModal from '@/hooks/modals/useAppModal';
import UpdateOutletDetailsForm from '../components/UpdateOutletDetailsForm';
import { Outlet } from '@/sdk/vendor';
import noticeIll from '@/ui/assets/illustrations/noticeInfoIll.svg';
import { Box, Button, Center, Group, Stack, Text, Title } from '@mantine/core';
import useConfirm from '@/hooks/modals/useConfirm';
import { modals } from '@mantine/modals';
import { useUpdateOutletAsClosedMutation } from './useUpdateOutletMutation';
import NewOutletForm from '../components/NewOutletForm';

export default function useOutletActions() {
  let { open } = useAppModal();
  const { mutate } = useUpdateOutletAsClosedMutation();

  useConfirm();
  function editOutlet(outlet: Outlet) {
    open(<UpdateOutletDetailsForm initial={outlet} />, 'Edit outlet information', 'md');
  }

  function createOutlet() {
    const id = open(
      <NewOutletForm
        onComplete={() => {
          modals.close(id);
        }}
      />,
      'Add an outlet',
      'md'
    );
  }

  function closeOutletTemporarily(outlet: Outlet) {
    const id = open(
      <Box>
        <Stack>
          <Center>
            <img src={noticeIll} />
          </Center>
          <Box ta={'center'}>
            <Title order={3}>Confirm outlet</Title>
            <Text>
              Closing this outlet will make it appear closed to customers. Are you sure you want to
              proceed?
            </Text>
          </Box>
          <Group>
            <Button
              flex={1}
              variant="default"
              onClick={() => {
                modals.close(id);
              }}
            >
              Go back
            </Button>
            <Button
              fullWidth
              flex={1}
              onClick={() => {
                mutate({
                  outletId: outlet.id,
                  payload: {
                    //@ts-ignore
                    config: {
                      ...outlet.config,
                      isClosed: true,
                    },
                  },
                });
                modals.close(id);
              }}
            >
              Close outlet
            </Button>
          </Group>
        </Stack>
      </Box>,
      undefined,
      'sm'
    );
  }

  function openOutlet(outlet: Outlet) {
    const id = open(
      <Box>
        <Stack>
          <Center>
            <img src={noticeIll} />
          </Center>
          <Box ta={'center'}>
            <Title order={3}>Open Outlet</Title>
            <Text>This outlet can now receive orders on the Tukshopp marketplace.</Text>
          </Box>
          <Group>
            <Button
              flex={1}
              variant="default"
              onClick={() => {
                modals.close(id);
              }}
            >
              Go back
            </Button>
            <Button
              fullWidth
              flex={1}
              onClick={() => {
                mutate({
                  outletId: outlet.id,
                  payload: {
                    //@ts-ignore
                    config: {
                      ...outlet.config,
                      isClosed: false,
                    },
                  },
                });
                modals.close(id);
              }}
            >
              Open outlet
            </Button>
          </Group>
        </Stack>
      </Box>,
      undefined,
      'sm'
    );
  }

  return {
    editOutlet,
    createOutlet,
    closeOutletTemporarily,
    openOutlet,
  };
}
