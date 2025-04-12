// src/components/Navbar.tsx
import React from 'react';
import styles from '../styles/Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Truth<span>Check</span></div>

      <ul className={styles.navLinks}>
        <li>Home</li>
        <li>Dashboard</li>
        <li className={styles.language}>English ▼</li>
      </ul>

      <button className={styles.walletButton}>
        👜 Connect Your Wallet
      </button>
    </nav>
  );
};

export default Navbar;
