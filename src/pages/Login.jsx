import React from "react";
import "../styles/login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="loginTitle">Login</div>
      <form className="loginForm">
        <label>Email</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter Your Email..."
        />
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter Your Password..."
        />
        <button className="loginButton">Login</button>
      </form>
      <button className="loginRegisterButton">Register</button>
    </div>
  );
};

export default Login;
