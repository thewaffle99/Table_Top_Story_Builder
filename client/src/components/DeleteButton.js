import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

function DeleteButton(props) {
  const { id, type } = props;
  const navigate = useNavigate();
  const deleteHandler = () => {
    axios
      .delete(`http://localhost:8000/api/${type}/${id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="mx-5" style={{ marginTop: "-30px" }}>
      <button onClick={deleteHandler} className="btn btn-danger">
        Delete
      </button>
    </div>
  );
}

export default DeleteButton;
