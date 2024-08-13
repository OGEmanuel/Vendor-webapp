import { meApi } from '@/config/sdk';
import { useQuery } from '@tanstack/react-query';

export default function useGetUserProfileQuery() {
  return useQuery({
    queryKey: ['get-me'],
    queryFn: () => {
      return meApi.accountControllerGetMyProfile();
    },
  });
}
