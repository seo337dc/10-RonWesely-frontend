import React, { Component } from "react";
<<<<<<< HEAD
import "./CartBox.scss";
=======
import "./Payment.scss";
>>>>>>> master

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
<<<<<<< HEAD
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
=======
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
            <div className="item-info-price">{`${Number(
              price
            ).toLocaleString()}원`}</div>
>>>>>>> master
          </div>
        </div>
      </div>
    );
  }
}

export default CartBox;
