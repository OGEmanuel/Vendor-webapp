import { Container, Stack, Box, Title, Group, Button, Text, PinInput } from '@mantine/core';
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { TUIBackButtonActionIcon } from '@/ui/TUI/Components/BackButton';

export default function ResetPasswordOTPAuth() {
  const [search] = useSearchParams();
  const navigate = useNavigate();
  // const phoneOTP = search.get('phoneOtp');
  useEffect(() => {
    if (search.get('phoneOTP')) {
      navigate(-1);
    }
  }, []);

  return (
    <Stack flex={1} justify="center" align="center">
      <Container size="xs" w="100%" style={{ maxWidth: '320px' }}>
        <Stack>
          <Box>
            <Title order={3}>ENTER OTP Code</Title>

            <Text>
              Please enter the digit code sent to {search.get('phoneOtp')} to reset password.{' '}
            </Text>
          </Box>
          <form>
            <Stack>
              <PinInput size="xl" />
              <Box>
                <Button size="sm" variant="default">
                  Resend code in 24s
                </Button>
              </Box>
              <Group>
                <TUIBackButtonActionIcon />
                <Button flex={1}>Continue</Button>
              </Group>
            </Stack>
          </form>
        </Stack>
      </Container>
    </Stack>
  );
}
