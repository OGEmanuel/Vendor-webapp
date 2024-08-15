import { vendorApi } from '@/config/sdk';
import useLoggedInUser from '@/hooks/useLoggedInUser';
import useVendorInit from '@/hooks/useVendorInit.ts';
import { CreateVendorProfileDTO } from '@/sdk/vendor';
import { nprogress } from '@mantine/nprogress';
import { useMutation } from '@tanstack/react-query';
import { useContext } from 'react';
import { OnboardingContext } from '../pages/VendorOnboarding';
import useActiveVendor from '@/hooks/useActiveVendor';

export default function useCreateVendorProfileMutation() {
  const { init } = useVendorInit();
  const { reloadVendorSummary } = useActiveVendor();
  const { id } = useLoggedInUser();
  const { next } = useContext(OnboardingContext);
  return useMutation({
    mutationFn: async (payload: CreateVendorProfileDTO) => {
      nprogress.start();
      //@ts-ignore
      payload.accountId = id;
      const data = await vendorApi.vendorAdminControllerCreateVendorProfile(payload);
      return data;
    },
    onError: (err) => {
      console.log(err);
      nprogress.reset();
    },
    onSuccess: async () => {
      // init vendor credentials
      await init();
      // reload vendor summary with active credentials
      await reloadVendorSummary();
      next();
      nprogress.reset();
    },
  });
}
