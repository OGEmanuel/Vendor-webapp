import { Box, Button, Container, Group, Stack, Text, TextInput, Title } from '@mantine/core';
import { TUIBackButtonActionIcon } from '@/ui/TUI/Components/BackButton';
import { PasswordApi } from '@/sdk/auth';

export default function ForgotPassword() {
  return (
    <Stack flex={1} justify="center" align="center">
      <Container size="xs" w="100%" style={{ maxWidth: '350px' }}>
        <Stack>
          <Box>
            <Title order={3}>Forgot your password?</Title>
            <Text>Confirm your email and you will receive a link to reset password </Text>
          </Box>
          <form>
            <Stack>
              <TextInput label="Email Address" />
              <Group>
                <TUIBackButtonActionIcon />
                <Button
                  flex={1}
                  onClick={() => {
                    // navigate('/reset-password-otp-auth');
                    console.log('should send na');
                    new PasswordApi()
                      .authControllerForgotPassword({ email: 'joshuanwafor01@gmail.com' })
                      .then((res) => {
                        console.log(res.data, ' passed');
                      })
                      .catch(console.log);
                  }}
                >
                  Continue
                </Button>
              </Group>
            </Stack>
          </form>
        </Stack>
      </Container>
    </Stack>
  );
}
