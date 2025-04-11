// src/pages/Home.tsx
import React from "react";
import { Link } from "react-router-dom";
import { useWallet } from "../context/WalletContext";
import { useTranslation } from "react-i18next";
import WalletConnect from "../components/WalletConnect";

const Home: React.FC = () => {
  const { t } = useTranslation();
  const { address } = useWallet();

  return (
    <div className="home">
      <h1>{t("welcome")}</h1>
      <WalletConnect />
      {address && (
        <div>
          <h2>{t("submitClaim")}</h2>
          <Link to="/submit-claim">
            <button>{t("submitClaim")}</button>
          </Link>
          <h2>{t("verifyClaim")}</h2>
          <Link to="/verify-claim">
            <button>{t("verifyClaim")}</button>
          </Link>
          <h2>{t("viewClaims")}</h2>
          <Link to="/claim-history">
            <button>{t("viewClaims")}</button>
          </Link>
          <h2>{t("recordReport")}</h2>
          <Link to="/record-report">
            <button>{t("recordReport")}</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;
