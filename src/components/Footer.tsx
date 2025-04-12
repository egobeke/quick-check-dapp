// src/components/Footer.tsx
import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <a href="#">Privacy policy</a>
        <a href="#">Report issue</a>
        <a href="#">About TruthCheck</a>
      </div>
      <p className={styles.tagline}>
        Powered by Trusted sources and Verified data
      </p>
    </footer>
  );
};

export default Footer;
