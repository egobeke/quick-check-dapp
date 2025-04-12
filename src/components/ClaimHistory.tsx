import React from 'react';
import styles from '../styles/ClaimHistory.module.css';

interface Claim {
  id: number;
  text: string;
  status: 'Verified' | 'False' | 'Pending';
  timestamp: string;
}

const dummyClaims: Claim[] = [
  {
    id: 1,
    text: "The new Naira note contains a hidden tracker.",
    status: 'False',
    timestamp: '2025-04-10 14:32',
  },
  {
    id: 2,
    text: "FG has subsidized electricity bills this quarter.",
    status: 'Verified',
    timestamp: '2025-04-09 09:12',
  },
  {
    id: 3,
    text: "WhatsApp will stop working in Nigeria next week.",
    status: 'Pending',
    timestamp: '2025-04-11 17:20',
  },
];

const ClaimHistory: React.FC = () => {
  return (
    <section className={styles.claimHistory}>
      <h2>Your Claim History</h2>
      <ul className={styles.list}>
        {dummyClaims.map((claim) => (
          <li key={claim.id} className={styles.claimCard}>
            <p className={styles.claimText}>{claim.text}</p>
            <div className={styles.details}>
              <span className={`${styles.status} ${styles[claim.status.toLowerCase()]}`}>
                {claim.status}
              </span>
              <span className={styles.timestamp}>{claim.timestamp}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ClaimHistory;
