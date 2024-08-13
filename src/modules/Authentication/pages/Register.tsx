import {
  Container,
  Stack,
  Title,
  Group,
  TextInput,
  PasswordInput,
  Button,
  Text,
  Grid,
  Box,
  Center,
} from '@mantine/core';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TUIBackButtonActionIcon } from '@/ui/TUI/Components/BackButton';
import VendorSuccessIll from '@/ui/assets/illustrations/VendorSubmissionSuccessIll.svg?react';
import PhoneInput from '@/ui/TUI/Components/PhoneInput';
import useRegisterationForm from '../hooks/useRegisterationForm';
import SignupIlls from '@/ui/assets/illustrations/SignupIll.svg';
import LogoWithTextWhite from '@/ui/assets/LogoWithTextWhite.svg?react';
import { CreateAccountDTO } from '@/sdk/auth';
import useRegisterMutation from '../hooks/useRegisterMutation';

export default function Register() {
  const [step, setStep] = useState(0);

  const { stepOneForm } = useRegisterationForm();

  const StepOneVendorDetails = (
    <form>
      <Stack>
        <Box>
          <Title order={3}>Get started</Title>
          <Group gap={'xs'}>
            <Text>Already have an account? </Text>
            <Link to="/login">
              {' '}
              <Text>Sign in </Text>
            </Link>
          </Group>
        </Box>

        <Grid>
          <Grid.Col span={{ md: 6 }}>
            <TextInput label="First Name" required {...stepOneForm.getInputProps('firstName')} />
          </Grid.Col>
          <Grid.Col span={{ md: 6 }}>
            <TextInput label="Last Name" required {...stepOneForm.getInputProps('lastName')} />
          </Grid.Col>
          <Grid.Col span={{ md: 12 }}>
            <TextInput label="Email Address" required {...stepOneForm.getInputProps('email')} />
          </Grid.Col>
          <Grid.Col span={{ md: 12 }}>
            <PhoneInput
              label="Phone Number"
              placeholder="Enter phone number"
              required
              {...stepOneForm.getInputProps('phone')}
            />
          </Grid.Col>
          <Grid.Col span={{ md: 12 }}>
            <Group gap={'xs'}>
              <Text fw="500">Referral code </Text>
              <Text fw="lighter" size="sm" c="dimmed">
                (optional)
              </Text>
            </Group>
            <TextInput {...stepOneForm.getInputProps('referralCode')} />
          </Grid.Col>
          <Grid.Col span={{ md: 12 }}>
            <Button
              fullWidth
              disabled={stepOneForm.isValid() == true ? false : true}
              onClick={() => {
                setStep(1);
              }}
            >
              Continue
            </Button>
          </Grid.Col>

          <Grid.Col span={{ md: 12 }}>
            <Text ta={'center'} c={'dimmed'} fw="normal">
              By continuing, you automatically accept our <a href="#">Terms & Conditions</a>,<br />
              <a href="#">Privacy Policy</a> and <a href="#">cookies policy</a>
            </Text>
          </Grid.Col>
        </Grid>
      </Stack>
    </form>
  );

  const SuccessScreen = (
    <Container size="xs" flex={1}>
      <Stack h="100%" justify="center">
        <Center>
          <VendorSuccessIll />
        </Center>
        <Box>
          <Title ta="center">Thank you for your submission</Title>
          <Text ta="center">
            Our team is verifying your details, and we will notify you once it is approve. Thank you
            for your patience
          </Text>
        </Box>
        <Link to="/login" style={{ textTransform: 'none', textDecoration: 'none' }}>
          <Button variant="default" fullWidth size="lg">
            Sign in
          </Button>
        </Link>
      </Stack>
    </Container>
  );

  if (step == 3) {
    return SuccessScreen;
  }
  return (
    <Grid flex={1} justify="stretch" align="stretch">
      <Grid.Col
        visibleFrom="md"
        span={{ md: 6 }}
        style={{
          backgroundImage: `url(${SignupIlls})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
        }}
      >
        <Stack h={'100%'}>
          <Container pt={'100px'}>
            <LogoWithTextWhite />
            <Title c="white">
              Unlock new revenue
              <br /> by building your <br />
              business online with TukShopp
            </Title>
            <Text c="white">
              Connecting your business to a wider range of customers through our platform.
            </Text>
          </Container>
        </Stack>
      </Grid.Col>

      <Grid.Col span={{ md: 6 }} h={'100%'}>
        <Container size={'sm'}>
          <Stack mih={'100vh'} justify="center">
            {step == 0 && StepOneVendorDetails}
            {step == 1 && (
              <SignupCompletion
                initial={stepOneForm.values}
                back={() => {
                  setStep(0);
                }}
              />
            )}
          </Stack>
        </Container>
      </Grid.Col>
    </Grid>
  );
}

function SignupCompletion({ initial, back }: { initial: CreateAccountDTO; back: () => void }) {
  const { stepTwoForm } = useRegisterationForm();
  const { mutate, isPending } = useRegisterMutation();
  
  useEffect(() => {
    console.log(initial);
    stepTwoForm.setValues({ ...initial, confirmPassword: '' });
  }, [initial]);
  return (
    <form
      onSubmit={stepTwoForm.onSubmit((values) => {
        console.log(values);
        mutate(values, {});
      })}
    >
      <Stack>
        <Box>
          <Title order={3}>Create your password</Title>
          <Text>Add a way to secure your account.</Text>
        </Box>
        <PasswordInput label="Enter Password" {...stepTwoForm.getInputProps('password')} />
        <PasswordInput label="Confirm Password" {...stepTwoForm.getInputProps('confirmPassword')} />

        <Group>
          <TUIBackButtonActionIcon onClick={back} />
          <Button
            flex={1}
            type="submit"
            disabled={stepTwoForm.isValid() == true ? false : true}
            loading={isPending}
          >
            Continue
          </Button>
        </Group>
      </Stack>
    </form>
  );
}
