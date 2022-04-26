import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function NavBar(props) {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(
    () =>
      axios
        .get("http://localhost:8000/api/users/secure", {
          withCredentials: true,
        })
        .then((res) => {
          console.log(res.data);
          setUser(res.data);
        })
        .catch((err) => {
          console.log(err);
        }),
    []
  );

  const logout = (e) => {
    axios
      .post(
        "http://localhost:8000/api/users/logout",
        {},

        { withCredentials: true }
      )
      .then((res) => {
        console.log(res);
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className=" d-flex align-items-center justify-content-between mx-5">
      <Link
        className="mx-3 btn btn-dark"
        style={{ border: "3px", borderColor: "gold" }}
        to={"/home"}
      >
        Home
      </Link>
      <Link
        className="mx-1 btn btn-dark"
        style={{ border: "3px", borderColor: "#es6b800" }}
        to={`/user/profile/${user.userName}`}
      >
        {user.userName} Profile
      </Link>

      <button
        className="mx-3 btn btn-dark"
        style={{ border: "3px", borderColor: "gold" }}
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
}

export default NavBar;
