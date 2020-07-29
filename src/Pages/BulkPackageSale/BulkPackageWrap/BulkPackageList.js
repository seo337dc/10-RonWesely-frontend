import React, { Component } from "react";
import "./BulkPackageList.scss";

class BulkPackageList extends Component {
  render() {
    const { product, handleActive, index, id } = this.props;

    return (
      <div className="BulkPackageList">
        <li className={product.active ? "option-item active" : "option-item"}>
          <div
            className="item-text-wrapper"
            onClick={() => handleActive(index, id)}
          >
            <div className="flex-left">
              <div
                className={
                  product.active
                    ? "product-option-radio active"
                    : "product-option-radio"
                }
              />
              <span className="item-title">{product.ea} </span>
              <div className="discount-rate-wrapper">
                <span className="discount-rate">{product.discount}</span>
              </div>
            </div>
            <div className="flex-right">
              <span className="item-discount-price">{product.price}</span>
            </div>
          </div>
        </li>
      </div>
    );
  }
}

export default BulkPackageList;
