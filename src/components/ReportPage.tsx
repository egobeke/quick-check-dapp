import React, { useState } from 'react';
import styles from '../styles/ReportPage.module.css';

const ReportPage: React.FC = () => {
  const [link, setLink] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted report:', { link, description });

    // Reset fields
    setLink('');
    setDescription('');
  };

  return (
    <section className={styles.report}>
      <h2>Report Misinformation</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="link">Link to claim (optional):</label>
        <input
          id="link"
          type="text"
          placeholder="https://..."
          value={link}
          onChange={(e) => setLink(e.target.value)}
          className={styles.input}
        />

        <label htmlFor="description">What’s wrong with the claim?</label>
        <textarea
          id="description"
          placeholder="Describe the misinformation..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={styles.textarea}
          required
        ></textarea>

        <button type="submit" className={styles.button}>Submit Report</button>
      </form>
    </section>
  );
};

export default ReportPage;
