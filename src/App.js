import React from "react";
import ShoppingList from "./ShoppingList";
// import Square from "./Square";
// import Board from "./Board";
import Game from "./Game";

class App extends React.Component {
  render() {
    return (
      <div>
        <ShoppingList name="Luis Sandoval" />

        <Game />
      </div>
    );
  }
}

export default App;
