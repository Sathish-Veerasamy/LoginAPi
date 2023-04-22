
import React from "react";
import { useState } from "react";
import "./../App.css";
import { useNavigate } from "react-router-dom";


const LoginPage = ({ setToken }) => {
    const navigate=useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  //function is created to handle the login action done when logging in 
 async function handleLogin(event) {
    //used to preventthe laod when submit is clicked form action in Submit
    event.preventDefault();
    console.log("i am logged or called");

    //using async await to fetch the api and post method is used to post the credentials
    //if the credentials it will  return the response in the json format
   const response=await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            //username and password is passed into the data for the post method
        username:`${username}`,
        password:`${password}`,
        })
        })
       if(response.ok){
        // if response is receieved it will fetched and stored in the data
        const data = await response.json();

        //storing the data inside the localstoreage
        localStorage.setItem("token", data.token);
        localStorage.setItem("id", data.id);
        console.log("id and token set")

        //using navigate funtion rouiting to the profile page
       navigate("/profile");
       }
    }
  return (
    <div className="form">
        <p>Login </p>
      <div className="form-containerBody">
        <form onSubmit={handleLogin}>
            <div className="form-container">
          <p>Email</p>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <p>Password</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};




export default LoginPage;
