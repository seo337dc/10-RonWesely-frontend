import React, { Component } from "react";
import ProductNav from "./ProductNav";
import "./Nav.scss";

class Nav extends Component {
  constructor() {
    super();

    this.state = {
      valid: false,
    };
  }

  handleProductNav = () => {
    this.setState({
      valid: !this.state.valid,
    });
  };

  render() {
    return (
      <>
        <div className="MainNav">
          <div className="div_header-wrapper-subscription-bg-active">
            <div className="div_scroll-wrapper-inserted">
              <header className="header_padding">
                <div className="div_contain-wrapper">
                  <h1 className="h1_wesely-logo">
                    <span role="link" tabIndex="0" className="span_home-link">
                      <img
                        alt="wesely-logo"
                        className="img_logo"
                        src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/WiselyLogo.svg"
                      />
                    </span>
                  </h1>
                  <nav className="nav_inserted">
                    <div className="div_contents-wrapper">
                      <ul role="menubar" className="ul_contents">
                        <li className="li_items-inserted">
                          <h2 className="h2_item">
                            <span
                              role="link"
                              tabIndex="0"
                              className="span_link-active"
                            >
                              시작하기
                            </span>
                          </h2>
                        </li>
                        <li className="li_items">
                          <h2 className="h2_item">
                            <span
                              role="menuitem"
                              tabIndex="0"
                              className="span_link"
                            >
                              <span
                                className="span_arrow-wrapper"
                                onClick={this.handleProductNav}
                              >
                                상품보기
                              </span>
                            </span>
                          </h2>
                        </li>
                        <li className="li_items-inserted">
                          <h2 className="h2_item">
                            <span
                              role="link"
                              tabIndex="0"
                              className="span_link-limited-purchase"
                            >
                              대용량 팩 할인
                              <span className="span_limited-purchase">
                                최대 20%
                              </span>
                            </span>
                          </h2>
                        </li>
                        <li className="li_items">
                          <h2 className="h2_item">
                            <span
                              role="menuitem"
                              tabIndex="0"
                              className="span_link"
                            >
                              <span className="span_arrow-wrapper">
                                론위즐리 이야기
                              </span>
                            </span>
                          </h2>
                        </li>
                        <li className="li_items">
                          <h2 className="h2_item">
                            <span
                              role="menuitem"
                              tabIndex="0"
                              className="span_link"
                            >
                              <span className="span_arrow-wrapper">
                                고객센터
                              </span>
                            </span>
                          </h2>
                        </li>
                      </ul>
                    </div>
                  </nav>
                  <div className="div_user-info-wrapper">
                    <span role="link" className="span_login">
                      로그인
                    </span>
                    <div className="div_basket-wrapper">
                      <span className="span_basket">장바구니</span>
                      <div className="div_basket-quantity-wrapper">
                        <span className="span_quantity-count">0</span>
                      </div>
                    </div>
                  </div>
                </div>
              </header>
            </div>
          </div>
        </div>
        <div className={this.state.valid === true ? "visible" : "unvisible"}>
          <ProductNav className="ProductNav" />
        </div>
      </>
    );
  }
}

export default Nav;
