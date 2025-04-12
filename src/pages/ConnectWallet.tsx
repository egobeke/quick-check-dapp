import React, { useState } from 'react';
import styles from '../styles/ConnectWallet.module.css';
import { ethers } from 'ethers';

const ConnectWallet: React.FC = () => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  const connectWallet = async () => {
    if ((window as any).ethereum) {
      try {
        const provider = new ethers.BrowserProvider((window as any).ethereum);
        const accounts = await provider.send('eth_requestAccounts', []);
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.error('Connection error:', error);
      }
    } else {
      alert('MetaMask not found. Please install it.');
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h2>Connect Your Wallet</h2>
        <p>To proceed, please connect your Ethereum wallet.</p>
        <button onClick={connectWallet} className={styles.button}>
          🦊 Connect with MetaMask
        </button>
        {walletAddress && (
          <p className={styles.address}>Connected: {walletAddress}</p>
        )}
      </div>
    </div>
  );
};

export default ConnectWallet;
