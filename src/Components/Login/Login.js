import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import { Eye, EyeOff } from "lucide-react";
import { BASE_URL } from "../../Utils/constants";
import { addUser } from "../../Redux-toolkit/Reducers/userSlice";
import "./Login.css";

function Login() {
  const [loginDetails, setLoginDetails] = useState({
    emailId: "virat@gmail.com",
    passWord: "Virat@123",
  });
  const [error, setError] = useState("");
  const [hover, setHover] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleLoginDetails(event) {
    const { name, value } = event.target;
    setLoginDetails({
      ...loginDetails,
      [name]: value,
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setError("");

      if (loading) return; // prevents double click

      const res = await axios.post(
        BASE_URL + "/login",
        {
          emailId: loginDetails.emailId,
          password: loginDetails.passWord,
        },
        { withCredentials: true }
      );

      dispatch(addUser(res?.data));
      navigate("/home");
    } catch (err) {
      setError("Invalid credentials!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-section">
        <div className="login-sub-section">
          <h2 className="login-title">Welcome Back 👋</h2>

          <TextField
            className="userNameBox"
            label="Email ID"
            type="email"
            name="emailId"
            value={loginDetails.emailId}
            onChange={handleLoginDetails}
            variant="outlined"
            fullWidth
          />

          {/* Password Field with Eye Icon */}
          <div className="password-field">
            <TextField
              className="passwordBox"
              label="Password"
              type={showPassword ? "text" : "password"}
              name="passWord"
              value={loginDetails.passWord}
              onChange={handleLoginDetails}
              variant="outlined"
              fullWidth
            />
            <span
              className="eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
            </span>
          </div>

          {error && <p className="error-text">{error}</p>}

          <button onClick={handleSubmit} className="login-button-new" disabled={loading}>
            Login
          </button>

          <p
            className="signup-text"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{
              color: hover ? "#1e90ff" : "#333",
              textDecoration: hover ? "underline" : "none",
            }}
            onClick={() => navigate("/signup")}
          >
            Don’t have an account? <span>Sign Up</span>
          </p>

          <p
            className="password-change"
            style={{
              color: hover ? "#ff1e1eff" : "#333",
              textDecoration: hover ? "underline" : "none",
              cursor: "pointer",
              textAlign: "center"
            }}
            onClick={() => navigate("/forgot-password")}
          >
            Forgot Password? <span style={{
              color: hover ? "#ff1e1eff" : "#333",
              textDecoration: hover ? "underline" : "none",
              cursor: "pointer",
            }} onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}>click here</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
