import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import PlaceForm from "../components/PlaceForm";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

function PlaceCreate(props) {
  const { id } = useParams();
  const [errors, setErrors] = useState({});
  const nameOfForm = "Create";
  const type = "place";

  const navigate = useNavigate();

  const [newPlace, setNewPlace] = useState({
    name: "",
    enemies: "",
    allies: "",
    uniqueFeatures: "",
    suprisedToSeeWho: "",
    suprisedToSeeWhat: "",
    prejudices: "",
    placeNotes: "",
    photo: "",
    associatedWorld: `${id}`,
  });

  const newSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/places", newPlace)
      .then((res) => {
        console.log(res);
        navigate(`/api/edit/world/${id}`);
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
      </div>{" "}
      <PlaceForm
        type={type}
        worldId={id}
        place={newPlace}
        setPlace={setNewPlace}
        submitHandler={newSubmitHandler}
        errors={errors}
        nameOfForm={nameOfForm}
        navigateUrl={`/api/edit/world/${newPlace.associatedWorld}`}
      />
    </div>
  );
}

export default PlaceCreate;
