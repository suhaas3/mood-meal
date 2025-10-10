import React, { useEffect, useState } from "react";
import axios from 'axios';
import './Login.css';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import './Login.css';
import { BASE_URL } from "../../Utils/constants";
import { color } from "@mui/system";
import { addUser } from "../../Redux-toolkit/Reducers/userSlice";


function Login({ setOpenLogin }) {
  const [loginDetails, setLoginDetails] = useState({
    emailId: "virat@gmail.com",
    passWord: "ViratChiku@123"
  });
  const [error, setError] = useState("");


  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleLoginDetails(event) {
    const name = event.target.name;
    const value = event.target.value;
    setLoginDetails({
      ...loginDetails,
      [name]: value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setError("");
      const res = await axios.post(BASE_URL + "/login", {
        "emailId": loginDetails.emailId,
        "password": loginDetails.passWord
      },
        { withCredentials: true })

        dispatch(addUser(res?.data));
        if (res) {
          setOpenLogin(false);
        }
        navigate("/home");

    } catch (err) {
      setError("Invalid credentials!")
    }
  }

  return (
    <>
      <div className="login-page">
        <div className="login-section">
          <div className="login-sub-section">
            <TextField id="outlined-basic" className="userNameBox" label="emailId" type="email" name="emailId" value={loginDetails.emailId} onChange={handleLoginDetails} variant="outlined" />
            <TextField id="outlined-basic" className="passwordBox" label="PassWord" type="password" name="passWord" value={loginDetails.passWord} onChange={handleLoginDetails} variant="outlined" />
            <p style={{color: "red", margin: "4px" , fontSize: "14px"}}>{error}</p>
            <button onClick={handleSubmit} className="login-button-new">Login</button>

          </div>
        </div>
      </div>
    </>
  );

}

export default Login;