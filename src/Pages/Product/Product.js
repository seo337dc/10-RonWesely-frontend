import React, { Component } from "react";
import Nav from "../../Component/Nav/Nav";
import SetPresent from "./ProductList/SetPresent";
import SideBar from "../../Component/SideBar/SideBar";
import "./Product.scss";

class Product extends Component {
  constructor() {
    super();

    this.state = {
      sideBarValid: false,
    };
  }

  changeSideBarValidInSideBar = (check) => {
    this.setState({
      sideBarValid: !check,
    });
  };

  changeSideBarValidInProduct = () => {
    this.setState({
      sideBarValid: !this.state.sideBarValid,
    });
  };

  render() {
    const index = !this.props.location.state
      ? 1
      : this.props.location.state.index;

    return (
      <>
        <div className={this.state.sideBarValid ? "Product-fixed" : ""}></div>
        <SideBar
          sideBarValid={this.state.sideBarValid}
          changeSideBarValid={this.changeSideBarValidInSideBar}
        />

        <Nav
          activeProductNav={index}
          changeSideBarValidInProduct={this.changeSideBarValidInProduct}
        />

        <div className={this.state.sideBarValid ? "Product-none" : "Product"}>
          {index === 1 && <SetPresent />}
          {index === 2 && <div></div>}
          {index === 3 && <div></div>}
          {index === 4 && <div></div>}
          {index === 5 && <div></div>}
        </div>
      </>
    );
  }
}

export default Product;
