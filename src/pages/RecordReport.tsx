// src/pages/RecordReport.tsx
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ethers } from "ethers";
import { useWallet } from "../context/WalletContext";

const RecordReport: React.FC = () => {
  const { t } = useTranslation();
  const { address } = useWallet();
  const [report, setReport] = useState<string>("");

  const handleRecordReport = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        "Your_Smart_Contract_Address", 
        ["function recordReport(string memory reportText) public"], 
        signer
      );
      const tx = await contract.recordReport(report);
      alert("Report recorded successfully!");
    } catch (err) {
      alert("Failed to record report");
      console.error(err);
    }
  };

  return (
    <div className="record-report">
      <h1>{t("recordReport")}</h1>
      <input 
        type="text" 
        value={report}
        onChange={(e) => setReport(e.target.value)} 
        placeholder="Enter your report"
      />
      <button onClick={handleRecordReport}>{t("recordReport")}</button>
    </div>
  );
};

export default RecordReport;
