import { useTUIAppContext } from '@/ui/TUI/Templates/TUIAppContext';
import useGetVendorSummary from './queries/useGetVendorSummaryQuery';

export default function useActiveVendor() {
  const { activeVendorCredential } = useTUIAppContext();
  const { data, refetch } = useGetVendorSummary();
  return {
    reloadVendorSummary: refetch,
    summary: data,
    activeVendorCredential,
  };
}
