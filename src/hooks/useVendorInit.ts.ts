import { useTUIAppContext } from '@/ui/TUI/Templates/TUIAppContext';
import { useNavigate } from 'react-router-dom';
import useMemberShipCredentialsMutation from './mutations/useMembershipCredentialsMutation';

export default function useVendorInit() {
  const { mutate } = useMemberShipCredentialsMutation();
  const { setActiveVendorCredentials } = useTUIAppContext();
 
  const navigate = useNavigate();
  async function init() {
    mutate(undefined, {
      onSuccess(data) {
        if (data?.data) {
          if (data?.data.length >= 1) {
            let credentials = data.data[0];
            setActiveVendorCredentials(credentials);
          } else {
            navigate('/onboarding');
          }
        }
      },
    });
  }

  return {
    init,
  };
}
