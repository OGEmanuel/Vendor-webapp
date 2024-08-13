import { FileButton, Button } from '@mantine/core';
import { useFileUploadMutation } from '@/hooks/useFileMutation';

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
        if (file) {
          const url = await mutateAsync(file);
          onUploaded(url);
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
