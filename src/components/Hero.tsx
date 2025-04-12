// src/components/Hero.tsx
import React from 'react';
import styles from '../styles/Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>
          Quickly Verify News,<br />
          Images And Claims
        </h1>
        <p>
          A simple tool for Nigerians to check the authenticity<br />
          of any information.
        </p>

        <div className={styles.form}>
          <input
            type="text"
            placeholder="Paste a news claim or URL"
            className={styles.input}
          />
          <button className={styles.button}>Verify Now</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
