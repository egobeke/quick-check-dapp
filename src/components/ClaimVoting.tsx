import React, { useState } from "react";
import { ethers } from "ethers";
import styles from "./ClaimVoting.module.css";

// Dummy ABI for illustration
const CONTRACT_ADDRESS = "0xYourContractAddressHere";
const CONTRACT_ABI = [
  {
    inputs: [
      { internalType: "uint256", name: "claimId", type: "uint256" },
      { internalType: "bool", name: "vote", type: "bool" },
    ],
    name: "voteOnClaim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

interface ClaimVotingProps {
  claimId: number;
}

const ClaimVoting: React.FC<ClaimVotingProps> = ({ claimId }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [voteStatus, setVoteStatus] = useState<string>("");

  const handleVote = async (vote: boolean) => {
    try {
      setLoading(true);
      setVoteStatus(""); // Reset vote status

      if (!claimId || claimId <= 0) {
        alert("Invalid Claim ID");
        return;
      }

      if (typeof window.ethereum === "undefined") {
        alert("Please install MetaMask!");
        return;
      }

      // Set up the Ethereum provider and signer
      const provider = new ethers.Web3Provider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

      // Trigger the voting transaction
      const transaction = await contract.voteOnClaim(claimId, vote);
      await transaction.wait(); // Wait for the transaction to be mined

      setVoteStatus(vote ? "Claim Verified!" : "Claim Rejected!");
    } catch (error: any) {
      console.error("Error voting on claim:", error);
      if (error.code === "INSUFFICIENT_FUNDS") {
        setVoteStatus("Insufficient funds to complete the transaction.");
      } else if (error.code === "USER_REJECTED") {
        setVoteStatus("Transaction rejected by user.");
      } else {
        setVoteStatus(error?.reason || "Error voting on claim. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.voteButtons}>
        <button
          onClick={() => handleVote(true)}
          disabled={loading}
          className={`${styles.voteButton} ${styles.verifyButton}`}
        >
          {loading ? "Verifying..." : "Verify Claim"}
        </button>
        <button
          onClick={() => handleVote(false)}
          disabled={loading}
          className={`${styles.voteButton} ${styles.rejectButton}`}
        >
          {loading ? "Rejecting..." : "Reject Claim"}
        </button>
      </div>
      {voteStatus && <p className={styles.voteStatus}>{voteStatus}</p>}
    </div>
  );
};

export default ClaimVoting;
