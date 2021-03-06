import React, { Component } from "react";
import "./App.css";
import Title from "./components/title";
import Board from "./components/ttt-board";

class App extends Component {
  state = {
    buttons: [...Array(9).keys()].map((x) => {
      return { key: x + 1, val: " ", color: "normal" };
    }),
    turn: "O",
    winner: "",
  };

  render() {
    return (
      <React.Fragment>
        <Title />
        <Board
          turn={this.state.turn}
          winner={this.state.winner}
          buttons={this.state.buttons}
          onPlayMove={this.playMove}
          clearBoard={this.clearBoard}
        />
      </React.Fragment>
    );
  }

  clearBoard = () => {
    let buttons = [...this.state.buttons];
    buttons = [...Array(9).keys()].map((x) => {
      return { key: x + 1, val: " ", color: "normal" };
    });
    this.setState({ buttons });
    this.setState({ winner: "" });
    this.setState({ turn: "O" });
  };

  playMove = (squareKey) => {
    for (const btn of this.state.buttons) {
      if (btn.key === squareKey && btn.val !== " ") {
        return; // stop illegal move on filled square
      }
    }

    console.log("Playing " + this.state.turn + " for square " + squareKey);
    let buttons = [...this.state.buttons];
    buttons = buttons.map((x) => {
      return x.key === squareKey
        ? { key: x.key, val: x.val === " " ? this.state.turn : x.val }
        : x;
    });
    this.setState({ buttons });

    const turn = this.state.turn === "X" ? "O" : "X";
    this.setState({ turn }, this.checkWin);
  };

  checkWin = () => {
    const btnVals = this.state.buttons.map((x) => {
      return x.val;
    });
    // complete all checks for each symbol
    for (const sym of ["X", "O"]) {
      // check for horizontal wins
      for (let i = 0; i < 9; i += 3) {
        if (
          btnVals[i] === sym &&
          btnVals[i + 1] === sym &&
          btnVals[i + 2] === sym
        ) {
          console.log(sym + "'s won!");
          this.setState({ winner: sym });
          return;
        }
      }
      // check for vertical wins
      for (let i = 0; i < 3; i++) {
        if (
          btnVals[i] === sym &&
          btnVals[i + 3] === sym &&
          btnVals[i + 6] === sym
        ) {
          console.log(sym + "'s won!");
          this.setState({ winner: sym });
          return;
        }
      }
      // check for diagonal wins
      if (btnVals[0] === sym && btnVals[4] === sym && btnVals[8] === sym) {
        console.log(sym + "'s won!");
        this.setState({ winner: sym });
        return;
      }
      if (btnVals[2] === sym && btnVals[4] === sym && btnVals[6] === sym) {
        console.log(sym + "'s won!");
        this.setState({ winner: sym });
        return;
      }
    }
    // check for cat's game
    let filledSquares = 0;
    for (const val of btnVals) {
      if (val === "X" || val === "O") {
        filledSquares++;
      }
    }
    if (filledSquares === 9) {
      console.log("cat's game");
      this.setState({ winner: "Cat" });
      return;
    }
  };
}

export default App;
