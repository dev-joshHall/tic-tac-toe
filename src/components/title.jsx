import React from "react";

const Title = () => {
  return (
    <div style={{ width: "100%" }}>
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
    </div>
  );
};

export default Title;
