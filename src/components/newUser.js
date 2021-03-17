import React, { useState } from "react";

const NewUser = ({ newUserHandler }) => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    phone: "",
    balance: "",
  });

  return (
    <form
      className="flex-column d-flex"
      onSubmit={(e) => newUserHandler(e, userDetails)}
    >
      <label className="new-user-input">
        Name
        <input
          className="border border-primary"
          required
          placeholder="please enter your name"
          onChange={(e) => {
            e.preventDefault();
            setUserDetails({
              ...userDetails,
              name: e.target.value,
            });
          }}
        />
      </label>
      <label className="new-user-input">
        Phone
        <input
          className="border border-primary"
          type="tel"
          id="phone"
          name="phone"
          required
          placeholder="9876543210"
          pattern="[0-9]{10}"
          onChange={(e) => {
            e.preventDefault();
            setUserDetails({
              ...userDetails,
              phone: e.target.value,
            });
          }}
        />
      </label>
      <label className="new-user-input">
        Amount
        <input
          className="border border-primary"
          type="number"
          required
          placeholder="Enter amount how much you want to add"
          onChange={(e) => {
            e.preventDefault();
            setUserDetails({
              ...userDetails,
              balance: e.target.value,
            });
          }}
        />
      </label>
      <button className="bg-primary new-user-submit" type="submit">
        Submit
      </button>
    </form>
  );
};

export default NewUser;
