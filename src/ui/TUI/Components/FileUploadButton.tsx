import { FileButton, Button } from '@mantine/core';
import { useFileUploadMutation } from '@/hooks/useFileMutation';
import { showNotification } from '@mantine/notifications';

export default function FileUploadButton({
  label,
  onUploaded,
}: {
  onUploaded: (url: string) => void;
  label: string;
}) {
  const { mutateAsync } = useFileUploadMutation();
  return (
    <FileButton
      accept="image/png,image/jpeg"
      onChange={async (file) => {
        if (file && file.size <= 1024 * 1024) {
          const url = await mutateAsync(file);
          onUploaded(url);
        } else {
          showNotification({ message: 'File size must be 1MB or less.' });
        }
      }}
    >
      {(props) => (
        <Button variant="default" {...props}>
          {label}
        </Button>
      )}
    </FileButton>
  );
}
