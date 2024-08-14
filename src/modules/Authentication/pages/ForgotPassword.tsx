import {
  Box,
  Button,
  Center,
  Container,
  Group,
  Stack,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import { TUIBackButtonActionIcon } from '@/ui/TUI/Components/BackButton';
import { ForgotPasswordDTO } from '@/sdk/auth';
import { useForm } from '@mantine/form';
import { showNotification } from '@mantine/notifications';
import { passwordApi } from '@/config/sdk';
import EmailSentIll from '@/ui/assets/illustrations/EmailSentIll.svg';
import { useState } from 'react';

export default function ForgotPassword() {
  const [forgotStatus, setStatus] = useState(0);
  const form = useForm<ForgotPasswordDTO>({
    initialValues: {
      email: '',
    },
    validate: {
      email: (value) =>
        value.trim() === ''
          ? 'Email is required'
          : !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
            ? 'Invalid email address'
            : null,
    },
  });

  return (
    <Stack flex={1} justify="center" align="center">
      <Container size="xs" w="100%" style={{ maxWidth: '350px' }}>
        {forgotStatus == 0 ? (
          <Stack>
            <Box>
              <Title order={3}>Forgot your password?</Title>
              <Text>Confirm your email and you will receive a link to reset password </Text>
            </Box>
            <form
              onSubmit={form.onSubmit((values) => {
                passwordApi
                  .authControllerForgotPassword({ email: values.email })
                  .then(() => {
                    setStatus(1);
                    showNotification({
                      message: 'A password reset link has been sent to your email address',
                    });
                  })
                  .catch(console.log);
              })}
            >
              <Stack>
                <TextInput label="Email Address" {...form.getInputProps('email')} />
                <Group>
                  <TUIBackButtonActionIcon />
                  <Button flex={1} type="submit" disabled={form.isValid() == true ? false : true}>
                    Continue
                  </Button>
                </Group>
              </Stack>
            </form>
          </Stack>
        ) : (
          <Stack>
            <Center>
              <img src={EmailSentIll} />
            </Center>
            <Box>
              <Text fw={'bold'} ta={'center'} size="lg">
                Check your email
              </Text>
              <Text ta={'center'}>
                Your password has been successfully reset. <br />
                You can now sign in with your new password.
              </Text>
            </Box>
            <Button
              onClick={() => {
                window.open('https://gmail.com', '_blank');
              }}
            >
              Go to mail
            </Button>
            <Center>
              <Button
                variant="default"
                onClick={() => {
                  setStatus(0);
                }}
              >
                Resend link
              </Button>
            </Center>
          </Stack>
        )}
      </Container>
    </Stack>
  );
}
