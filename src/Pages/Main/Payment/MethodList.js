import React, { Component } from "react";

class MethodList extends Component {
  render() {
    const { light, img, text, index } = this.props;

    return (
      <div className="MethodList">
        <div className="list-light-index">
          {index}
          {/* <div className={light ? "option-list" : "option-list-light"}> 보류 */}
          <div className="option-list">
            <div className="list-img-box">
              <img alt="카카오페이" src={img} />
            </div>
            <div className="option-text">{text}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default MethodList;
