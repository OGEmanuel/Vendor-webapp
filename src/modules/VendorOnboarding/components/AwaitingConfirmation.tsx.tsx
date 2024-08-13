import useActiveVendor from '@/hooks/useActiveVendor';
import {
  Alert,
  AspectRatio,
  Box,
  Button,
  Group,
  Paper,
  Stack,
  Text,
  Title,
  TypographyStylesProvider,
  useMantineTheme,
} from '@mantine/core';
import AwaitingConfirmationIlls from '@/ui/assets/illustrations/AwaitingApprovalIll.svg';
import { Alert01Icon, Time02Icon } from 'hugeicons-react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { OnboardingContext } from '../pages/VendorOnboarding';

export default function AwaitingConfirmation() {
  const { summary } = useActiveVendor();
  const { setStep } = useContext(OnboardingContext);
  const navigate = useNavigate();
  const theme = useMantineTheme();
  return (
    <Box>
      <Paper style={{ overflow: 'hidden' }}>
        <AspectRatio
          ratio={1 / 0.3}
          style={{
            backgroundImage: `url(${AwaitingConfirmationIlls})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <Box />
        </AspectRatio>
        <Stack p="md">
          <Box>
            <Title order={3}>Account Pending Verification</Title>
            <Text>
              Thank you for submitting your details. Our team will review your information, which
              may take two to three days. Once approved, you can start selling on our customer app.
              We appreciate your patience.
            </Text>
          </Box>

          {summary?.verificationStatus == 'declined' && (
            <Alert variant="outline" color="red" bg={theme.colors.red[1]}>
              <Alert01Icon />
              <Text fw={'bold'}>Verification issue</Text>
              <Text>
                We found an issue with your submitted details. Please correct the highlighted errors
                and resubmit your information.
              </Text>
              <TypographyStylesProvider p={0}>
                <div
                  dangerouslySetInnerHTML={{ __html: summary?.verificationDeclineReason ?? '' }}
                />
              </TypographyStylesProvider>
            </Alert>
          )}
          {summary?.verificationStatus == 'approved' ? (
            <Button
              onClick={() => {
                navigate('/');
              }}
            >
              Continue
            </Button>
          ) : summary?.verificationStatus == 'declined' ? (
            <Box>
              <Button
                variant="default"
                onClick={() => {
                  setStep(0);
                }}
              >
                Edit
              </Button>
            </Box>
          ) : (
            <Group>
              <Button
                variant="default"
                onClick={() => {
                  setStep(0);
                }}
              >
                Edit
              </Button>
              <Button color="orange" variant="light" leftSection={<Time02Icon />}>
                Pending approval
              </Button>
            </Group>
          )}
        </Stack>
      </Paper>
    </Box>
  );
}
