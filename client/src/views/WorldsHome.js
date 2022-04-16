import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import "../App.css";

function WorldsHome(props) {
  const [worlds, setWorlds] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/worlds`)
      .then((res) => {
        console.log(res.data);
        setWorlds(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div
        style={{ marginBottom: "-75px" }}
        className="d-flex justify-content-between"
      >
        <Header />
        <NavBar />
      </div>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <h1 className="headingTextStyle">All Worlds</h1>

        <Link
          to={"/createWorld"}
          className="m-3 btn btn-dark"
          style={{ border: "3px" }}
        >
          Create New World
        </Link>
        <div className=" oldTimeyTextStyle d-flex d-flex align-items-center justify-content-center flex-wrap">
          {worlds.map((world, index) => (
            <div className="m-2 card shadow ">
              <div
                className=" d-flex flex-column align-items-center justfy-content-around"
                style={{ width: "500px", padding: "10px" }}
              >
                <Link
                  className="mb-4 btn btn-secondary"
                  to={`/api/edit/world/${world._id}`}
                >
                  {world.name}
                </Link>
                <p>{world.worldBackStory}</p>
                <Link
                  className="list-group-item list-group-item-action"
                  style={{
                    textAlign: "center",
                    border: "none",
                    width: "250px",
                  }}
                  to={`/user/profile/${world.createdBy.userName}`}
                >
                  Created by: {world.createdBy.userName}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorldsHome;
