import React from "react";
import "./Dashboard.css";
const Dashboard = ({ user }) => {
  
  return (
    <div style={{backgroundColor:"grey"}}>
      <div className="container">
            <img src={user.image} alt="profileData"/>
      </div>
    </div>
  );
};

export default Dashboard;
