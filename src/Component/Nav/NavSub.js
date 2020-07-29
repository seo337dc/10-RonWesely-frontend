import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./NavSub.scss";

class NavSub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [
        {
          alt: "선물세트",
          className: "gift-set",
          src:
            "https://wiselyshave-cdn.s3.amazonaws.com/assets/images/navigation/gift_set.png",
          index: 1,
        },
        {
          alt: "면도기세트",
          className: "others",
          src:
            "https://wiselyshave-cdn.s3.amazonaws.com/assets/images/navigation/starter_navy.png",
          index: 2,
        },
        {
          alt: "리필 면도날",
          className: "others",
          src:
            "https://wiselyshave-cdn.s3.amazonaws.com/assets/images/navigation/refill_blade.png",
          index: 3,
        },
        {
          alt: "쉐이빙 젤",
          className: "others",
          src:
            "https://wiselyshave-cdn.s3.amazonaws.com/assets/images/navigation/shaving_gel_150.png",
          index: 4,
        },
        {
          alt: "애프터쉐이브",
          className: "others",
          src:
            "https://wiselyshave-cdn.s3.amazonaws.com/assets/images/navigation/after_shaving_gel_oily_60.png",
          index: 5,
        },
      ],
    };
  }

  handleProductComponent = (index) => {
    this.props.handleProductNav();

    this.props.history.push({
      pathname: "/product",
      state: { index: index },
    });
  };

  render() {
    const { subNavActive } = this.props;

    return (
      <div className="NavSub">
        <ul role="menu" className="product-sub-nav">
          <div className="sub-nav-wrapper">
            {this.state.info.map((category) => (
              <li key={category.index} role="menuitem" className="sub-nav-item">
                <div role="menuitem" tabIndex="1" className="nav-item">
                  <img
                    alt={category.alt}
                    className={category.className}
                    src={category.src}
                    onClick={() => this.handleProductComponent(category.index)}
                  />
                  <span className="item-name">{category.alt}</span>
                </div>
              </li>
            ))}
          </div>
        </ul>
      </div>
    );
  }
}

export default withRouter(NavSub);
