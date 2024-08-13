import { MemberCredential } from '@/sdk/vendor';
import { useLocalStorage } from '@mantine/hooks';
import React, { createContext, useContext } from 'react';

type Props = {
  authToken: string;
  setAuthToken: (str: string) => void;
  activeVendorCredential: MemberCredential;
  setActiveVendorCredentials: (activeVendorCredential: MemberCredential) => void;
};

const TUIAppContext = createContext<Props>({
  authToken: '',
  setAuthToken: () => '',
  activeVendorCredential: {} as MemberCredential,
  setActiveVendorCredentials: () => {},
});

export const TUIAppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [authToken, setAuthToken] = useLocalStorage<string>({
    key: 'authToken',
  });

  const [activeVendorCredential, setActiveVendorCredentials] = useLocalStorage<MemberCredential>({
    key: 'vendorCredentials',
    defaultValue: undefined,
    deserialize(value) {
      return JSON.parse(value ?? '');
    },
  });

  return (
    <TUIAppContext.Provider
      value={{
        authToken,
        setAuthToken,
        activeVendorCredential: activeVendorCredential,
        setActiveVendorCredentials: (credentials: MemberCredential) => {
          setActiveVendorCredentials(credentials);
        },
      }}
    >
      {children}
    </TUIAppContext.Provider>
  );
};

export const useTUIAppContext = () => {
  const context = useContext(TUIAppContext);
  if (!context) {
    throw new Error('useDashboardContext must be used within a AppContextProvider');
  }
  return context;
};
