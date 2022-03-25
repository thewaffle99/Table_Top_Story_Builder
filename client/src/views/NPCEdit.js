import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import NPCForm from "../components/NPCForm";
import DeleteButton from "../components/DeleteButton";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function NPCEdit() {
  const navigate = useNavigate();
  const nameOfForm = "Update";
  const type = "NPC";
  const { id } = useParams();
  const [errors, setErrors] = useState({});

  const [updatedNPC, setUpdatedNPC] = useState({
    name: "",
    health: "",
    attack: "",
    occupation: "",
    want: "",
    infoTheyKnow: "",
    enemies: "",
    allies: "",
    physicalChar: "",
    flawOrIdeal: "",
    valuables: "",
    secret: "",
    NPCNotes: "",
    photo: "",
    // place: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/npc/${id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setUpdatedNPC(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const updateSubmitHandlerNPC = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/npc/${id}`, updatedNPC)
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
      <NPCForm
        NPC={updatedNPC}
        setNPC={setUpdatedNPC}
        submitHandler={updateSubmitHandlerNPC}
        errors={errors}
        nameOfForm={nameOfForm}
        navigateUrl={`/api/edit/world/${updatedNPC.associatedWorld}`}
      />
      <DeleteButton
        id={updatedNPC._id}
        type={type}
        navigateUrl={`/api/edit/world/${updatedNPC.associatedWorld}`}
      />
    </div>
  );
}

export default NPCEdit;
