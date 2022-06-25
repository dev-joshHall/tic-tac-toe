import React from "react";

const Title = () => {
  return (
    <React.Fragment>
      <h1
        className="h1 border rounded-bottom title shadow"
        style={{ textAlign: "center" }}
      >
        <img
          src={require("../ttt-logo.png")}
          alt="logo img"
          className="m-3 rotate"
        />
        <span
          className="m-5"
          style={{ fontFamily: "Impact, fantasy", color: "white" }}
        >
          Tic-Tac-Toe
        </span>
        <img
          src={require("../ttt-logo.png")}
          alt="logo img"
          className="m-3 rotate"
        />
      </h1>
    </React.Fragment>
  );
};

export default Title;
