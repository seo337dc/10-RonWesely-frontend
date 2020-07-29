import React, { Component } from "react";

class MethodList extends Component {
  state = {
    active: true,
  };

  getIndex = () => {
    const { index } = this.props;
    console.log(this.props.index);
    if (
      index === 0 ||
      index === 1 ||
      index === 2 ||
      index === 3 ||
      index === 4
    ) {
      this.setState({
        active: !this.state.active,
      });
    }
  };

  render() {
    const { active } = this.state;
    const { img, text, handlechangeActive } = this.props;
    const { getIndex } = this;
    return (
      <div className="MethodList">
        <div
          className="list-light-index"
          // onClick={handlechangeActive(this.props.index)}
          onClick={getIndex}
        >
          <div className={active ? "option-list" : "option-list-active"}>
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
