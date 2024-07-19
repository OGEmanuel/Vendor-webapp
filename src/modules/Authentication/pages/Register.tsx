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
  Grid,
  Select,
  Divider,
  Box,
  useMantineTheme,
  Center,
} from '@mantine/core';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import VendorSuccessIll from '@/ui/assets/illustrations/VendorSubmissionSuccessIll.svg?react';

export default function Register() {
  const theme = useMantineTheme();
  const [step, setStep] = useState(0);

  const StepOneVendorDetails = (
    <Stack>
      <Box>
        <Title order={3}>Get started</Title>
        <Group>
          <Text>Already have an account? </Text>
          <Link to={'/login'}>
            {' '}
            <Text>Sign in </Text>
          </Link>
        </Group>
      </Box>
      <TextInput label="Business Name" />
      <Select label="Business Type" />
      <TextInput label="Tax Identification Number (TIN)" />
      <TextInput label="Business Address" />

      <Divider variant="dashed" />
      <Grid>
        <Grid.Col span={{ md: 6 }}>
          <TextInput label="First Name" />
        </Grid.Col>
        <Grid.Col span={{ md: 6 }}>
          <TextInput label="Last Name" />
        </Grid.Col>
        <Grid.Col span={{ md: 12 }}>
          <TextInput label="Email Address" />
        </Grid.Col>
        <Grid.Col span={{ md: 12 }}>
          <TextInput label="Phone Number" />
        </Grid.Col>
        <Grid.Col span={{ md: 12 }}>
          {' '}
          <Button
            fullWidth
            onClick={() => {
              setStep(1);
            }}
          >
            Continue
          </Button>
        </Grid.Col>
      </Grid>
    </Stack>
  );

  const StepTwoVendorDetails = (
    <Stack>
      <Box>
        <Title order={3}>Create your password</Title>
        <Text>Add a way to secure your account.</Text>
      </Box>
      <PasswordInput label="Enter Password" />
      <PasswordInput label="Confirm Password" />

      <Group>
        <TUIBackButtonActionIcon
          onClick={() => {
            setStep(0);
          }}
        />
        <Button flex={1} type="submit">
          Continue
        </Button>
      </Group>
    </Stack>
  );

  const SuccessScreen = (
    <Container size={'xs'} flex={1}>
      <Stack h={'100%'} justify="center">
        <Center>
          <VendorSuccessIll />
        </Center>
        <Box>
          <Title ta={'center'}>Thank you for your submission</Title>
          <Text ta={'center'}>
            Our team is verifying your details, and we'll notify you once it's approve. Thank you
            for your patience
          </Text>
        </Box>
        <Link to={'/login'} style={{ textTransform: 'none', textDecoration: 'none' }}>
          <Button variant="default" fullWidth size="lg">
            Sign in
          </Button>
        </Link>
      </Stack>
    </Container>
  );

  return (
    <>
      <Container size={'md'} w={'100%'}>
        <Grid>
          <Grid.Col span={{ md: 5 }}>
            <Title>
              Unlock new revenue by building your business online with{' '}
              <span style={{ color: theme.colors.orange[8] }}>TukShopp</span>
            </Title>
            <Text>
              Connecting your business to a wider range of customers through our platform.
            </Text>
          </Grid.Col>

          <Grid.Col span={{ md: 7 }}>
            <Stack>
              <form>
                {step == 0 && StepOneVendorDetails}
                {step == 1 && StepTwoVendorDetails}
              </form>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
}
