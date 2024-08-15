import { queryClient } from '@/config/queryClient';
import { outletApi } from '@/config/sdk';
import { UpdateOutletDTO } from '@/sdk/vendor';
import { nprogress } from '@mantine/nprogress';
import { useMutation } from '@tanstack/react-query';

export default function useUpdateOutletMutation() {
  return useMutation({
    mutationFn: async ({ payload, outletId }: { payload: UpdateOutletDTO; outletId: string }) => {
      nprogress.start();
      const data = await outletApi.vendorOutletAdminControllerUpdateOutlet(outletId, payload);
      queryClient.invalidateQueries({ queryKey: [outletId ?? ''] });
      return data;
    },
    onError: (err) => {
      console.log(err);
      nprogress.reset();
    },
    onSuccess: () => {
      console.log('logged in user');
      nprogress.reset();
    },
  });
}

export function useUpdateOutletAsClosedMutation() {
  return useMutation({
    mutationFn: async ({ payload, outletId }: { payload: UpdateOutletDTO; outletId: string }) => {
      nprogress.start();
      const data = await outletApi.vendorOutletAdminControllerUpdateOutlet(outletId, payload);
      queryClient.invalidateQueries({ queryKey: [outletId ?? ''] });
      queryClient.invalidateQueries({ queryKey: ['get-outlets'] });
      return data;
    },
    onError: (err) => {
      console.log(err);
      nprogress.reset();
    },
    onSuccess: () => {
      console.log('logged in user');

      nprogress.reset();
    },
  });
}
