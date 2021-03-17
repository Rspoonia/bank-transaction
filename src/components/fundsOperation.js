import React, { useState } from "react";
import { Button } from "react-bootstrap";

const AddFunds = ({ users, addBalanceHandler, activeTab }) => {
  const [selecctedUser, setSelectedUser] = useState();
  const [addNewBalance, setAddNewBalance] = useState();
  const selectUserBalance =
    users.filter((user) => user.userId === selecctedUser)[0]?.balance || 0;

  return (
    <>
      <div className="balance-wrapper">
        <span>Select user</span>
        <select
          onChange={(e) => {
            setSelectedUser(e.target.value);
          }}
        >
          <option value="" disabled selected>
            Select a user
          </option>
          {users.map((user) => (
            <option key={user.userId} value={user.userId}>
              {user.name}
            </option>
          ))}
        </select>
      </div>
      Amount
      <input
        type="number"
        placeholder="Enter amount"
        className="new-funds"
        value={addNewBalance}
        onChange={(e) => setAddNewBalance(e.target.value)}
        max={
          activeTab === "spend-funds"
            ? selectUserBalance
            : Number.MAX_SAFE_INTEGER
        }
      />
      <Button
        onClick={() =>
          addBalanceHandler(selecctedUser || users[0].userId, addNewBalance)
        }
      >
        {activeTab === "Add-funds" ? "Add Balance" : "Spend Amount"}
      </Button>
    </>
  );
};

export default AddFunds;
