import React, { Component } from "react";

class MethodList extends Component {
  state = {
    active: true,
  };

  listActive = () => {
    this.setState({
      active: !this.state.active,
    });
  };

  render() {
    const { active } = this.state;
    const { img, text } = this.props;
    const { listActive } = this;
    return (
      <div className="MethodList">
        <div className="list-light-index">
          <div
            className={`option-list ${!active ? "active" : ""}`}
            onClick={listActive}
          >
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
