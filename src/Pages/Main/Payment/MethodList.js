import React, { Component } from "react";

class MethodList extends Component {
  render() {
<<<<<<< HEAD
    const { img, text, isActive, handleActive } = this.props;
=======
    const { light, img, text, index } = this.props;
>>>>>>> master

    return (
      <div className="MethodList">
        <div className="list-light-index">
<<<<<<< HEAD
          <div
            className={`option-list ${isActive === text ? "active" : ""}`}
            onClick={() => handleActive(text)}
          >
=======
          {index}
          {/* <div className={light ? "option-list" : "option-list-light"}> 보류 */}
          <div className="option-list">
>>>>>>> master
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
