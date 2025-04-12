// src/pages/ConnectWallet.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useWallet } from '../context/WalletContext';
import styles from '../styles/ConnectWallet.module.css';

const ConnectWallet: React.FC = () => {
  const { address, connectWallet } = useWallet();
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/dashboard');
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2>Wallet Connected ✅</h2>
        {address ? (
          <p className={styles.address}>{address}</p>
        ) : (
          <button className={styles.connectBtn} onClick={connectWallet}>
            Connect Wallet
          </button>
        )}
        <button
          className={styles.continueBtn}
          onClick={handleContinue}
          disabled={!address}
        >
          Continue to Dashboard
        </button>
      </div>
    </div>
  );
};

export default ConnectWallet;
