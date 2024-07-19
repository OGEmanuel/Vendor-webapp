import { useMutation } from '@tanstack/react-query';

export default function useResetPasswordOTPAuthMutation() {
  return useMutation({
    mutationFn: async (values) => {
      console.log(values);
    },
  });
}
