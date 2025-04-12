// src/pages/Claim.tsx
import React, { useState } from 'react';
import styles from '../styles/Claim.module.css';
import { useWallet } from '../context/WalletContext';

const Claim: React.FC = () => {
  const { address } = useWallet();
  const [claim, setClaim] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle');

  const handleSubmit = async () => {
    if (!claim.trim()) return;

    setStatus('submitting');
    try {
      // Simulate blockchain interaction here
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setStatus('submitted');
    } catch (error) {
      console.error(error);
      setStatus('idle');
    }
  };

  return (
    <div className={styles.claimPage}>
      <h1>Submit a Claim</h1>
      <p className={styles.address}>Connected: {address}</p>

      <textarea
        className={styles.input}
        placeholder="Enter the claim you want to verify"
        value={claim}
        onChange={(e) => setClaim(e.target.value)}
      />

      <button className={styles.button} onClick={handleSubmit} disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Submitting...' : 'Submit Claim'}
      </button>

      {status === 'submitted' && <p className={styles.success}>✅ Claim submitted for verification.</p>}
    </div>
  );
};

export default Claim;
