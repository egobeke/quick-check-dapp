import React from 'react';
import styles from '../styles/ConnectWallet.module.css';
import { useWallet } from '../context/WalletContext';

const ConnectWallet: React.FC = () => {
  const { address, connectWallet } = useWallet();

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h2>Connect Your Wallet</h2>
        <p>To proceed, please connect your Ethereum wallet.</p>
        <button onClick={connectWallet} className={styles.button}>
          🦊 Connect with MetaMask
        </button>
        {address && (
          <p className={styles.address}>Connected: {address}</p>
        )}
      </div>
    </div>
  );
};

export default ConnectWallet;
