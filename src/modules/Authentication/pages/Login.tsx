import {
  Box,
  Button,
  Container,
  Group,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <Stack flex={1} justify="center" align="center">
      <Container size="xs" w="100%" style={{ maxWidth: '400px' }}>
        <Stack>
          <Box>
            <Title order={3}>Welcome back</Title>
            <Group gap="xs">
              <Text>Don&apos;t have an account? </Text>
              <Link to="/register">
                <Text>Sign Up</Text>
              </Link>
            </Group>
          </Box>
          <form>
            <Stack>
              <TextInput label="Email Address" />
              <PasswordInput label="Password" />
              <Group justify="right">
                <Link to="/forgot-password">
                  <Text ta="right">Forgot Password?</Text>
                </Link>
              </Group>
              <Button fullWidth>Continue</Button>
            </Stack>
          </form>
        </Stack>
      </Container>
    </Stack>
  );
}
