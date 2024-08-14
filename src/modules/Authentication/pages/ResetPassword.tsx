import { passwordApi } from '@/config/sdk';
import { ResetPasswordDTO } from '@/sdk/auth';
import { Box, Button, Center, Container, PasswordInput, Stack, Text, Title } from '@mantine/core';
import { useForm } from '@mantine/form';
import { showNotification } from '@mantine/notifications';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import SuccessIll from '@/ui/assets/illustrations/SuccessIll.svg';

export default function ResetPassword() {
  const [resetStatus, setStatus] = useState(0);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const accountId = searchParams.get('accountId');
  const passwordResetToken = searchParams.get('passwordResetToken');

  const form = useForm<ResetPasswordDTO & { confirmPassword: string }>({
    initialValues: {
      accountId: '',
      newPassword: '',
      passwordResetToken: '',
      confirmPassword: '',
    },
    validateInputOnChange: true,

    validate: {
      newPassword: (value) =>
        value.length >= 8 ? null : 'Password must be at least 8 characters long',
      confirmPassword: (value, values) =>
        value === values.newPassword ? null : 'Passwords do not match',
    },
  });

  useEffect(() => {
    if (!accountId && !passwordResetToken) {
      navigate(-1);
    }
    form.setFieldValue('accountId', accountId ?? '');
    form.setFieldValue('passwordResetToken', passwordResetToken ?? '');
  }, []);

  return (
    <>
      <Stack flex={1} justify="center" align="center">
        <Container size="xs" w="100%" style={{ maxWidth: '350px' }}>
          {resetStatus == 0 ? (
            <Stack>
              <Box>
                <Title order={3}>Create a new password</Title>
                <Text>Add a way to secure your account</Text>
              </Box>
              <form
                onSubmit={form.onSubmit((values) => {
                  passwordApi
                    .authControllerResetPassword(values)
                    .then(() => {
                      showNotification({ message: 'Password reset successful' });
                      setStatus(1);
                    })
                    .catch(() => {});
                })}
              >
                <Stack>
                  <PasswordInput label="Enter Password" {...form.getInputProps('newPassword')} />
                  <PasswordInput
                    label="Confirm password"
                    {...form.getInputProps('confirmPassword')}
                  />
                  <Button fullWidth type="submit" disabled={form.isValid() == true ? false : true}>
                    Continue
                  </Button>
                </Stack>
              </form>
            </Stack>
          ) : (
            <Box>
              <Stack ta={'center'}>
                <Center>
                  <img src={SuccessIll} />
                </Center>
                <Box>
                  <Text fw={'bold'} size="xl">
                    Password reset successful
                  </Text>
                  <Text>
                    Your password has been successfully reset. <br />
                    You can now sign in with your new password.
                  </Text>
                </Box>
                <Button
                  variant="default"
                  onClick={() => {
                    window.open('/');
                  }}
                >
                  Login
                </Button>
              </Stack>
            </Box>
          )}
        </Container>
      </Stack>
    </>
  );
}
