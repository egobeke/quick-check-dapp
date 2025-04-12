import { createContext, useContext } from 'react';

export interface WalletContextType {
  address: string | null;
  connectWallet: () => Promise<void>;
}

// 👇 This is the named export Vite is complaining about
export const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const useWallet = (): WalletContextType => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
};
