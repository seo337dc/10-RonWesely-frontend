import React, { Component } from "react";
import "./Nav.scss";

class Nav extends Component {
  render() {
    return (
      <>
        <div className="Nav">
          <div className="div_header-wrapper">
            <header className="header">
              <div className="div_contain-wrapper">
                <h1 className="h1_wesely-home">
                  <span>
                    <img
                      alt
                      className="img_logo"
                      src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/WiselyLogo.svg"
                    />
                  </span>
                </h1>
                <nav className="nav">
                  <div className="div_modal-wrapper">
                    <ul role="menubar" className="ul_list">
                      <li className="li_list-item-star-inserted">
                        <h2 className="h2_item">
                          <span
                            role="link"
                            tabindex="0"
                            className="span_link-active"
                          >
                            시작하기
                          </span>
                        </h2>
                      </li>
                      <li className="li_list-item">
                        <h2 className="h2_item">
                          <span
                            className="span_link"
                            tabindex="0"
                            role="menuitem"
                            aria-haspopup="true"
                            aria-expanded="true"
                          >
                            <span className="span_arrow-wrapper">상품보기</span>
                          </span>
                        </h2>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </header>
          </div>
        </div>
      </>
    );
  }
}

export default Nav;
