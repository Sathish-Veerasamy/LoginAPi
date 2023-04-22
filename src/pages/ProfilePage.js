import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import Dashboard from "../components/Dashboard";
import "./../components/Dashboard.css";
import Details from "../components/Details";

const ProfilePage = () => {

    //fetch data is an aync function which is used to fetch the data from the api
  async function fetchData() {
    const id = localStorage.getItem("id");
    //this is an get method that we get the send the id that we stored in the localstorage
    const response = await fetch(`https://dummyjson.com/users/${id}`);
    if (response.ok) {
      const data = await response.json();
      setUserData(data);
    }
  }
  const [userData, setUserData] = useState("");
//useeffect hook is used to fetch the data fom the api 
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Container className="maincontainer">
        <h1 className="title">Profile Details</h1>
        <Dashboard user={userData}/>
        <Details user={userData}/>
      </Container>
    </div>
  );
};

export default ProfilePage;
