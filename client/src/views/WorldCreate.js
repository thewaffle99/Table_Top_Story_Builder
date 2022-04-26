import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import WorldForm from "../components/WorldForm";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

function WorldCreate(props) {
  const [errors, setErrors] = useState({});
  const nameOfForm = "Create";
  const type = "world";
  const [user, setUser] = useState({});

  const navigate = useNavigate();

  const [newWorld, setNewWorld] = useState({
    name: "",
    worldBackStory: "",
    worldCatalyst: "",
    worldPlotPoints: "",
    places: [],
    NPCs: [],
  });

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
  const newSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/worlds", newWorld, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
        setErrors(err.response.data.errors);
      });
  };

  return (
    <div>
      <div
        style={{ marginBottom: "-75px" }}
        className="d-flex justify-content-between"
      >
        <Header />
        <NavBar />
      </div>
      <WorldForm
        user={user}
        world={newWorld}
        setWorld={setNewWorld}
        submitHandler={newSubmitHandler}
        errors={errors}
        nameOfForm={nameOfForm}
      />
    </div>
  );
}

export default WorldCreate;
