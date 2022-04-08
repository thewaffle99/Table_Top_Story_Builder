import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

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
    <div className=" d-flex justify-content-between mx-5">
      <Link className="mb-4 btn btn-dark" to={"/home"}>
        Home
      </Link>
      <Link className="mb-4 btn btn-dark" to={`/user/profile/${user.userName}`}>
        {user.userName} Profile
      </Link>
      <button className="mb-4 btn btn-dark" onClick={logout}>
        Logout
      </button>
    </div>
  );
}

export default NavBar;
