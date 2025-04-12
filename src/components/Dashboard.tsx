// src/components/Dashboard.tsx
import React from 'react';
import { useWallet } from '../hooks/useWallet';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Dashboard.module.css';


const Dashboard: React.FC = () => {
  const { address } = useWallet();
  const navigate = useNavigate();

  const cards = [
    { title: 'Submit Claim', route: '/claim' },
    { title: 'Claim History', route: '/history' },
    { title: 'Record Report', route: '/report' },
    { title: 'Quick Tool', route: '/quick-tool' },
  ];

  return (
    <div className={styles.dashboard}>
      <h1>Welcome to Your Dashboard</h1>
      <p className={styles.address}>Connected: {address}</p>

      <div className={styles.grid}>
        {cards.map((card) => (
          <div
            key={card.title}
            className={styles.card}
            onClick={() => navigate(card.route)}
          >
            {card.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
