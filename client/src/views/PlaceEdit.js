import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import PlaceForm from "../components/PlaceForm";
import DeleteButton from "../components/DeleteButton";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function PlaceEdit(props) {
  const navigate = useNavigate();
  const nameOfForm = "Update";
  const type = "place";
  const { id } = useParams();
  const [errors, setErrors] = useState({});

  const [updatedPlace, setUpdatedPlace] = useState({
    name: "",
    enemies: "",
    allies: "",
    uniqueFeatures: "",
    suprisedToSeeWho: "",
    suprisedToSeeWhat: "",
    prejudices: "",
    placeNotes: "",
    photo: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/place/${id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setUpdatedPlace(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const updateSubmitHandlerPlace = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/place/${id}`, updatedPlace)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response.data);
        setErrors(err.response.data.errors);
      });
  };

  return (
    <div>
      <Header />
      <PlaceForm
        place={updatedPlace}
        setPlace={setUpdatedPlace}
        submitHandler={updateSubmitHandlerPlace}
        errors={errors}
        nameOfForm={nameOfForm}
      />
      <DeleteButton
        id={updatedPlace._id}
        type={type}
        navigateUrl={`/api/edit/world/${updatedPlace.associatedWorld}`}
      />
    </div>
  );
}

export default PlaceEdit;
