import { vendorApi } from '@/config/sdk';
import { useQuery } from '@tanstack/react-query';

export default function useGetMemberShipCredentialsQuery() {
  return useQuery({
    queryKey: ['memberships'],
    queryFn: () => {
      return vendorApi.vendorAdminControllerGetMemberships();
    },
  });
}
