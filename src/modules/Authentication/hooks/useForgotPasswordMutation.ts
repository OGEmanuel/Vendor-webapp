import { useMutation } from '@tanstack/react-query';

export default function useForgotPasswordMutation() {
  return useMutation({ mutationFn: async (values) => {} });
}
