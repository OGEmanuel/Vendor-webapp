import useLocalStorage from '@/hooks/useLocalStorage';
import React, { createContext, useContext } from 'react';

type Props = {
  authToken: string;
  setAuthToken: (str: string) => void;
};

const TUIAppContext = createContext<Props>({ authToken: '', setAuthToken: () => '' });

export const TUIAppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [authToken, setAuthToken] = useLocalStorage('authToken', undefined, false);
  return (
    <TUIAppContext.Provider value={{ authToken, setAuthToken }}>{children}</TUIAppContext.Provider>
  );
};

export const useTUIAppContext = () => {
  const context = useContext(TUIAppContext);
  if (!context) {
    throw new Error('useDashboardContext must be used within a AppContextProvider');
  }
  return context;
};
