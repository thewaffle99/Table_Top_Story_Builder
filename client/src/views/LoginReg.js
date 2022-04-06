import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Login from "../components/Login";
import Register from "../components/Register";

const LoginReg = (props) => {
  return (
    <div>
      <Header />
      <div className="d-flex align-items-center justify-content-center mt-5">
        <Login />
        <Register />
      </div>
    </div>
  );
};

export default LoginReg;
