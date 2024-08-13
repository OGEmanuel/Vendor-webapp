import { outletApi } from '@/config/sdk';
import { UpdateOutletDTO } from '@/sdk/vendor';
import { nprogress } from '@mantine/nprogress';
import { useMutation } from '@tanstack/react-query';
import { useContext } from 'react';
import { OnboardingContext } from '../pages/VendorOnboarding';
import useActiveVendor from '@/hooks/useActiveVendor';

export default function useUpdateDefaultOutletMutation() {
  const { reloadVendorSummary } = useActiveVendor();
  //const { id } = useLoggedInUser();
  const { next } = useContext(OnboardingContext);
  return useMutation({
    mutationFn: async ({ payload, outletId }: { payload: UpdateOutletDTO; outletId: string }) => {
      nprogress.start();

      const data = await outletApi.vendorOutletAdminControllerUpdateOutlet(outletId, payload);
      reloadVendorSummary();
      return data;
    },
    onError: (err) => {
      console.log(err);
      nprogress.reset();
    },
    onSuccess: () => {
      console.log('logged in user');
      next();
      nprogress.reset();
    },
  });
}
