import { authApi } from '@/config/sdk';
import { SigninDTO } from '@/sdk/auth';
import { useTUIAppContext } from '@/ui/TUI/Templates/TUIAppContext';
import { showNotification } from '@mantine/notifications';
import { useMutation } from '@tanstack/react-query';

export default function useLoginMutation() {
  const { setAuthToken } = useTUIAppContext();
  return useMutation({
    mutationFn: async (values: SigninDTO) => {
      return await authApi.authControllerSignin(values);
    },
    onError: () => {},
    onSuccess(values) {
      if (values.data.requiresOTPToLogin == true) {
        showNotification({ message: 'Signin with Phone has not been implemented' });
        return;
      }
      setAuthToken(values.data.token);
    },
  });
}
