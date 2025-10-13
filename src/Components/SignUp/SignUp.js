import React, { useState } from "react";
import axios from "axios";
import "./SignUp.css"; // Import the CSS file
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../Utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../../Redux-toolkit/Reducers/userSlice";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    password: "",
  });
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   alert(`Welcome ${form.firstName}! 🎉`);
  // };

  const openLogin = () => {
    navigate('/login')
  }

  console.log(form);
  const handleSignUp = async (e) => {
    
      e.preventDefault(); // stops page reload
      alert(`Welcome ${form.firstName}! 🎉`);

    try {
      const res = await axios.post(BASE_URL + "/signup", {
        "firstName": form.firstName,
        "lastName": form.lastName,
        "emailId": form.emailId,
        "password": form.password
      }, {
        withCredentials: true
      })

      dispatch(addUser(res?.data?.data));

      navigate('/home');
    } catch (err) {
      setError("Invalid Details!");
    }
  }

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-title">Create an Account</h2>

        <form onSubmit={handleSignUp}>
          <div className="input-group">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              required
              placeholder="Enter your first name"
            />
          </div>

          <div className="input-group">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              required
              placeholder="Enter your last name"
            />
          </div>

          <div className="input-group">
            <label>Email ID</label>
            <input
              type="email"
              name="emailId"
              value={form.emailId}
              onChange={handleChange}
              required
              placeholder="example@email.com"
            />
          </div>

          <div className="input-group password-group">
            <label>Password</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                placeholder="Enter your password"
              />
              <span
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>
          </div>

          {error && <p>{error}</p>}

          <button type="submit" className="signup-btn" onClick={handleSignUp}>
            Sign Up
          </button>
        </form>

        <p className="login-text">
          Already have an account?{" "}
          <span className="login-link" onClick={openLogin}>Log In</span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
