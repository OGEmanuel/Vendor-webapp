import { outletApi } from '@/config/sdk';
import { useTUIAppContext } from '@/ui/TUI/Templates/TUIAppContext';
import { useQuery } from '@tanstack/react-query';

export default function useGetVendorOutletsQuery() {
  const { activeVendorCredential } = useTUIAppContext();
  return useQuery({
    queryKey: ['get-outlets'],
    queryFn: async () => {
      const response = await outletApi.vendorOutletAdminControllerGetAllVendorOutlets(
        activeVendorCredential.vendorId ?? ''
      );
      return response.data;
    },
  });
}
