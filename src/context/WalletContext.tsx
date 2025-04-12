// src/context/WalletContext.ts
import { createContext } from 'react';

export interface WalletContextType {
  address: string | null;
  connectWallet: () => Promise<void>;
}

export const WalletContext = createContext<WalletContextType>({
  address: null,
  connectWallet: async () => {},
});
