import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing'; 
import Dashboard from './components/Dashboard';
import ConnectWallet from './pages/ConnectWallet';
import ConnectWallet2 from './pages/ConnectWallet2';
import ClaimHistory from './components/ClaimHistory';
import ReportPage from './components/ReportPage';

import QuickTool from './pages/QuickTool';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/connect-wallet" element={<ConnectWallet />} />
        <Route path="/connect-wallet2" element={<ConnectWallet2 />} />
        <Route path="/claims" element={<ClaimHistory />} />
        <Route path="/report" element={<ReportPage />} />
        {/* <Route path="/claim" element={<Claim />} />
        <Route path="/history" element={<History />} /> */}
        <Route path="/quick-tool" element={<QuickTool />} />
      </Routes>
    </Router>
  );
}

export default App;
