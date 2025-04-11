// src/hooks/useClaim.ts
import { useState } from "react";
import { ethers } from "ethers";
import { connectEthereum } from "../utils/ethereum";

export const useClaim = () => {
  const [status, setStatus] = useState<string>("");

  const submitClaim = async (claim: string) => {
    try {
      const provider = await connectEthereum();
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        "Your_Smart_Contract_Address", 
        ["function submitClaim(string memory claimText) public"], 
        signer
      );
      await contract.submitClaim(claim);
      setStatus("Claim submitted successfully!");
    } catch (err) {
      setStatus("Failed to submit claim");
      console.error(err);
    }
  };

  return { submitClaim, status };
};
