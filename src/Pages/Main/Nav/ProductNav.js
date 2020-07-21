import React, { Component } from "react";
import "./ProductNav.scss";

class ProductNav extends Component {
  render() {
    return (
      <div className="ProductNav">
        <ul role="menu" className="ul_product-sub-nav">
          <div className="div_sub-nav-wrapper">
            <li role="menuitem" className="li_sub-nav-item">
              <a role="menuitem" tabIndex="1" className="a_nav-item">
                <img
                  alt="선물세트"
                  className="img_gift-set"
                  src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/navigation/gift_set.png"
                />
                <span className="span_item-name">선물세트</span>
              </a>
            </li>
            <li role="menuitem" className="li_sub-nav-item">
              <a role="menuitem" tabIndex="1" className="a_nav-item">
                <img
                  alt="면도기세트"
                  className="img_others"
                  src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/navigation/starter_navy.png"
                />
                <span className="span_item-name">면도기세트</span>
              </a>
            </li>
            <li role="menuitem" className="li_sub-nav-item">
              <a role="menuitem" tabIndex="1" className="a_nav-item">
                <img
                  alt="리필 면도날"
                  className="img_others"
                  src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/navigation/refill_blade.png"
                />
                <span className="span_item-name">리필 면도날</span>
              </a>
            </li>
            <li role="menuitem" className="li_sub-nav-item">
              <a role="menuitem" tabIndex="1" className="a_nav-item">
                <img
                  alt="쉐이빙 젤"
                  className="img_others"
                  src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/navigation/shaving_gel_150.png"
                />
                <span className="span_item-name">쉐이빙 젤</span>
              </a>
            </li>
            <li role="menuitem" className="li_sub-nav-item">
              <a role="menuitem" tabIndex="1" className="a_nav-item">
                <img
                  alt="애프터쉐이브"
                  className="img_others"
                  src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/navigation/after_shaving_gel_oily_60.png"
                />
                <span className="span_item-name">애프터쉐이브</span>
              </a>
            </li>
          </div>
        </ul>
      </div>
    );
  }
}

export default ProductNav;
