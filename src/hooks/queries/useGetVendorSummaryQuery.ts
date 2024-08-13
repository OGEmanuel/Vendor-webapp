import { vendorApi } from '@/config/sdk';
import { useTUIAppContext } from '@/ui/TUI/Templates/TUIAppContext';
import { useQuery } from '@tanstack/react-query';

export default function useGetVendorSummaryQuery() {
  const { activeVendorCredential } = useTUIAppContext();
  return useQuery({
    queryKey: ['vendor-summary', activeVendorCredential?.vendorId],
    queryFn: async () => {
      if(activeVendorCredential?.vendorId){
        const data = await vendorApi.vendorAdminControllerGetVendorSummary(
          activeVendorCredential?.vendorId ?? ''
        );
        return data.data;
      }
      return undefined
    },
    enabled: true,
  });
}
