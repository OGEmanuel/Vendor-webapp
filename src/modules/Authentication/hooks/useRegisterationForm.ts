import { CreateAccountDTO } from '@/sdk/auth';
import { useForm } from '@mantine/form';

export default function useRegisterationForm() {
  const stepOneForm = useForm<CreateAccountDTO>({
    initialValues: {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      phone: '',
      referralCode: '',
    },
    validate: {
      email: (value) => (/^\S+@\S+\.\S+$/.test(value) ? null : 'Invalid email address'),
      firstName: (value) => (value.trim().length > 0 ? null : 'First name is required'),
      lastName: (value) => (value.trim().length > 0 ? null : 'Last name is required'),
      phone: (value) => (/^\+[1-9]{1,3}[0-9]{10,14}$/.test(value) ? null : 'Invalid phone number'),
      referralCode: (value) =>
        value.trim().length === 0 || /^[A-Z0-9]{6,10}$/.test(value)
          ? null
          : 'Referral code must be 6-10 alphanumeric characters',
    },
  });

  const stepTwoForm = useForm<CreateAccountDTO & { confirmPassword: string }>({
    initialValues: {
      email: '',
      firstName: '',
      lastName: '',
      phone: '',
      referralCode: '',
      password: '',
      confirmPassword: '',
    },
    validate: {
      password: (value) =>
        value.length >= 8 ? null : 'Password must be at least 8 characters long',
      confirmPassword: (value, values) =>
        value === values.password ? null : 'Passwords do not match',
    },
  });

  return {
    stepOneForm,
    stepTwoForm,
  };
}
