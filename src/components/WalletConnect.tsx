// src/components/WalletConnect.tsx
import React from "react";
import { useWallet } from "../context/WalletContext";

const WalletConnect: React.FC = () => {
  const { address, connectWallet } = useWallet();

  return (
    <div className="wallet-connect">
      {address ? (
        <p>Connected: {address}</p>
      ) : (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}
    </div>
  );
};

export default WalletConnect;
