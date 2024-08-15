import { memberApi } from '@/config/sdk';
import { useTUIAppContext } from '@/ui/TUI/Templates/TUIAppContext';
import { useQuery } from '@tanstack/react-query';

export default function useGetVendorMembersQuery() {
  const { activeVendorCredential } = useTUIAppContext();
  return useQuery({
    queryKey: ['get-members'],
    queryFn: async () => {
      const response = await memberApi.vendorMemberAdminControllerGetMembers(
        activeVendorCredential.vendorId ?? ''
      );
      return response.data;
    },
  });
}
