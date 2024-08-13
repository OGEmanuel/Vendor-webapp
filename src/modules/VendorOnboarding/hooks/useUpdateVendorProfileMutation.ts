import { vendorApi } from '@/config/sdk';
import { UpdateVendorDTO } from '@/sdk/vendor';
import { nprogress } from '@mantine/nprogress';
import { useMutation } from '@tanstack/react-query';
import { useContext } from 'react';
import { OnboardingContext } from '../pages/VendorOnboarding';
import useActiveVendor from '@/hooks/useActiveVendor';

export default function useUpdateVendorProfileMutation() {
  const { reloadVendorSummary } = useActiveVendor();
 //const { id } = useLoggedInUser();
  const { next } = useContext(OnboardingContext);
  return useMutation({
    mutationFn: async ({ payload, vendorId }: { payload: UpdateVendorDTO; vendorId: string }) => {
      nprogress.start();
  
      const data = await vendorApi.vendorAdminControllerUpdateVendorProfile(vendorId, payload);
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
