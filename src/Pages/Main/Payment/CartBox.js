import React, { Component } from "react";
import "./CartBox.scss";

class CartBox extends Component {
  render() {
    const {
      item_name,
      color,
      price,
      description,
      quantity,
      image_url,
    } = this.props;
    return (
      <div className="CartBox">
        <div className="selected-item-box-wrapper">
          <div className="item-image-box">
            <img alt="goodsImg" className="selected-image" src={image_url} />
          </div>
          <div className="item-info-box">
            <div className="left">
              <div className="title">
                {`${item_name}-`}
                <span className="quantity"> {`${quantity}개`}</span>
              </div>
              <div className="description">
                <span className="option-value-navy">{color}</span>
                <span className="inserted">{description}</span>
              </div>
            </div>
            <div className="price">{`${Number(price).toLocaleString()}원`}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default CartBox;
