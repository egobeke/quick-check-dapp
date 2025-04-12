import React, { useState, useEffect } from 'react';
import { WalletContext } from './WalletContext';

export const WalletProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [address, setAddress] = useState<string | null>(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        }) as string[];
        setAddress(accounts[0]);
      } catch (err) {
        console.error('Wallet connection error:', err);
      }
    } else {
      alert('MetaMask is not installed');
    }
  };

  useEffect(() => {
    const checkConnection = async () => {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: 'eth_accounts',
        }) as string[];
        if (accounts.length > 0) setAddress(accounts[0]);
      }
    };
    checkConnection();
  }, []);

  return (
    <WalletContext.Provider value={{ address, connectWallet }}>
      {children}
    </WalletContext.Provider>
  );
};
