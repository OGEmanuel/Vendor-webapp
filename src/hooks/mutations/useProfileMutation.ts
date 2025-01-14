import { useMutation } from '@tanstack/react-query';
import useLoggedInUser from '../useLoggedInUser';
import { meApi } from '@/config/sdk';
import { UpdateAccountDTO, UpdateAccountPasswordDTO } from '@/sdk/auth';
import { showNotification } from '@mantine/notifications';

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

export function useProfilePasswordMutation() {
  const { reload } = useLoggedInUser();
  return useMutation({
    mutationFn: async (payload: UpdateAccountPasswordDTO) => {
      let response = await meApi.accountControllerUpdatePassword(payload);
      return response;
    },
    onSuccess: () => {
      showNotification({message:"Your password has been updated successfully."})
      reload();
    },
  });
}
