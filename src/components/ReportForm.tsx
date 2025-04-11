import React, { useState } from "react";
import { useTranslation } from 'react-i18next';

const ReportForm: React.FC = () => {
  const [report, setReport] = useState("");
  const [status, setStatus] = useState("");
  const { t } = useTranslation(); // Destructure t from useTranslation

  const recordReport = async () => {
    setStatus("Recording report...");

    try {
      // Simulate reporting on-chain
      setTimeout(() => {
        // If report content is empty, simulate an error
        if (!report.trim()) {
          setStatus("Error: Report content cannot be empty.");
        } else {
          setStatus("Report successfully recorded on-chain.");
        }
      }, 2000);
    } catch (error) {
      console.error("Error recording report:", error);
      setStatus("Error: Failed to record report.");
    }
  };

  return (
    <div className="report">
      <h2>{t('recordReport')}</h2> {/* Will display in the selected language */}
      <textarea
        value={report}
        onChange={(e) => setReport(e.target.value)}
        placeholder="Enter report"
      />
      <button onClick={recordReport}>Record Report</button>
      {status && <p>{status}</p>} {/* Display the status message */}
    </div>
  );
};

export default ReportForm;
