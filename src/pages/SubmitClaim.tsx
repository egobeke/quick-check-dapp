// src/pages/SubmitClaim.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import ClaimForm from '../components/ClaimForm';
import { useClaim } from "../hooks/useClaim";

const SubmitClaim: React.FC = () => {
  const { t } = useTranslation();
  const { submitClaim, status } = useClaim();

  return (
    <div className="submit-claim">
      <h1>{t("submitClaim")}</h1>
      <ClaimForm onSubmit={submitClaim} buttonText={t("submitClaim")} />
      {status && <p>{status}</p>}
    </div>
  );
};

export default SubmitClaim;
