import { AuthApi, SigninDTO } from '@/sdk/auth';
import { useMutation } from '@tanstack/react-query';

export default function useLoginMutation() {
  return useMutation({
    mutationFn: async (values: SigninDTO) => {
      return new AuthApi().authControllerSignin(values);
    },
    onError: () => {},
    onSuccess() {},
  });
}
