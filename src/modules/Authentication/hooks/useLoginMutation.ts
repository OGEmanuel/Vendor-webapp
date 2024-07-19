import { useMutation } from '@tanstack/react-query';

export default function useLoginMutation() {
  return useMutation({
    mutationFn: async (values) => {
      console.log(values);
    },
  });
}
