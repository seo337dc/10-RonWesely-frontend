import React, { Component } from "react";
import "./SelectCart.scss";

class SelectCart extends Component {
  state = {
    item_name: "선물세트",
    color: "미드나이트네이비",
    price: "29,800",
    description: "",
    quantity: "1",
    image_url:
      "https://wiselyshave-cdn.s3.amazonaws.com/assets/images/items/gift_set/gift_set_navy.png",
  };
  render() {
    const {
      item_name,
      color,
      price,
      description,
      quantity,
      image_url,
    } = this.state;
    return (
      <div className="SelectCart">
        <div className="selected-item-box-wrapper">
          <div className="item-image-box">
            <img alt="goodsImg" className="selected-image" src={image_url} />
          </div>
          <div className="item-info-box">
            <div className="item-info-left">
              <div className="item-info-title">
                {`${item_name}-`}
                <span className="item-info-quantity"> {`${quantity}개`}</span>
              </div>
              <div className="item-info-description">
                <span className="item-info-option-value-navy">{color}</span>
                <span className="inserted">{description}</span>
              </div>
            </div>
            <div className="item-info-price">{price} 원</div>
          </div>
        </div>
      </div>
    );
  }
}

export default SelectCart;
