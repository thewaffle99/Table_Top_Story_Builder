import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Header from "../components/Header";

function WorldsHome() {
  const [worlds, setWorlds] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/worlds")
      .then((res) => {
        console.log(res.data);
        setWorlds(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Header />

      <div className="d-flex flex-column align-tiems-center justify-content-center">
        <div className="d-flex flex-column flex-wrap align-items-center justify-content-center ">
          {worlds.map((world, index) => (
            <div>
              <Card className="m-2">
                <Card.Body
                  className="d-flex flex-column align-items-center justfy-content-around"
                  style={{ width: "500px" }}
                >
                  <Link
                    className="mb-4 btn btn-secondary"
                    to={`api/edit/world/${world._id}`}
                  >
                    {world.name}
                  </Link>
                  <Card.Text>{world.worldBackStory}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
          <Link
            to={"/createWorld"}
            className="m-5 btn btn-dark"
            style={{ border: "3px", borderColor: "gold" }}
          >
            Create New World
          </Link>
        </div>
      </div>
    </div>
  );
}

export default WorldsHome;