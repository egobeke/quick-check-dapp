// src/hooks/useEthereum.ts
import { useState, useEffect } from "react";
import { ethers } from "ethers";

export const useEthereum = () => {
  const [provider, setProvider] = useState<ethers.providers.Web3Provider | null>(null);

  useEffect(() => {
    const loadProvider = () => {
      if (window.ethereum) {
        const newProvider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(newProvider);
      } else {
        alert("Please install MetaMask!");
      }
    };
    loadProvider();
  }, []);

  return provider;
};
