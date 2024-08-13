import { vendorApi } from '@/config/sdk';
import { useMutation } from '@tanstack/react-query';

export default function useMemberShipCredentialsMutation() {
  return useMutation({
    mutationFn: async () => {
      return await vendorApi.vendorAdminControllerGetMemberships();
    },
  });
}
