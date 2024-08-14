import { queryClient } from '@/config/queryClient';
import { outletApi } from '@/config/sdk';
import { CreateOutletDTO } from '@/sdk/vendor';
import { useTUIAppContext } from '@/ui/TUI/Templates/TUIAppContext';
import { nprogress } from '@mantine/nprogress';
import { useMutation } from '@tanstack/react-query';

export default function useNewOutletMutation() {
  const { activeVendorCredential } = useTUIAppContext();
  return useMutation({
    mutationFn: async ({ payload }: { payload: CreateOutletDTO }) => {
      payload.vendorId = activeVendorCredential.vendorId;
      nprogress.start();
      const data = await outletApi.vendorOutletAdminControllerCreateOutlet(payload);
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
