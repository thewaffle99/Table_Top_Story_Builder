import React, { useState, useEffect } from "react";
import axios from "axios";

const Register = (props) => {
  const [confirmReg, setConfirmReg] = useState("");

  const [errors, setErrors] = useState();

  const [user, setUser] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const register = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/users/register", user, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        setUser({
          userName: "",
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
        setConfirmReg("Thank you for Registering, you can now log in!");
        setErrors("");
      })
      .catch((err) => {
        console.log(err);
        setErrors(err.response.data);
      });
  };
  console.log(errors);
  return (
    <div className="d-flex flex-column align-items-center mx-5">
      {confirmReg ? <h4 style={{ color: "green" }}>{confirmReg}</h4> : null}
      {errors ? <h4 style={{ color: "red" }}>{errors.message}</h4> : null}
      <h1 className="headingTextStyle">Register</h1>
      <form
        onSubmit={register}
        className="d-flex flex-column align-items-center"
      >
        <div className="d-flex flex-column align-items-center">
          <label className="headingTextStyle">User Name</label>
          <input
            className="oldTimeyTextStyle"
            type="text"
            name="userName"
            value={user.userName}
            onChange={handleChange}
          ></input>
        </div>
        <div className="d-flex flex-column align-items-center">
          <label className="headingTextStyle">First Name</label>
          <input
            className="oldTimeyTextStyle"
            type="text"
            name="firstName"
            value={user.firstName}
            onChange={handleChange}
          ></input>
        </div>
        <div className="d-flex flex-column align-items-center">
          <label className="headingTextStyle">Last Name</label>
          <input
            className="oldTimeyTextStyle"
            type="text"
            name="lastName"
            value={user.lastName}
            onChange={handleChange}
          ></input>
        </div>
        <div className="d-flex flex-column align-items-center">
          <label className="headingTextStyle">Email</label>
          <input
            className="oldTimeyTextStyle"
            type="text"
            name="email"
            value={user.email}
            onChange={handleChange}
          ></input>
        </div>
        <div className="d-flex flex-column align-items-center">
          <label className="headingTextStyle">Password</label>
          <input
            className="oldTimeyTextStyle"
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          ></input>
        </div>
        <div className="d-flex flex-column align-items-center">
          <label className="headingTextStyle"> Confirm Password</label>
          <input
            className="oldTimeyTextStyle"
            type="password"
            name="confirmPassword"
            value={user.confirmPassword}
            onChange={handleChange}
          ></input>
        </div>
        <button type="submit" className="btn btn-secondary mt-3">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
