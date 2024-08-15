import { queryClient } from '@/config/queryClient';
import { memberApi } from '@/config/sdk';
import { InviteMemberDTO } from '@/sdk/vendor';
import { useTUIAppContext } from '@/ui/TUI/Templates/TUIAppContext';
import { nprogress } from '@mantine/nprogress';
import { useMutation } from '@tanstack/react-query';

export default function useNewMemberMutation() {
  const { activeVendorCredential } = useTUIAppContext();
  return useMutation({
    mutationFn: async ({ payload }: { payload: InviteMemberDTO }) => {
      payload.vendorId = activeVendorCredential.vendorId;
      nprogress.start();
      const data = await memberApi.vendorMemberAdminControllerNewMemberInvitation(payload);
      queryClient.invalidateQueries({ queryKey: ['get-members'] });
      return data;
    },
    onError: () => {
      nprogress.reset();
    },
    onSuccess: () => {
      nprogress.reset();
    },
  });
}
