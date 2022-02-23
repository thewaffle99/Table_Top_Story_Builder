import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import NPCForm from "../components/NPCForm";
import Header from "../components/Header";

function NPCCreate(props) {
  const { id } = useParams();
  const [errors, setErrors] = useState({});
  const nameOfForm = "Create";

  const navigate = useNavigate();

  const [newNPC, setNewNPC] = useState({
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
    associatedWorld: `${id}`,
  });

  const newSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/npcs", newNPC)
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
      <Header />
      <NPCForm
        NPC={newNPC}
        setNPC={setNewNPC}
        submitHandler={newSubmitHandler}
        nameOfForm={nameOfForm}
      />
    </div>
  );
}

export default NPCCreate;
