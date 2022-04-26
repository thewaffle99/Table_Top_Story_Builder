import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import NPCForm from "../components/NPCForm";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

function NPCCreate(props) {
  const { id } = useParams();
  const [errors, setErrors] = useState({});
  const nameOfForm = "Create";
  const type = "NPC";

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
      <div
        style={{ marginBottom: "-75px" }}
        className="d-flex justify-content-between"
      >
        <Header />
        <NavBar />
      </div>
      <NPCForm
        type={type}
        NPC={newNPC}
        setNPC={setNewNPC}
        submitHandler={newSubmitHandler}
        nameOfForm={nameOfForm}
        navigateUrl={`/api/edit/world/${newNPC.associatedWorld}`}
        errors={errors}
      />
    </div>
  );
}

export default NPCCreate;
