// src/context/WalletContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface WalletContextType {
  address: string | null;
  connectWallet: () => Promise<void>;
}

const WalletContext = createContext<WalletContextType>({
  address: null,
  connectWallet: async () => {},
});

export const useWallet = () => useContext(WalletContext);

export const WalletProvider = ({ children }: { children: ReactNode }) => {
  const [address, setAddress] = useState<string | null>(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAddress(accounts[0]);
      } catch (err) {
        console.error('Error connecting wallet:', err);
      }
    } else {
      alert('Please install MetaMask to use this app');
    }
  };

  return (
    <WalletContext.Provider value={{ address, connectWallet }}>
      {children}
    </WalletContext.Provider>
  );
};
