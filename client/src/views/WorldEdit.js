import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import WorldForm from "../components/WorldForm";
import Header from "../components/Header";
import DeleteButton from "../components/DeleteButton";

function WorldEdit(props) {
  const navigate = useNavigate();
  const nameOfForm = "Update";
  const { id } = useParams();
  const [errors, setErrors] = useState({});
  const [placeList, setPlaceList] = useState([]);
  const [NPCList, setNPCList] = useState([]);

  const [updatedWorld, setUpdatedWorld] = useState({
    name: "",
    worldBackStory: "",
    worldCatalyst: "",
    worldPlotPoints: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/world/${id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setUpdatedWorld(res.data);
        setPlaceList(res.data.places);
        setNPCList(res.data.NPCs);
      })
      .catch((err) => console.log(err));
  }, []);

  const updateSubmitHandlerWorld = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/world/${id}`, updatedWorld)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        console.log(err.response.data);
        setErrors(err.response.data.errors);
      });
  };

  return (
    <div>
      <Header />
      <div className="mb-5 d-flex justify-content-center align-items-center">
        <div>
          <WorldForm
            world={updatedWorld}
            setWorld={setUpdatedWorld}
            submitHandler={updateSubmitHandlerWorld}
            errors={errors}
            nameOfForm={nameOfForm}
          />
          <DeleteButton id={updatedWorld._id} />
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="m-3 d-flex flex-column align-items-center ">
          <h2>Places:</h2>
          <Link
            className="btn btn-dark"
            to={`/createPlace/${updatedWorld._id}`}
          >
            Create Place
          </Link>
          {placeList
            ? placeList.map((place, index) => (
                <Link
                  style={{
                    margin: "2px",
                    padding: "5px",
                    color: "black",
                    backgroundColor: "grey",
                    fontSize: "20px",
                  }}
                  to={`/api/place/${place._id}`}
                  key={index}
                >
                  {place.name}
                </Link>
              ))
            : null}
        </div>
        <div className="m-3 d-flex flex-column align-items-center ">
          <h2>NPCs:</h2>
          <Link className="btn btn-dark" to={"/createNPC"}>
            Create NPC
          </Link>
          {NPCList
            ? NPCList.map((NPC, index) => (
                <Link
                  style={{
                    margin: "2px",
                    padding: "5px",
                    color: "black",
                    backgroundColor: "grey",
                    fontSize: "20px",
                  }}
                  to={`/api/npc/${NPC._id}`}
                  key={index}
                >
                  {NPC.name}
                </Link>
              ))
            : null}
        </div>
      </div>
    </div>
  );
}

export default WorldEdit;
