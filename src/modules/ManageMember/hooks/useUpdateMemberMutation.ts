import { queryClient } from '@/config/queryClient';
import { memberApi } from '@/config/sdk';
import { UpdateMemberDTO } from '@/sdk/vendor';
import { nprogress } from '@mantine/nprogress';
import { useMutation } from '@tanstack/react-query';

export default function useUpdateMemberMutation() {
  return useMutation({
    mutationFn: async ({ payload, memberId }: { payload: UpdateMemberDTO; memberId: string }) => {
      nprogress.start();
      const data = await memberApi.vendorMemberAdminControllerUpdateMember(memberId, payload);
      queryClient.invalidateQueries({ queryKey: ['get-members'] });
      return data;
    },
    onError: (err) => {
      console.log(err);
      nprogress.reset();
    },
    onSuccess: () => {
      nprogress.reset();
    },
  });
}

export function useRemoveMemberMutation() {
  return useMutation({
    mutationFn: async ({ memberId }: { memberId: string }) => {
      nprogress.start();
      const data = await memberApi.vendorMemberAdminControllerDeleteMember(memberId);
      queryClient.invalidateQueries({ queryKey: ['get-members'] });
      return data;
    },
    onError: (err) => {
      console.log(err);
      nprogress.reset();
    },
    onSuccess: () => {
      nprogress.reset();
    },
  });
}
