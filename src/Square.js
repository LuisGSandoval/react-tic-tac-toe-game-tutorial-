import React from "react";
export default ({ value, onClick }) => (
  <button className="square" onClick={onClick}>
    {value}
  </button>
);

// import React from "react";

// export default props => {
//   return (
//     <button className="square" onClick={() => props.onClick()}>
//       {props.value}
//     </button>
//   );
// };

// // import React from "react";

// // class Square extends React.Component {
// //   render() {
// //     return (
// //       <button className="square" onClick={() => this.props.onClick()}>
// //         {this.props.value}
// //       </button>
// //     );
// //   }
// // }
// // export default Square;
