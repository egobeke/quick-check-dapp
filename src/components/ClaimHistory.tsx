// src/components/ClaimHistory.tsx
import React, { useState } from "react";

const ClaimHistory: React.FC = () => {
  const [claims, setClaims] = useState([
    { id: 1, claimText: "Vaccines cause autism", status: "Unverified" },
    { id: 2, claimText: "COVID-19 is a hoax", status: "Verified" },
  ]);

  return (
    <div className="claim-history">
      <h2>viewClaims</h2>
      <ul>
        {claims.map((claim) => (
          <li key={claim.id}>
            <strong>{claim.claimText}</strong> - {claim.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClaimHistory;
