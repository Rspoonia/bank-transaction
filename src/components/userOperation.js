import React, { useState } from "react";
import AllUsersDetail from "./allUserDetails";
import NewUser from "./newUser";
import CheckBalance from "./checkBalance";
import AddFunds from "./fundsOperation";
import AllTransactions from "./allTransactions";

const UserOperation = ({ users, activeTab, setUsers, setActiveTab }) => {
  // for maintain users transaction details
  const [allTransaction, setAllTransaction] = useState([]);
  // TODO: needs to add popup modal for confirmation
  const newUserHandler = (e, newUser) => {
    e.preventDefault();
    const tempData = [...users];
    newUser.userId = "usr" + (tempData.length + 1);
    tempData.push(newUser);
    setUsers(tempData);
    setActiveTab("All-users");
  };
  const addBalanceHandler = (userId, amount) => {
    const tempData = [...users];
    const availableIndex =
      tempData.findIndex((user) => user.userId === userId) || 0;
    tempData[availableIndex].balance =
      parseInt(tempData[availableIndex].balance) + parseInt(amount);
    setUsers(tempData);
    setActiveTab("All-users");
    // for create transaction history
    const tempTransaction = [...allTransaction];
    const tempObj = {
      name: tempData[availableIndex].name,
      date: new Date(),
      amount: "+" + parseInt(amount),
      balance: tempData[availableIndex].balance,
    };
    tempTransaction.push(tempObj);
    setAllTransaction(tempTransaction);
  };
  const spendBalanceHandler = (userId, amount) => {
    const tempData = [...users];
    const availableIndex =
      tempData.findIndex((user) => user.userId === userId) || 0;
    tempData[availableIndex].balance =
      parseInt(tempData[availableIndex].balance) - parseInt(amount);
    setUsers(tempData);
    setActiveTab("All-users");
    const tempTransaction = [...allTransaction];
    const tempObj = {
      name: tempData[availableIndex].name,
      date: new Date(),
      amount: parseInt(amount) * -1,
      balance: tempData[availableIndex].balance,
    };
    tempTransaction.push(tempObj);
    setAllTransaction(tempTransaction);
  };

  return (
    <section className="detail-wrapper">
      {activeTab === "All-users" && <AllUsersDetail users={users} />}
      {activeTab === "New-user" && <NewUser newUserHandler={newUserHandler} />}
      {activeTab === "Balance-check" && <CheckBalance users={users} />}
      {(activeTab === "Add-funds" || activeTab === "spend-funds") && (
        <AddFunds
          users={users}
          addBalanceHandler={
            activeTab === "Add-funds" ? addBalanceHandler : spendBalanceHandler
          }
          activeTab={activeTab}
        />
      )}
      {activeTab === "All-transaction" && (
        <AllTransactions allTransaction={allTransaction} />
      )}
    </section>
  );
};

export default UserOperation;
