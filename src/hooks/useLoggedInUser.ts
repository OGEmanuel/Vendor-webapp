import { useTUIAppContext } from '@/ui/TUI/Templates/TUIAppContext';
import useGetUserProfileQuery from './queries/useGetUserProfileQuery';
import { queryClient } from '@/config/queryClient';

export default function useLoggedInUser() {
  const { setAuthToken } = useTUIAppContext();
  const { data, status, refetch } = useGetUserProfileQuery();
  return {
    ...data?.data,
    profile: data?.data,
    status,
    reload: () => {
      refetch();
    },
    logout: () => {
      setAuthToken('');
      localStorage.clear();
      queryClient.invalidateQueries();
    },
  };
}
