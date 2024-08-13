import { Box, Container, Stepper } from '@mantine/core';
import { createContext, useContext } from 'react';
import SetupVendorProfile from '../components/SetupVendorProfile';
import SetupKYCProfile from '../components/SetupKYCProfile';
import SetupPayoutProfile from '../components/SetupPayoutProfile';
import SetupOutlet from '../components/SetupOutletForm';
import { useLocalStorage } from '@mantine/hooks';
import AwaitingConfirmation from '../components/AwaitingConfirmation.tsx';

interface OnboardingContextType {
  step: number;
  setStep: (step: number) => void;
  next: () => void;
  back: () => void;
}
export const OnboardingContext = createContext<OnboardingContextType>({
  setStep: () => {},
  step: 1,
  next: () => {},
  back: () => {},
});

export default function VendorOnboardingPage() {
  const [step, setStep] = useLocalStorage({ key: 'onboardingStep', defaultValue: 0 });

  const handleStepChange = (nextStep: number) => {
   
    console.log("next step about to");
    const isOutOfBounds = nextStep > 4 || nextStep < 0;
    if (isOutOfBounds) {
      return;
    }
    setStep(nextStep);
    console.log(nextStep, " next step added")
  };

  return (
    <OnboardingContext.Provider
      value={{
        setStep: setStep,
        step: step,
        next: () => {
          console.log(step, "init")
          handleStepChange(step + 1);
        },
        back: () => {
          handleStepChange(step - 1);
        },
      }}
    >
      <PageRoot />
    </OnboardingContext.Provider>
  );
}

function PageRoot() {
 const {step}=useContext(OnboardingContext);
  return (
    <>
      <Box mt={100}>
        <Container size={'sm'}>
          <Stepper active={step} color="dark" size="xs" iconSize={18}>
            <Stepper.Step label="Vendor details">
              <SetupVendorProfile />
            </Stepper.Step>
            <Stepper.Step label="Documents">
              <SetupKYCProfile />
            </Stepper.Step>
            <Stepper.Step label="Payout">
              <SetupPayoutProfile />
            </Stepper.Step>
            <Stepper.Step label="Outlet details">
              <SetupOutlet />
            </Stepper.Step>
            <Stepper.Completed>
              <AwaitingConfirmation/>
            </Stepper.Completed>
          </Stepper>
        </Container>
      </Box>
    </>
  );
}
