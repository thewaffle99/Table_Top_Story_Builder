import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import WorldForm from "../components/WorldForm";
import Header from "../components/Header";
import DeleteButton from "../components/DeleteButton";
import NavBar from "../components/NavBar";

function WorldEdit(props) {
  const navigate = useNavigate();
  const nameOfForm = "Update";
  const type = "world";

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
        navigate("/home");
      })
      .catch((err) => {
        console.log(err.response.data);
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
      <div className="my-5 d-flex justify-content-center align-items-center">
        <div>
          <WorldForm
            world={updatedWorld}
            setWorld={setUpdatedWorld}
            submitHandler={updateSubmitHandlerWorld}
            errors={errors}
            nameOfForm={nameOfForm}
          />
          <DeleteButton
            id={updatedWorld._id}
            type={type}
            navigateUrl={"/home"}
          />
        </div>
        <div>
          <div className="d-flex justify-content-center">
            <div className="m-3 d-flex flex-column align-items-center ">
              <h2 className="headingTextStyle">Places:</h2>
              <Link
                className=" my-2 btn btn-dark"
                to={`/createPlace/${updatedWorld._id}`}
              >
                Create Place
              </Link>
              {placeList
                ? placeList.map((place, index) => (
                    <Link
                      className="oldTimeyTextStyle"
                      style={{
                        margin: "2px",
                        padding: "10px",
                        color: "black",
                        backgroundColor: "grey",
                        fontSize: "20px",
                        borderRadius: "100px",
                      }}
                      to={`/api/edit/place/${place._id}`}
                      key={index}
                    >
                      {place.name}
                    </Link>
                  ))
                : null}
            </div>
            <div className="m-3 d-flex flex-column align-items-center ">
              <h2 className="headingTextStyle">NPCs:</h2>
              <Link
                className="my-2 btn btn-dark"
                to={`/createNPC/${updatedWorld._id}`}
              >
                Create NPC
              </Link>
              {NPCList
                ? NPCList.map((NPC, index) => (
                    <Link
                      className="oldTimeyTextStyle"
                      style={{
                        margin: "2px",
                        padding: "10px",
                        color: "black",
                        backgroundColor: "grey",
                        fontSize: "20px",
                        borderRadius: "100px",
                      }}
                      to={`/api/edit/npc/${NPC._id}`}
                      key={index}
                    >
                      {NPC.name}
                    </Link>
                  ))
                : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorldEdit;
