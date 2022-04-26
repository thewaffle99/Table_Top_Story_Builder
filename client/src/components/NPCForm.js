import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DeleteButton from "./DeleteButton";

function NPCForm(props) {
  const { type, NPC, setNPC, submitHandler, errors, nameOfForm, navigateUrl } =
    props;
  const [user, setUser] = useState({});
  const [world, setWorld] = useState({});
  console.log(NPC);
  const onChangeHandler = (e) => {
    const newStateObject = { ...NPC };
    newStateObject[e.target.name] = e.target.value;

    console.log("e.target.name = ", e.target.name);
    console.log("e.target.value = ", e.target.value);
    setNPC(newStateObject);
  };

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

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/world/${NPC.associatedWorld}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setWorld(res.data);
      })
      .catch((err) => console.log(err));
  }, [NPC.associatedWorld]);

  let loggedInNPC = (user, world) => {
    console.log(user);
    console.log(world);
    if (user._id === world.createdBy) {
      return (
        <div className="d-flex">
          <button type="submit" className=" btn btn-dark">
            {nameOfForm} NPC
          </button>
          <DeleteButton
            id={NPC._id}
            type={type}
            navigateUrl={`/api/edit/world/${NPC.associatedWorld}`}
          />
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="m-5">
      <form onSubmit={submitHandler}>
        <div className="mb-3 d-flex flex-column align-items-center justify-content-center">
          <img
            style={{ width: "50px" }}
            className="d-flex flex-column align-items-center justify-content-center"
            src={NPC.photo}
          />
          <div className="d-flex">
            <div className="d-flex flex-column align-items-center justify-content-center">
              <label className="headingTextStyle">NPC Name:</label>
              <input
                className="oldTimeyTextStyle"
                name="name"
                value={NPC.name}
                onChange={onChangeHandler}
                type="text"
              />
              {errors.name ? <p>{errors.name.message}</p> : null}
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center">
              <label className="headingTextStyle">Health:</label>
              <input
                className="oldTimeyTextStyle"
                name="health"
                value={NPC.health}
                onChange={onChangeHandler}
                type="number"
              />
              {errors.health ? <p>{errors.health.message}</p> : null}
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center">
              <label className="headingTextStyle">Attack:</label>
              <input
                className="oldTimeyTextStyle"
                name="attack"
                value={NPC.attack}
                onChange={onChangeHandler}
                type="number"
              />
              {errors.attack ? <p>{errors.attack.message}</p> : null}
            </div>
          </div>
        </div>
        <div className=" d-flex justify-content-center align-items-center">
          <div className="mx-3 d-flex flex-column align-items-center justify-content-center">
            <label className="headingTextStyle">Occupation:</label>
            <input
              className="oldTimeyTextStyle"
              name="occupation"
              value={NPC.occupation}
              onChange={onChangeHandler}
              type="text"
            />
            <div className="d-flex flex-column align-items-center justify-content-center">
              <label
                className="headingTextStyle"
                style={{ textAlign: "center", width: "300px" }}
              >
                What is something they want?
              </label>
              <textarea
                className="oldTimeyTextStyle"
                style={{ height: "100px", width: "300px" }}
                name="want"
                value={NPC.want}
                onChange={onChangeHandler}
                type="text"
              />
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center">
              <label
                className="headingTextStyle"
                style={{ textAlign: "center", width: "300px" }}
              >
                What is some information they know?
              </label>
              <textarea
                className="oldTimeyTextStyle"
                style={{ height: "100px", width: "300px" }}
                name="infoTheyKnow"
                value={NPC.infoTheyKnow}
                onChange={onChangeHandler}
                type="text"
              />
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center">
              <label
                className="headingTextStyle"
                style={{ textAlign: "center", width: "300px" }}
              >
                Do they have enemies?
              </label>
              <textarea
                style={{ height: "100px", width: "300px" }}
                name="enemies"
                value={NPC.enemies}
                onChange={onChangeHandler}
                type="text"
              />
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center">
              <label
                className="headingTextStyle"
                style={{ textAlign: "center", width: "300px" }}
              >
                Do they have allies?
              </label>
              <textarea
                className="oldTimeyTextStyle"
                style={{ height: "100px", width: "300px" }}
                name="allies"
                value={NPC.allies}
                onChange={onChangeHandler}
                type="text"
              />
            </div>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="d-flex flex-column align-items-center justify-content-center">
              <label
                className="headingTextStyle"
                style={{ textAlign: "center", width: "300px" }}
              >
                Do they have any unique physical characteristics?
              </label>
              <textarea
                className="oldTimeyTextStyle"
                style={{ height: "100px", width: "300px" }}
                name="PhysicalChar"
                value={NPC.PhysicalChar}
                onChange={onChangeHandler}
                type="text"
              />
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center">
              <label
                className="headingTextStyle"
                style={{ textAlign: "center", width: "300px" }}
              >
                What is their a character flaw or an ideal they hold dearly?
              </label>
              <textarea
                className="oldTimeyTextStyle"
                style={{ height: "100px", width: "300px" }}
                name="flawOrIdeal"
                value={NPC.flawOrIdeal}
                onChange={onChangeHandler}
                type="text"
              />
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center">
              <label
                className="headingTextStyle"
                style={{ textAlign: "center", width: "300px" }}
              >
                Do they have any valuables?
              </label>
              <textarea
                className="oldTimeyTextStyle"
                style={{ height: "100px", width: "300px" }}
                name="valuables"
                value={NPC.valuables}
                onChange={onChangeHandler}
                type="text"
              />
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center">
              <label
                className="headingTextStyle"
                style={{ textAlign: "center", width: "300px" }}
              >
                Do they have any juicy secrets?
              </label>
              <textarea
                className="oldTimeyTextStyle"
                style={{ height: "100px", width: "300px" }}
                name="secrets"
                value={NPC.secrets}
                onChange={onChangeHandler}
                type="text"
              />
            </div>
          </div>

          <div className="mx-3 d-flex flex-column justify-content-center align-items-center">
            <label
              className="headingTextStyle"
              style={{ width: "300px", textAlign: "center" }}
            >
              NPC Notes
            </label>
            <textarea
              className="oldTimeyTextStyle"
              style={{ height: "300px", width: "400px" }}
              name="NPCNotes"
              value={NPC.NPCNotes}
              onChange={onChangeHandler}
              type="text"
            />
            <label className="mt-5 headingTextStyle">Image:</label>
            <input
              className="oldTimeyTextStyle"
              name="photo"
              value={NPC.photo}
              onChange={onChangeHandler}
              type="text"
            />
          </div>
          <div className="mx-3 d-flex flex-column justify-content-center align-items-center"></div>
        </div>
        <div className="mt-3 d-flex justify-content-center">
          <Link className=" mx-5 btn btn-secondary" to={navigateUrl}>
            Back
          </Link>
          <div>{loggedInNPC(user, world)}</div>
        </div>
      </form>
    </div>
  );
}

export default NPCForm;
