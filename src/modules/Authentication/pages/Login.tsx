import { SigninDTO } from '@/sdk/auth';
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
import { useForm } from '@mantine/form';
import { Link } from 'react-router-dom';
import useLoginMutation from '../hooks/useLoginMutation';

export default function Login() {
  const { mutate, isPending } = useLoginMutation();
  const form = useForm<SigninDTO>({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      password: '',
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value ?? '') ? null : 'Invalid email'),
    },
  });

  return (
    <Stack flex={1} justify="center" align="center">
      <Container size="xs" w="100%" style={{ maxWidth: '400px' }}>
        <Stack>
          <Box>
            <Title order={3}>Welcome back</Title>
            <Group gap="xs">
              <Text>Don&apos;t have an account? </Text>
              <Link to="/register" style={{}}>
                <Text>Sign Up</Text>
              </Link>
            </Group>
          </Box>
          <form
            onSubmit={form.onSubmit((values) => {
              mutate(values as unknown as SigninDTO);
            })}
          >
            <Stack>
              <TextInput label="Email Address" {...form.getInputProps('email')} />
              <PasswordInput label="Password" {...form.getInputProps('password')} />
              <Group justify="right">
                <Link to="/forgot-password">
                  <Text ta="right">Forgot Password?</Text>
                </Link>
              </Group>
              <Button fullWidth type="submit" loading={isPending}>
                Continue
              </Button>
            </Stack>
          </form>
        </Stack>
      </Container>
    </Stack>
  );
}
