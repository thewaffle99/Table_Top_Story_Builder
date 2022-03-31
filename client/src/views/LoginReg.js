import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Login from "../components/Login";
import Register from "../components/Register";

const LoginReg = (props) => {
  return (
    <div>
      <Header />
      <div className="d-flex justify-content-around mx-5 mt-5">
        <Login />
        <Register />
      </div>
    </div>
  );
};

export default LoginReg;
