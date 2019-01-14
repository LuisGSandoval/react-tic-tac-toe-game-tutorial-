import React from "react";
import Square from "./Square";

export default class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }
  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

// import React from "react";
// import Square from "./Square";

// export default class Board extends React.Component {
//   state = {
//     values: Array(9).fill(null),
//     xIsNext: true
//   };

//   printPlayerToken(i) {
//     const values = this.state.values;
//     if (calculateWinner(values) || values[i]) {
//       return;
//     }
//     values[i] = this.state.xIsNext ? "X" : "O";
//     this.setState({ values, xIsNext: !this.state.xIsNext });
//   }
//   renderSquare(i) {
//     return (
//       <Square
//         value={this.state.values[i]}
//         onClick={() => this.printPlayerToken(i)}
//       />
//     );
//   }
//   render() {
//     const winner = calculateWinner(this.state.values);
//     let nextPlayer;
//     if (winner) {
//       nextPlayer = `Winner: ${winner}`;
//     } else {
//       nextPlayer = `Next player is:  ${this.state.xIsNext ? "x" : "o"}`;
//     }

//     return (
//       <div>
//         <div className=""> {nextPlayer} </div>
//         <div className="board-row">
//           {this.renderSquare(0)}
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(3)}
//           {this.renderSquare(4)}
//           {this.renderSquare(5)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(6)}
//           {this.renderSquare(7)}
//           {this.renderSquare(8)}
//         </div>
//       </div>
//     );
//   }
// }

// function calculateWinner(squares) {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
//   ];
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a];
//     }
//   }
//   return null;
// }

// // import React from "react";
// // import Square from "./Square";

// // export default class Tablero extends React.Component {
// //   state = {
// //     values: Array(9).fill(null)
// //   };

// //   ponerTokenDelJugador(i) {
// //     const values = this.state.values.slice();
// //     values[i] = "X";
// //     this.setState({ values });
// //   }

// //   renderSquare(i) {
// //     return (
// //       <Square
// //         value={this.state.values[i]}
// //         // onClick={() => this.ponerTokenDelJugador(i)}
// //         onClick={this.ponerTokenDelJugador.bind(this, i)}
// //       />
// //     );
// //   }
// //   render() {
// //     return (
// //       <div>
// //         <div className="board-row">
// //           {this.renderSquare(0)}
// //           {this.renderSquare(2)}
// //           {this.renderSquare(3)}
// //         </div>
// //         <div className="board-row">
// //           {this.renderSquare(4)}
// //           {this.renderSquare(5)}
// //           {this.renderSquare(6)}
// //         </div>
// //         <div className="board-row">
// //           {this.renderSquare(7)}
// //           {this.renderSquare(8)}
// //           {this.renderSquare(9)}
// //         </div>
// //       </div>
// //     );
// //   }
// // }

// // // import React from "react";
// // // import Square from "./Square";

// // // class Board extends React.Component {
// // //   state = {
// // //     squares: Array(9).fill(null)
// // //   };

// // //   renderSquare(i) {
// // //     return (
// // //       <Square
// // //         value={this.state.squares[i]}
// // //         onClick={() => this.handleClick(i)}
// // //       />
// // //     );
// // //   }
// // //   handleClick(i) {
// // //     const squares = this.state.squares;
// // //     squares[i] = "x";
// // //     this.setState({ squares });

// // //     console.log("hola");
// // //   }

// // //   render() {
// // //     const player = "Next player X:";
// // //     return (
// // //       <div>
// // //         <div className="status">{player}</div>
// // //         <div className="board-row">
// // //           {this.renderSquare(0)}
// // //           {this.renderSquare(1)}
// // //           {this.renderSquare(2)}
// // //         </div>
// // //         <div className="board-row">
// // //           {this.renderSquare(3)}
// // //           {this.renderSquare(4)}
// // //           {this.renderSquare(5)}
// // //         </div>
// // //         <div className="board-row">
// // //           {this.renderSquare(6)}
// // //           {this.renderSquare(7)}
// // //           {this.renderSquare(8)}
// // //         </div>
// // //       </div>
// // //     );
// // //   }
// // // }

// // // export default Board;
