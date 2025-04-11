// src/pages/VerifyClaim.tsx
import React, { useState } from 'react';
import ClaimForm from '../components/ClaimForm';

const VerifyClaim: React.FC = () => {
  const [claimId, setClaimId] = useState<string>("");

  const handleVerify = (claim: string) => {
    setClaimId(claim);
    // Call your verification logic here
  };

  return (
    <div className="verify-claim">
      <h1>Verify Claim</h1>
      <ClaimForm onSubmit={handleVerify} buttonText="Verify Claim" />
      {/* Display verification status based on claimId */}
    </div>
  );
};

export default VerifyClaim;
