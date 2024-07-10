import TUIPageShell from '@/ui/TUI/Templates/TUIPageShell';

export default function Dashboard() {
  return (
    <TUIPageShell title="Page title" right={<div>right</div>}>
      <h1>Dashboard goes here</h1>
    </TUIPageShell>
  );
}
