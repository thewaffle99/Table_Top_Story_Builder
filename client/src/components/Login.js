import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const login = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8000/api/users/login", user, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res, "res");
        console.log(res.data, "res data!");
        setUser({
          email: "",
          password: "",
        });
        navigate("/home");
      })
      .catch((err) => {
        console.log(err.response.data);
        setErrorMessage(err.response.data);
      });
  };

  return (
    <div className="d-flex flex-column align-items-center mx-5">
      {errorMessage ? (
        <h4 style={{ color: "red" }}>{errorMessage.message}</h4>
      ) : null}
      <h1 className="headingTextStyle">Login</h1>
      <form onSubmit={login} className="d-flex flex-column align-items-center">
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

        <button type="submit" className="btn btn-secondary mt-3">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
