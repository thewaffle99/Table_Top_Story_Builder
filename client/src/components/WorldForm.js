import React from "react";
import { Link } from "react-router-dom";

function WorldForm(props) {
  const { world, setWorld, submitHandler, errors, nameOfForm } = props;

  const onChangeHandler = (e) => {
    const newStateObject = { ...world };
    newStateObject[e.target.name] = e.target.value;

    console.log("e.target.name = ", e.target.name);
    console.log("e.target.value = ", e.target.value);
    setWorld(newStateObject);
  };

  return (
    <div className=" mt-5 d-flex justify-content-around">
      <form onSubmit={submitHandler}>
        <div className=" d-flex flex-column align-items-center justify-content-around">
          <div className="mb-5 d-flex flex-column align-items-center">
            <label className="headingTextStyle">World Name:</label>
            <input
              className="oldTimeyTextStyle"
              name="name"
              value={world.name}
              onChange={onChangeHandler}
              type="text"
            />
            {errors.name ? <p>{errors.name.message}</p> : null}
          </div>
          <div className="d-flex align-items-start">
            <div className="mx-5 d-flex flex-column align-items-center">
              <div className=" d-flex flex-column align-items-center">
                <label
                  className="headingTextStyle"
                  style={{ height: "50px", width: "800px" }}
                >
                  What is the backstory of this world..? Go as far back as
                  reasonable to set the stage. This is the foundation of your
                  story take your time. Have fun here! Are we in space? Are we
                  in the ocean? Are there multiple races or creatures? Is there
                  magic common? How common is it?
                </label>
                <textarea
                  className="my-5 oldTimeyTextStyle"
                  style={{ height: "150px", width: "800px" }}
                  name="worldBackStory"
                  value={world.worldBackStory}
                  onChange={onChangeHandler}
                />
                {errors.worldBackStory ? (
                  <p>{errors.worldBackStory.message}</p>
                ) : null}
              </div>
              <div className="d-flex flex-column align-items-center">
                <label
                  className="headingTextStyle"
                  style={{ height: "50px", width: "800px" }}
                >
                  What is the catalyst that will get your characters on a common
                  goal? i.e. An evil doer is captured a princess, space clowns
                  are invading, they all suddenly are late to a party, etc.
                </label>
                <textarea
                  className="my-5 oldTimeyTextStyle"
                  style={{ height: "150px", width: "800px" }}
                  name="worldCatalyst"
                  value={world.worldCatalyst}
                  onChange={onChangeHandler}
                />
                {errors.worldCatalyst ? (
                  <p>{errors.worldCatalyst.message}</p>
                ) : null}
              </div>
            </div>
            <div>
              <div className="d-flex flex-column align-items-center">
                <label
                  className="headingTextStyle"
                  style={{ height: "50px", width: "500px" }}
                >
                  Use this space to create Plot Points. As your team adventures
                  you will need to log the big plot points of their adventure to
                  keep track.
                </label>
                <textarea
                  className="my-5 oldTimeyTextStyle"
                  style={{ height: "400px", width: "500px" }}
                  name="worldPlotPoints"
                  value={world.worldPlotPoints}
                  onChange={onChangeHandler}
                />
              </div>
            </div>
          </div>
          <div>
            <Link className=" mx-5 btn btn-secondary" to="/home">
              Back
            </Link>
            <button type="submit" className=" btn btn-dark">
              {nameOfForm} World
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default WorldForm;
