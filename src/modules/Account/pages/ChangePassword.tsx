import { passwordApi } from '@/config/sdk';
import useAppModal from '@/hooks/modals/useAppModal';
import useLoggedInUser from '@/hooks/useLoggedInUser';
import { UpdateAccountPasswordDTO } from '@/sdk/auth';
import SectionCard from '@/ui/TUI/Components/SectionCard';
import { Box, Button, Center, Group, PasswordInput, Stack, Text } from '@mantine/core';
import EmailSent from '@/ui/assets/illustrations/EmailSentIll.svg';
import { useForm } from '@mantine/form';
import { modals } from '@mantine/modals';
import { useProfilePasswordMutation } from '@/hooks/mutations/useProfileMutation';

export default function ChangePassword() {
  return (
    <SectionCard caption="Update password" title="Change password">
      <Box>
        <Form />
      </Box>
    </SectionCard>
  );
}

function Form() {
  const { email } = useLoggedInUser();
  const { mutate, isPending } = useProfilePasswordMutation();
  const { open: openModal } = useAppModal();
  const form = useForm<UpdateAccountPasswordDTO & { confirmPassword: string }>({
    initialValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
    validate: {
      newPassword: (value) =>
        value.length >= 8 ? null : 'Password must be at least 8 characters long',
      confirmPassword: (value, values) =>
        value === values.newPassword ? null : 'Passwords do not match',
    },
  });
  return (
    <form
      onSubmit={form.onSubmit((values) => {
        mutate(values, {
          onSuccess: () => {
            form.reset();
          },
        });
      })}
    >
      <Stack>
        <PasswordInput
          label="Current password"
          {...form.getInputProps('currentPassword')}
          required
        />
        <Group justify="flex-end">
          <Text
            onClick={() => {
              passwordApi
                .authControllerForgotPassword({
                  email: email ?? '',
                })
                .then(() => {
                  const id = openModal(
                    <Box>
                      <Center>
                        <img src={EmailSent} width={120} />
                      </Center>
                      <Text fw={'bold'} ta={'center'}>
                        Check your email
                      </Text>
                      <Text ta={'center'}>
                        Use link sent to <b>{email}</b> to reset your password
                      </Text>
                      <Button
                        fullWidth
                        variant="default"
                        onClick={() => {
                          modals.close(id);
                        }}
                      >
                        Close
                      </Button>
                    </Box>,
                    undefined,
                    'sm'
                  );
                });
            }}
          >
            Forgot password?
          </Text>
        </Group>

        <PasswordInput label="New password" {...form.getInputProps('newPassword')} required />
        <PasswordInput
          label="Confirm password"
          {...form.getInputProps('confirmPassword')}
          required
        />

        <Box>
          <Button
            color="red"
            variant="default"
            type="submit"
            disabled={form.isValid() == true ? false : true}
            loading={isPending}
          >
            Save changes
          </Button>
        </Box>
      </Stack>
    </form>
  );
}
