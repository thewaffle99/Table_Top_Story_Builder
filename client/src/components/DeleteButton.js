import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const DeleteButton = (props) => {
  const { id, type, navigateUrl } = props;
  const navigate = useNavigate();

  const deleteHandler = () => {
    axios
      .delete(`http://localhost:8000/api/${type}/${id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        navigate(navigateUrl);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="mx-5">
      <button onClick={deleteHandler} className="btn btn-danger">
        Delete
      </button>
    </div>
  );
}

export default DeleteButton;
