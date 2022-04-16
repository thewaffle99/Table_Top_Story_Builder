import React from "react";
import { Link } from "react-router-dom";

function PlaceForm(props) {
  const { place, setPlace, submitHandler, errors, nameOfForm, navigateUrl } =
    props;

  const onChangeHandler = (e) => {
    const newStateObject = { ...place };
    newStateObject[e.target.name] = e.target.value;

    console.log("e.target.name = ", e.target.name);
    console.log("e.target.value = ", e.target.value);
    setPlace(newStateObject);
  };
  return (
    <div className="m-5">
      <form onSubmit={submitHandler}>
        <div className="mb-5 d-flex flex-column align-items-center justify-content-center">
          <img
            style={{ width: "200px" }}
            className="d-flex flex-column align-items-center justify-content-center"
            src={place.photo}
          />
          <label className="headingTextStyle">Place Name:</label>
          <input
            className="oldTimeyTextStyle"
            name="name"
            value={place.name}
            onChange={onChangeHandler}
            type="text"
          />
          {errors.name ? <p>{errors.name.message}</p> : null}
        </div>
        <div className="d-flex align-items-start justify-content-center">
          <div className=" d-flex flex-column align-items-center justify-content-center">
            <label className="headingTextStyle">
              Who are their enemies? Why?
            </label>
            <textarea
              className="oldTimeyTextStyle"
              style={{ height: "100px", width: "300px" }}
              name="enemies"
              value={place.enemies}
              onChange={onChangeHandler}
              type="text"
            />
            <label
              className="headingTextStyle"
              style={{ width: "300px", textAlign: "center" }}
            >
              Who are their allies? Why?
            </label>
            <textarea
              className="oldTimeyTextStyle"
              style={{ height: "100px", width: "300px" }}
              name="allies"
              value={place.allies}
              onChange={onChangeHandler}
              type="text"
            />
            <label
              className="headingTextStyle"
              style={{ width: "300px", textAlign: "center" }}
            >
              What what makes this place unique? Is it a city, town, forrest...?
            </label>
            <textarea
              className="oldTimeyTextStyle"
              style={{ height: "100px", width: "300px" }}
              name="uniqueFeatures"
              value={place.uniqueFeatures}
              onChange={onChangeHandler}
              type="text"
            />
          </div>
          <div className="mx-5 d-flex flex-column align-items-center justify-content-center">
            <label className="headingTextStyle" style={{ textAlign: "center" }}>
              Who would they be suprised to see?
            </label>
            <textarea
              className="oldTimeyTextStyle"
              style={{ height: "100px", width: "300px" }}
              name="suprisedToSeeWho"
              value={place.suprisedToSeeWho}
              onChange={onChangeHandler}
              type="text"
            />
            <label className="headingTextStyle" style={{ textAlign: "center" }}>
              What would they be suprised to see?
            </label>
            <textarea
              className="oldTimeyTextStyle"
              style={{ height: "100px", width: "300px" }}
              name="suprisedToSeeWhat"
              value={place.suprisedToSeeWhat}
              onChange={onChangeHandler}
              type="text"
            />
            <label
              className="headingTextStyle"
              style={{ width: "300px", textAlign: "center" }}
            >
              Does this place have any prejudices?
            </label>
            <textarea
              className="oldTimeyTextStyle"
              style={{ height: "100px", width: "300px" }}
              name="prejudices"
              value={place.prejudices}
              onChange={onChangeHandler}
              type="text"
            />
          </div>
          <div className="mx-3 d-flex flex-column justify-content-center align-items-center">
            <label
              className="headingTextStyle"
              style={{ width: "300px", textAlign: "center" }}
            >
              Place Notes
            </label>
            <textarea
              className="oldTimeyTextStyle"
              style={{ height: "300px", width: "400px" }}
              name="placeNotes"
              value={place.placeNotes}
              onChange={onChangeHandler}
              type="text"
            />
            <label className="mt-5 headingTextStyle">Image:</label>
            <input
              className="oldTimeyTextStyle"
              name="photo"
              value={place.photo}
              onChange={onChangeHandler}
              type="text"
            />
          </div>
          <div className="mx-3 d-flex flex-column justify-content-center align-items-center"></div>
        </div>
        <div className="d-flex justify-content-center">
          <Link className=" mx-5 btn btn-secondary" to={navigateUrl}>
            Back
          </Link>
          <button type="submit" className=" btn btn-dark">
            {nameOfForm} Place
          </button>
        </div>
      </form>
    </div>
  );
}

export default PlaceForm;
