import TUIPageShell from '@/ui/TUI/Templates/TUIPageShell';
import VendorPicker from '../components/VendorPicker';
import { useTUIAppContext } from '@/ui/TUI/Templates/TUIAppContext';

export default function DashboardIndex() {
  const { activeVendorCredential } = useTUIAppContext();
  return (
    <TUIPageShell title="Dashboard" right={<div>right</div>}>
      {activeVendorCredential == undefined ? <VendorPicker /> : null}
    </TUIPageShell>
  );
}
