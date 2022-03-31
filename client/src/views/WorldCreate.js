import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import WorldForm from "../components/WorldForm";
import Header from "../components/Header";

function WorldCreate(props) {
  const [errors, setErrors] = useState({});
  const nameOfForm = "Create";

  const navigate = useNavigate();

  const [newWorld, setNewWorld] = useState({
    name: "",
    worldBackStory: "",
    worldCatalyst: "",
    worldPlotPoints: "",
    places: [],
    NPCs: [],
  });

  const newSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/worlds", newWorld)
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
      <Header />
      <WorldForm
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
