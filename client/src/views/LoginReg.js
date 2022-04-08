import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Login from "../components/Login";
import Register from "../components/Register";

const LoginReg = (props) => {
  return (
    <div>
      <Header />
      <div className="d-flex align-items-start justify-content-center mt-5">
        <Register />
        <Login />
      </div>
    </div>
  );
};

export default LoginReg;
