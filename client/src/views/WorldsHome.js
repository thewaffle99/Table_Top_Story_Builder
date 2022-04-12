import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

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
      <Header />
      <NavBar />
      <div className="d-flex flex-column align-items-center justify-content-center">
        <h1>All Worlds</h1>
        <Link
          to={"/createWorld"}
          className="m-5 btn btn-dark"
          style={{ border: "3px", borderColor: "gold" }}
        >
          Create New World
        </Link>
        <div className="d-flex d-flex align-content-start flex-wrap">
          {worlds.map((world, index) => (
            <div>
              <Card className="m-2 ">
                <Card.Body
                  className="d-flex flex-column align-items-center justfy-content-around"
                  style={{ width: "500px" }}
                >
                  <Link
                    className="mb-4 btn btn-secondary"
                    to={`/api/edit/world/${world._id}`}
                  >
                    {world.name}
                  </Link>
                  <Card.Text>{world.worldBackStory}</Card.Text>
                  <p
                    style={{
                      fontFamily: "Lucida Console, CourierNew, monospaced",
                    }}
                  >
                    Created by:
                  </p>
                  <Link
                    className="list-group-item list-group-item-action"
                    style={{
                      textAlign: "center",
                      border: "none",
                      width: "250px",
                    }}
                    to={`/user/profile/${world.createdBy.userName}`}
                  >
                    {world.createdBy.userName}
                  </Link>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorldsHome;
