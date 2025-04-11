import React, { useState } from 'react';

interface ClaimFormProps {
  onSubmit: (claim: string) => void;
  buttonText: string;
}

const ClaimForm: React.FC<ClaimFormProps> = ({ onSubmit, buttonText }) => {
  const [claim, setClaim] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!claim.trim()) {
      setError("Claim cannot be empty");
      return;
    }
    setError("");  // Clear any previous error
    onSubmit(claim);
    setClaim("");  // Clear the input field after submitting
  };

  return (
    <form onSubmit={handleSubmit} className="claim-form">
      <label htmlFor="claim">{buttonText}</label>
      <input
        type="text"
        id="claim"
        value={claim}
        onChange={(e) => setClaim(e.target.value)}
        placeholder="Enter claim details"
      />
      
      {error && <p className="error">{error}</p>} {/* Display error if there is one */}
      <button type="submit">{buttonText}</button>
    </form>
  );
};

export default ClaimForm;
