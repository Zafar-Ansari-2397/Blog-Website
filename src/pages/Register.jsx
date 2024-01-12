import React from "react";
import "../styles/register.css";

const Register = () => {
  return (
    <div className="register">
      <div className="registerTitle">Register</div>
      <form className="registerForm">
        <label>User Name</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter Your User Name"
        />
        <label>Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter Your Email..."
        />
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter Your Password..."
        />
        <button className="registerButton">Register</button>
      </form>
      <button className="registerLoginButton">Login</button>
    </div>
  );
};

export default Register;
