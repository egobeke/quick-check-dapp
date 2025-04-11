import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useTranslation } from "react-i18next";
import WalletConnect from "./components/WalletConnect";
import ClaimSubmit from "./components/ClaimSubmit";
import ClaimVerification from "./components/ClaimVerification";
import ClaimHistory from "./components/ClaimHistory";
import ReportForm from "./components/ReportForm";
import "./i18n"; // Import i18n config
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <WalletConnect />
        <Switch>
          <Route exact path="/submit-claim" component={ClaimSubmit} />
          <Route exact path="/verify-claim" component={ClaimVerification} />
          <Route exact path="/claim-history" component={ClaimHistory} />
          <Route exact path="/record-report" component={ReportForm} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
