import React, { Component } from "react";

class MethodList extends Component {
  render() {
    const { img, text } = this.props;
    return (
      <div className="MethodList">
        <div className="option-list">
          <div className="list-img-box">
            <img alt="카카오페이" src={img} />
          </div>
          <div className="option-text">{text}</div>
        </div>
      </div>
    );
  }
}

export default MethodList;
