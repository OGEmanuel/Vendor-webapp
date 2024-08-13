import { useTUIAppContext } from '@/ui/TUI/Templates/TUIAppContext';
import useGetUserProfileQuery from './queries/useGetUserProfileQuery';

export default function useLoggedInUser() {
  const { setAuthToken } = useTUIAppContext();
  const { data, status } = useGetUserProfileQuery();
  return {
    ...data?.data,
    status,
    logout: () => {
      setAuthToken('');
    },
  };
}
