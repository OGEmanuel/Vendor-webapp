import { useTUIAppContext } from '@/ui/TUI/Templates/TUIAppContext';
import useGetUserProfileQuery from './queries/useGetUserProfileQuery';

export default function useLoggedInUser() {
  useTUIAppContext();
  const { data, status, refetch } = useGetUserProfileQuery();
  return {
    ...data?.data,
    profile: data?.data,
    status,
    reload: () => {
      refetch();
    },
    logout: () => {
      localStorage.clear();
      window.open('/',"_self");
    },
  };
}
