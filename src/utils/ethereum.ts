// src/utils/ethereum.ts

import { ethers } from "ethers";

export const connectEthereum = async () => {
  if (window.ethereum) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    return provider;
  }
  throw new Error("Ethereum wallet not found.");
};
