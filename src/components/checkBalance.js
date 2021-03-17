import React, { useState } from "react";
import { Button } from "react-bootstrap";

const CheckBalance = ({ users }) => {
  const [selectedUserId, setSelectedUser] = useState();
  const [showBalance, setShowBalance] = useState(false);

  const selectedUser = users.filter((user) => user.userId === selectedUserId);

  return (
    <>
      <div className="balance-wrapper">
        <span>select user</span>
        <select
          onChange={(e) => {
            setSelectedUser(e.target.value);
            setShowBalance(false);
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
      <Button onClick={() => setShowBalance(true)} disabled={!selectedUserId}>
        Check Balance
      </Button>
      {showBalance && (
        <div className="user-details">
          <div>User name: {selectedUser[0].name}</div>
          <div>Available Balance is: {selectedUser[0].balance}</div>
        </div>
      )}
    </>
  );
};

export default CheckBalance;
