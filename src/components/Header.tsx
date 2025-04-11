// src/components/Header.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();

  // Handle language change
  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <header className="header">
      <div className="logo">
        <h1>{t("welcome")}</h1> {/* Will display in the selected language */}
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">{t("home")}</Link> {/* Home link */}
          </li>
          <li>
            <Link to="/submit-claim">{t("submitClaim")}</Link> {/* Submit claim link */}
          </li>
          <li>
            <Link to="/verify-claim">{t("verifyClaim")}</Link> {/* Verify claim link */}
          </li>
          <li>
            <Link to="/claim-history">{t("claimHistory")}</Link> {/* Claim history link */}
          </li>
          <li>
            <Link to="/report-issue">{t("reportIssue")}</Link> {/* Report issue link */}
          </li>
        </ul>
      </nav>
      <div className="language-selector">
        <label htmlFor="language">{t("selectLanguage")}</label>
        <select onChange={handleLanguageChange} defaultValue={i18n.language}>
          <option value="en">English</option>
          <option value="yor">Yoruba</option>
          <option value="ig">Igbo</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
