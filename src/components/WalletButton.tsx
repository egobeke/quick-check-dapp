import React from "react";
import { useWallet } from "../context/WalletContext";

const WalletButton: React.FC = () => {
  const { address, connectWallet, disconnectWallet } = useWallet();

  return (
    <div>
      {address ? (
        <>
          <p>Connected: {address}</p>
          <button onClick={disconnectWallet}>Disconnect Wallet</button>
        </>
      ) : (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}
    </div>
  );
};

export default WalletButton;
