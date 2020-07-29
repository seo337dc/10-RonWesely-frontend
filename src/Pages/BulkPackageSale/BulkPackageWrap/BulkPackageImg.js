import React, { Component } from "react";
import "./BulkPackageImg.scss";

class BulkPackageImg extends Component {
  render() {
    const { img } = this.props;
    return (
      <div className="BulkPackageImg">
        <img alt="리필면도날" className="product-image" src={img} />
      </div>
    );
  }
}

export default BulkPackageImg;
