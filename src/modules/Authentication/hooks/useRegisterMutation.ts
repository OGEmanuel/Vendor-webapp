import { authApi } from '@/config/sdk';
import { CreateAccountDTO } from '@/sdk/auth';
import { useTUIAppContext } from '@/ui/TUI/Templates/TUIAppContext';
import { showNotification } from '@mantine/notifications';
import { useMutation } from '@tanstack/react-query';

export default function useRegisterMutation() {
  const { setAuthToken } = useTUIAppContext();
  return useMutation({
    mutationFn: async (values: CreateAccountDTO) => {
      console.log(values);
      return await authApi.authControllerSignup(values);
    },
    onSuccess(data) {
      setAuthToken(data.data.token);
    },
    onError() {
      showNotification({ message: 'Error occured creating your account. Please try again.' });
    },
  });
}
