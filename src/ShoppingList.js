import React from "react";
class ShoppingList extends React.Component {
  state = {
    listItems: ["Instagram", "Whatsapp", "Oculus"]
  };
  render() {
    return (
      <div className="ShoppingList">
        <h1>Shopping list for {this.props.name}</h1>

        <ul>
          {this.state.listItems.map((item, i) => (
            <li key={i}> {item} </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ShoppingList;
