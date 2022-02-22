import React from "react";
import title from "./imgs/title.png";

function Header() {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <img
        src={title}
        alt="Title"
        style={{ height: "300px", marginBottom: "-20px", marginTop: "-70px" }}
      />
    </div>
  );
}

export default Header;
