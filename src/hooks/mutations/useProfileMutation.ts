import { useMutation } from '@tanstack/react-query';
import useLoggedInUser from '../useLoggedInUser';
import { meApi } from '@/config/sdk';
import { UpdateAccountDTO } from '@/sdk/auth';

export function useProfileMutation() {
  const { reload } = useLoggedInUser();
  return useMutation({
    mutationFn: async (payload: UpdateAccountDTO) => {
      let response = await meApi.accountControllerUpdateAccount(payload);
      return response;
    },
    onSuccess: () => {
      reload();
    },
  });
}
