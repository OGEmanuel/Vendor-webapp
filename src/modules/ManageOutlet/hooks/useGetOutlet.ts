import { outletApi } from '@/config/sdk';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

export default function useGetOutletQuery() {
  const { outletId } = useParams();
  return useQuery({
    queryKey: [outletId],
    queryFn: async () => {
      const response = await outletApi.vendorOutletAdminControllerGetOutletSummary(outletId ?? '');
      return response.data;
    },
  });
}
