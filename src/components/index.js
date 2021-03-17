import React, { useState } from "react";
import Navbar from "./navbar";
import UserOperation from "./userOperation";
import "./style.css";
import { data } from "../data";

const WalletsBank = () => {
  const [users, setUsers] = useState([...data]);
  const [activeTab, setActiveTab] = useState("All-users");
  return (
    <section>
      <h2 className="main-content">welcome to bank</h2>
      <div className="wrapper">
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        <UserOperation
          users={users}
          setUsers={setUsers}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>
    </section>
  );
};

export default WalletsBank;
