import React, { useState, useEffect } from "react";

const Register = (props) => {
  return (
    <div>
      <h1>Register</h1>
      <form>
        <div className="d-flex flex-column align-items-center">
          <label>First Name</label>
          <input type="text" name="firstName"></input>
        </div>
        <div className="d-flex flex-column align-items-center">
          <label>Last Name</label>
          <input type="text" name="lastName"></input>
        </div>
        <div className="d-flex flex-column align-items-center">
          <label>User Name</label>
          <input type="text" name="userName"></input>
        </div>
      </form>
    </div>
  );
};

export default Register;
