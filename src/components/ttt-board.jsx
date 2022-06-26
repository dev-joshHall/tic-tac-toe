import React from "react";
import Square from "./square";

const Board = (props) => {
  return (
    <div className="board border rounded m-6 shadow">
      <span
        className="badge border bg-light m-3 py-2 shadow"
        style={{ fontFamily: "Arial Black", fontSize: "20px", width: "8em" }}
      >
        {props.winner === "X" || props.winner === "O"
          ? `${props.winner}'s Win!!`
          : props.winner
          ? "Cat's Game"
          : `${props.turn}'s Turn`}
      </span>
      <br />
      {props.buttons.map((x) => {
        if (x.key < 4) {
          return (
            <Square
              key={x.key}
              keyName={x.key}
              squareVal={x.val}
              onPlayMove={props.onPlayMove}
              winner={props.winner}
            ></Square>
          );
        }
        return null;
      })}
      <br />
      {props.buttons.map((x) => {
        if (x.key > 3 && x.key < 7) {
          return (
            <Square
              key={x.key}
              keyName={x.key}
              squareVal={x.val}
              onPlayMove={props.onPlayMove}
              winner={props.winner}
            ></Square>
          );
        }
        return null;
      })}
      <br />
      {props.buttons.map((x) => {
        if (x.key > 6) {
          return (
            <Square
              key={x.key}
              keyName={x.key}
              squareVal={x.val}
              onPlayMove={props.onPlayMove}
              winner={props.winner}
            ></Square>
          );
        }
        return null;
      })}
      <br />
      <button className="btn m-4 shadow reset" onClick={props.clearBoard}>
        Reset
      </button>
    </div>
  );
};

export default Board;
