import React, { createContext, useState, useContext, ReactNode } from "react";
import { ethers } from "ethers";

// Type definition for WalletContext
interface WalletContextType {
  address: string | null;
  connectWallet: () => void;
}

// Props for WalletProvider, specifying that it accepts children
interface WalletProviderProps {
  children: ReactNode;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const WalletProvider: React.FC<WalletProviderProps> = ({ children }) => {
  const [address, setAddress] = useState<string | null>(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      setAddress(accounts[0]);
    } else {
      alert("Please install MetaMask to connect your wallet.");
    }
  };

  return (
    <WalletContext.Provider value={{ address, connectWallet }}>
      {children}
    </WalletContext.Provider>
  );
};

// Custom Hook
export const useWallet = () => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error("useWallet must be used within a WalletProvider");
  }
  return context;
};
