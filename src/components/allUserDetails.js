import React from "react";
import Table from "react-bootstrap/Table";

/**
 *
 * @param {users} all list of users
 * @returns
 */
const AllUsersDetail = ({ users }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>User Name</th>
          <th>Phone Number</th>
          <th>Balance</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={user.userId}>
            <td>{index + 1}</td>
            <td>{user.name}</td>
            <td>{user.phone}</td>
            <td>{user.balance}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default AllUsersDetail;
