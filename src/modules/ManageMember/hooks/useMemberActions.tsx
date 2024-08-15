import useAppModal from '@/hooks/modals/useAppModal';
import { Member } from '@/sdk/vendor';
import noticeIll from '@/ui/assets/illustrations/NoticeRed.svg';
import { Box, Button, Center, Group, Stack, Text, Title } from '@mantine/core';
import { modals } from '@mantine/modals';
import { useRemoveMemberMutation } from './useUpdateMemberMutation';
import NewMemberForm from '../components/NewMemberForm';
import UpdateMemberForm from '../components/UpdateMemberForm';

export default function useMemberActions() {
  let { open } = useAppModal();
  const removeMemberMutation = useRemoveMemberMutation();


  function editMember(member: Member) {
    const id = open(
      <UpdateMemberForm
        onComplete={() => {
          modals.close(id);
        }}
        initial={member}
      />,
      'Edit member Information',
      'md'
    );
  }

  function createMember() {
    const id = open(
      <NewMemberForm
        onComplete={() => {
          modals.close(id);
        }}
      />,
      'Invite member',
      'md'
    );
  }

  function removeMember(member: Member) {
    const id = open(
      <Box>
        <Stack>
          <Center>
            <img src={noticeIll} />
          </Center>
          <Box ta={'center'}>
            <Title order={3}>Confirm member Removal</Title>
            <Text>
              Are you sure you want to remove this member from your business? This action will
              delete their access entirely and cannot be undone.
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
              color="red"
              variant="light"
              onClick={() => {
                removeMemberMutation.mutate({ memberId: member.id ?? '' });
                modals.close(id);
              }}
            >
              Remove member
            </Button>
          </Group>
        </Stack>
      </Box>,
      undefined,
      'sm'
    );
  }

  return {
    editMember,
    createMember,
    removeMember,
  };
}
