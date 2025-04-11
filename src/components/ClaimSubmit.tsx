// src/components/ClaimSubmit.tsx
import React, { useState } from "react";

const ClaimSubmit: React.FC = () => {
  const [claim, setClaim] = useState("");
  const [status, setStatus] = useState("");

  const submitClaim = async () => {
    // Here you would integrate Ether.js to submit the claim to the smart contract
    // Example of submitting to blockchain and getting status back
    setStatus("Submitting claim...");

    // Simulate a claim submission and verification process
    setTimeout(() => {
      setStatus("Claim successfully submitted. Awaiting verification.");
    }, 2000);
  };

  return (
    <div className="claim-submit">
      <h2>submitClaim</h2>
      <textarea
        value={claim}
        onChange={(e) => setClaim(e.target.value)}
        placeholder="Enter claim"
      />
      <button onClick={submitClaim}>Submit Claim</button>
      {status && <p>{status}</p>}
    </div>
  );
};

export default ClaimSubmit;
