import { TUIBackButtonActionIcon } from '@/ui/TUI/Components/BackButton';
import {
  Container,
  Stack,
  Title,
  Group,
  TextInput,
  PasswordInput,
  Button,
  Checkbox,
  Text,
  Box,
} from '@mantine/core';
import { useNavigate } from 'react-router-dom';

export default function ForgotPassword() {
  const navigate = useNavigate();
  return (
    <Stack flex={1} justify="center" align="center">
      <Container size={'xs'} w={'100%'} style={{ maxWidth: '350px' }}>
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
                    navigate('/reset-password-otp-auth');
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
