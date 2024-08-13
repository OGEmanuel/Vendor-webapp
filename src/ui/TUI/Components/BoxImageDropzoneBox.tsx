import { useImageUploadMutation } from '@/hooks/useFileMutation';
import { AspectRatio, Stack } from '@mantine/core';
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { FileUploadIcon } from 'hugeicons-react';

export default function BoxedImageDropzoneBox(
  props: Partial<DropzoneProps> & { onUploaded: (url: string) => void; url?: string }
) {
  const { mutateAsync } = useImageUploadMutation();

  return (
    <Dropzone
      onDrop={async (files) => {
        console.log('accepted files', files);
        if (files[0]) {
          const url = await mutateAsync(files[0]);
          props.onUploaded(url);
        }
      }}
      onReject={(files) => console.log('rejected files', files)}
      maxSize={1 * 1024 ** 2}
      p={"0px"}
      style={{ borderRadius: '1000px', overflow: 'hidden' }}
      accept={[...IMAGE_MIME_TYPE]}
      {...props}
    >
      <AspectRatio
        ratio={1 / 1}
        style={{
          backgroundImage: `url(${props.url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Stack
          h={'100%'}
          w={'100%'}
          justify="center"
          align="center"
          ta={'center'}
          gap="xs"
          style={{ pointerEvents: 'none' }}
        >
          <Dropzone.Idle>
            <FileUploadIcon size={30} style={{ color: 'var(--mantine-color-gray-6)' }} />
          </Dropzone.Idle>
        </Stack>
      </AspectRatio>
    </Dropzone>
  );
}
