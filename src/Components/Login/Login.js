  import React, { useEffect, useState } from "react";
  import './Login.css';
  import { useNavigate } from "react-router-dom";
  import { useDispatch, useSelector } from "react-redux";
  import { AuthLogin } from "../../Redux-toolkit/AuthSlice";
  import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
  
  
  function Login({setOpenLogin}) {
  const [loginDetails, setLoginDetails] = useState({
    userName: "",
    passWord: ""
  });


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

  function handleSubmit(event) {
      event.preventDefault();
      dispatch(AuthLogin({ userName: loginDetails.userName, passWord: loginDetails.passWord }));
      setOpenLogin(prev => !prev);
  }

  return (
    <>
      <div className="login-page">
        <div className="login-section">
          <div className="login-sub-section">
                  <TextField id="outlined-basic" className="userNameBox" label="UserName"  name="userName" onChange={handleLoginDetails} variant="outlined" />
            <TextField id="outlined-basic" className="passwordBox"  label="PassWord"  name="passWord" onChange={handleLoginDetails} variant="outlined" />
            
            <Button onClick={handleSubmit} className="login-button-new" variant="contained">Login</Button>

          </div>
        </div>
      </div>
    </>
  );

}

export default Login;