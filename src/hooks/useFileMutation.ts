import { uploadApi } from '@/config/sdk';
import { nprogress } from '@mantine/nprogress';
import { useMutation } from '@tanstack/react-query';

export function useImageUploadMutation() {
  return useMutation({
    mutationFn: async (file: File) => {
      const formData = new FormData();
      formData.set('file', file as File);
      try {
        nprogress.start();
        const { data } = await uploadApi.imageUploadControllerUploadImage(undefined, undefined, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          data: formData,
        });
        console.log(data);
        nprogress.reset();
        return data.url;
      } catch (error) {
        nprogress.reset();
        console.error('Error uploading file:', error);
      }
    },
  });
}

export function useFileUploadMutation() {
  return useMutation({
    mutationFn: async (file: File) => {
      const formData = new FormData();
      formData.set('file', file as File);
      try {
        nprogress.start();
        const { data } = await uploadApi.imageUploadControllerUploadFile({
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          data: formData,
        });
        console.log(data);
        nprogress.reset();
        return data.url;
      } catch (error) {
        nprogress.reset();
        console.error('Error uploading file:', error);
      }
    },
  });
}
