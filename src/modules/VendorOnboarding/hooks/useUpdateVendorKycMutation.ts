import { vendorApi } from '@/config/sdk';
import useLoggedInUser from '@/hooks/useLoggedInUser';
import { UpdateVendorKYCDTO } from '@/sdk/vendor';
import { nprogress } from '@mantine/nprogress';
import { useMutation } from '@tanstack/react-query';
import { useContext } from 'react';
import { OnboardingContext } from '../pages/VendorOnboarding';
import useActiveVendor from '@/hooks/useActiveVendor';

export default function useUpdateVendorKycMutation() {
  const { reloadVendorSummary } = useActiveVendor();
  useLoggedInUser();
  const { next } = useContext(OnboardingContext);
  return useMutation({
    mutationFn: async ({
      payload,
      vendorId,
    }: {
      payload: UpdateVendorKYCDTO;
      vendorId: string;
    }) => {
      nprogress.start();
      const res = await vendorApi.vendorAdminControllerUpdateVendorKYC(vendorId, payload);
      console.log(res);
      return res;
    },
    onError: (err) => {
      console.log(err);
      nprogress.reset();
    },
    onSuccess: () => {
      console.log('logged in user');
      reloadVendorSummary();
      next();
      nprogress.reset();
    },
  });
}
