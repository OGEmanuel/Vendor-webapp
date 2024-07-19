import {
  Box,
  Button,
  Container,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function ResetPassword() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const accountId = searchParams.get('accountId');
  const passwordResetToken = searchParams.get('passwordResetToken');

  useEffect(() => {
    if (!accountId && !passwordResetToken) {
      navigate(-1);
    }
  }, []);

  return (
    <>
      <Stack flex={1} justify="center" align="center">
        <Container size="xs" w="100%" style={{ maxWidth: '350px' }}>
          <Stack>
            <Box>
              <Title order={3}>Create new password</Title>
              <Text>Add a way to secure your account</Text>
            </Box>
            <form>
              <Stack>
                <TextInput label="Enter Password" />
                <PasswordInput label="Confirm password" />
                <Button fullWidth>Continue</Button>
              </Stack>
            </form>
          </Stack>
        </Container>
      </Stack>
    </>
  );
}
