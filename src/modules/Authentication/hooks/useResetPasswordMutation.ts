import { useMutation } from '@tanstack/react-query';

export default function useResetPasswordMutation() {
  return useMutation({
    mutationFn: async (values) => {
      console.log(values);
    },
  });
}
