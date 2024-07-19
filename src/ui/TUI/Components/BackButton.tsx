import { Avatar } from '@mantine/core';

import { ArrowLeft02Icon } from 'hugeicons-react';
import { useNavigate } from 'react-router-dom';

export function TUIBackButtonActionIcon({ onClick }: { onClick?: () => void }) {
  const navigate = useNavigate();

  return (
    <Avatar
      radius="xl"
      size="md"
      onClick={
        onClick ??
        function back() {
          navigate(-1);
        }
      }
    >
      <ArrowLeft02Icon />
    </Avatar>
  );
}
