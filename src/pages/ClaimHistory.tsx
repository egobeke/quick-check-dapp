// src/pages/ClaimHistory.tsx
import React, { useState, useEffect } from "react";
import { useWallet } from "../context/WalletContext";
import { ethers } from "ethers";

const ClaimHistory: React.FC = () => {
  const { address } = useWallet();
  const [claims, setClaims] = useState<any[]>([]);

  useEffect(() => {
    const fetchClaims = async () => {
      if (!address) return;
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const contract = new ethers.Contract(
          "Your_Smart_Contract_Address", 
          ["function getClaims(address user) public view returns (string[])"], 
          provider
        );
        const userClaims = await contract.getClaims(address);
        setClaims(userClaims);
      } catch (err) {
        console.error("Failed to fetch claims", err);
      }
    };

    fetchClaims();
  }, [address]);

  return (
    <div className="claim-history">
      <h1>Your Claims</h1>
      {claims.length === 0 ? (
        <p>No claims submitted yet.</p>
      ) : (
        <ul>
          {claims.map((claim, index) => (
            <li key={index}>{claim}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ClaimHistory;
