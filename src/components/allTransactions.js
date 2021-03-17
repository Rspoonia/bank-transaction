import React from "react";
import Table from "react-bootstrap/Table";

const AllTransactions = ({ allTransaction }) => {
  console.log("all tra", allTransaction);
  return (
    <>
      {allTransaction.length === 0 ? (
        <div>Oop's there is no transaction history</div>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>User Name</th>
              <th>Transaction Date</th>
              <th>Transaction Amount</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {allTransaction.map((user, index) => (
              <tr key={user.name + user.balance}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.date.toLocaleString()}</td>
                <td>{user.amount}</td>
                <td>{user.balance}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default AllTransactions;
