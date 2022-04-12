import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

function NPCForm(props) {
  const { NPC, setNPC, submitHandler, errors, nameOfForm, navigateUrl } = props;

  const onChangeHandler = (e) => {
    const newStateObject = { ...NPC };
    newStateObject[e.target.name] = e.target.value;

    console.log("e.target.name = ", e.target.name);
    console.log("e.target.value = ", e.target.value);
    setNPC(newStateObject);
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <NavBar />
        <div className="mb-3 d-flex flex-column align-items-center justify-content-center">
          <img
            style={{ width: "50px" }}
            className="d-flex flex-column align-items-center justify-content-center"
            src={NPC.photo}
          />
          <div className="d-flex">
            <div className="d-flex flex-column align-items-center justify-content-center">
              <label>NPC Name:</label>
              <input
                name="name"
                value={NPC.name}
                onChange={onChangeHandler}
                type="text"
              />
              {errors.name ? <p>{errors.name.message}</p> : null}
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center">
              <label>Health:</label>
              <input
                name="health"
                value={NPC.health}
                onChange={onChangeHandler}
                type="number"
              />
              {errors.health ? <p>{errors.health.message}</p> : null}
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center">
              <label>Attack:</label>
              <input
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
            <label>Occupation:</label>
            <input
              name="occupation"
              value={NPC.occupation}
              onChange={onChangeHandler}
              type="text"
            />
            <div className="d-flex flex-column align-items-center justify-content-center">
              <label style={{ textAlign: "center", width: "300px" }}>
                What is something they want?
              </label>
              <textarea
                style={{ height: "100px", width: "300px" }}
                name="want"
                value={NPC.want}
                onChange={onChangeHandler}
                type="text"
              />
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center">
              <label style={{ textAlign: "center", width: "300px" }}>
                What is some information they know?
              </label>
              <textarea
                style={{ height: "100px", width: "300px" }}
                name="infoTheyKnow"
                value={NPC.infoTheyKnow}
                onChange={onChangeHandler}
                type="text"
              />
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center">
              <label style={{ textAlign: "center", width: "300px" }}>
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
              <label style={{ textAlign: "center", width: "300px" }}>
                Do they have allies?
              </label>
              <textarea
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
              <label style={{ textAlign: "center", width: "300px" }}>
                Do they have any unique physical characteristics?
              </label>
              <textarea
                style={{ height: "100px", width: "300px" }}
                name="PhysicalChar"
                value={NPC.PhysicalChar}
                onChange={onChangeHandler}
                type="text"
              />
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center">
              <label style={{ textAlign: "center", width: "300px" }}>
                What is their a character flaw or an ideal they hold dearly?
              </label>
              <textarea
                style={{ height: "100px", width: "300px" }}
                name="flawOrIdeal"
                value={NPC.flawOrIdeal}
                onChange={onChangeHandler}
                type="text"
              />
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center">
              <label style={{ textAlign: "center", width: "300px" }}>
                Do they have any valuables?
              </label>
              <textarea
                style={{ height: "100px", width: "300px" }}
                name="valuables"
                value={NPC.valuables}
                onChange={onChangeHandler}
                type="text"
              />
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center">
              <label style={{ textAlign: "center", width: "300px" }}>
                Do they have any juicy secrets?
              </label>
              <textarea
                style={{ height: "100px", width: "300px" }}
                name="secrets"
                value={NPC.secrets}
                onChange={onChangeHandler}
                type="text"
              />
            </div>
          </div>

          <div className="mx-3 d-flex flex-column justify-content-center align-items-center">
            <label style={{ width: "300px", textAlign: "center" }}>
              NPC Notes
            </label>
            <textarea
              style={{ height: "300px", width: "400px" }}
              name="NPCNotes"
              value={NPC.NPCNotes}
              onChange={onChangeHandler}
              type="text"
            />
          </div>
          <div className="mx-3 d-flex flex-column justify-content-center align-items-center">
            <label>Image:</label>
            <input
              name="photo"
              value={NPC.photo}
              onChange={onChangeHandler}
              type="text"
            />
          </div>
        </div>
        <div className="mt-3 d-flex justify-content-center">
          <Link className=" mx-5 btn btn-secondary" to={navigateUrl}>
            Back
          </Link>
          <button type="submit" className=" btn btn-dark">
            {nameOfForm} NPC
          </button>
        </div>
      </form>
    </div>
  );
}

export default NPCForm;
