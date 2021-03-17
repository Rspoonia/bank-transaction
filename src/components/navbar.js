import React from "react";

const Navbar = ({ activeTab, setActiveTab }) => {
  return (
    <div className="nav-menu">
      <span
        onClick={() => setActiveTab("All-users")}
        className={activeTab === "All-users" ? "active-tab" : ""}
      >
        All wallets
      </span>
      <span
        onClick={() => setActiveTab("New-user")}
        className={activeTab === "New-user" ? "active-tab" : ""}
      >
        New User
      </span>
      <span
        onClick={() => setActiveTab("Balance-check")}
        className={activeTab === "Balance-check" ? "active-tab" : ""}
      >
        Check Balance
      </span>
      <span
        onClick={() => setActiveTab("Add-funds")}
        className={activeTab === "Add-funds" ? "active-tab" : ""}
      >
        Add Funds
      </span>
      <span
        onClick={() => setActiveTab("spend-funds")}
        className={activeTab === "spend-funds" ? "active-tab" : ""}
      >
        Spend Funds
      </span>
      <span
        onClick={() => setActiveTab("All-transaction")}
        className={activeTab === "All-transaction" ? "active-tab" : ""}
      >
        All Transaction
      </span>
    </div>
  );
};

export default Navbar;
