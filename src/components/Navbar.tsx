// src/components/Navbar.tsx
import React from 'react';
import styles from '../styles/Navbar.module.css';
import { useWallet } from '../context/WalletContext';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const { address, connectWallet } = useWallet();

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        Truth<span>Check</span>
      </Link>

      <ul className={styles.navLinks}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/quicktool">Quick Tool</Link></li>
        <li className={styles.language}>English ▼</li>
      </ul>

      {address ? (
        <span className={styles.walletAddress}>
          {address.slice(0, 6)}...{address.slice(-4)}
        </span>
      ) : (
        <button className={styles.walletButton} onClick={connectWallet}>
          👜 Connect Your Wallet
        </button>
      )}
    </nav>
  );
};

export default Navbar;
