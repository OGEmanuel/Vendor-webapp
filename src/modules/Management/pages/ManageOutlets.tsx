import TUIPageShell from '@/ui/TUI/Templates/TUIPageShell';
import { Button } from '@mantine/core';
import { PlusSignIcon } from 'hugeicons-react';

export default function ManageOutlets() {
  return (
    <TUIPageShell
      title="Outlets"
      caption="Manage your outlets and details here"
      right={<Button leftSection={<PlusSignIcon />}>Add an outlet</Button>}
    >
      <div></div>
    </TUIPageShell>
  );
}
