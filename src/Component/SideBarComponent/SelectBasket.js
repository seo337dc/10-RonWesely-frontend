import React, { Component } from "react";
import SelectCart from "./SelectCart";
import "./SelectBasket.scss";

class SelectBasket extends Component {
  render() {
    return (
      <div className="SelectBasket">
        <SelectCart />
      </div>
    );
  }
}

export default SelectBasket;
