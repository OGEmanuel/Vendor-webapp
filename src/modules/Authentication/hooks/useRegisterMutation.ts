import { useMutation } from '@tanstack/react-query';

export default function useRegisterMutation() {
  return useMutation({
    mutationFn: async (values) => {
      console.log(values);
    },
  });
}
