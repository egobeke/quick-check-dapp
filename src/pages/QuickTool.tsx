import React, { useState } from 'react';
import styles from '../styles/QuickTool.module.css';

const QuickTool: React.FC = () => {
  const [claim, setClaim] = useState('');
  const [result, setResult] = useState<'verified' | 'fake' | null>(null);

  const handleVerify = () => {
    // Placeholder verification logic
    if (!claim.trim()) return;

    // Simulate result for now (this will be replaced with real Chainlink/contract call)
    const isFake = claim.toLowerCase().includes('fake');
    setResult(isFake ? 'fake' : 'verified');
  };

  const handleTryAgain = () => {
    setClaim('');
    setResult(null);
  };

  return (
    <div className={styles.wrapper}>
      {!result ? (
        <div className={styles.inputView}>
          <h2>Quick Check</h2>
          <p>Paste a news claim or URL below</p>
          <textarea
            value={claim}
            onChange={(e) => setClaim(e.target.value)}
            placeholder="e.g., 'The government declared Monday a public holiday...'"
            className={styles.textarea}
          />
          <button className={styles.verifyButton} onClick={handleVerify}>
            Verify Now
          </button>
        </div>
      ) : (
        <div className={styles.resultView}>
          <h2>Result</h2>
          <p className={result === 'verified' ? styles.verified : styles.fake}>
            {result === 'verified'
              ? '✅ This claim appears to be TRUE based on available data.'
              : '❌ This claim appears to be FALSE or misleading.'}
          </p>
          <button className={styles.tryAgain} onClick={handleTryAgain}>
            Try Another
          </button>
        </div>
      )}
    </div>
  );
};

export default QuickTool;
