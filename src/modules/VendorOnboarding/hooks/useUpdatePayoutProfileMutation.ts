import { vendorApi } from '@/config/sdk';
import useLoggedInUser from '@/hooks/useLoggedInUser';
import { UpdateVendorPayoutProfileDTO } from '@/sdk/vendor';
import { nprogress } from '@mantine/nprogress';
import { useMutation } from '@tanstack/react-query';
import { useContext } from 'react';
import { OnboardingContext } from '../pages/VendorOnboarding';
import useActiveVendor from '@/hooks/useActiveVendor';

export default function useUpdatePayoutProfileMutation() {
  const { reloadVendorSummary } = useActiveVendor();
  useLoggedInUser();
  const { next } = useContext(OnboardingContext);
  return useMutation({
    mutationFn: async ({
      payload,
      vendorId,
    }: {
      payload: UpdateVendorPayoutProfileDTO;
      vendorId: string;
    }) => {
      nprogress.start();
      return await vendorApi.vendorAdminControllerUpdateVendorPayoutProfile(vendorId, payload);
    },
    onError: (err) => {
      console.log(err);
      nprogress.reset();
    },
    onSuccess: () => {
      console.log('logged in user');
      next();
      reloadVendorSummary();
      nprogress.reset();
    },
  });
}
