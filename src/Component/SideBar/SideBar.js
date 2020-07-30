import React, { Component } from "react";
import SelectShaveColor from "../SideBarComponent/SelectShaveColor";
import SelectBasket from "../SideBarComponent/SelectBasket";
import "./SideBar.scss";

class SideBar extends Component {
  state = {
    changeSideBarValid: this.props.changeSideBarValid,

    category: [
      { index: 0, title: "면도기 색상 선택" },
      { index: 1, title: "장바구니" },
    ],

    nowCateIndex: 1,
  };

  handleCancelSideBar = () => {
    this.state.changeSideBarValid(this.props.sideBarValid);
    this.setState({ nowCateIndex: 0 });
  };

  handleChangeColor = (color) => {
    this.setState({
      colorNow: color,
    });
  };

  handleChangeSideBar = (index) => {
    this.setState({
      nowCateIndex: index + 1,
    });
  };

  render() {
    const { sideBarValid } = this.props;
    const { category, nowCateIndex } = this.state;

    const nowCatecory = nowCateIndex ? category[nowCateIndex] : category[0];

    return (
      <div className={sideBarValid ? "SideBar" : "SideBar-none"}>
        {/* <div className="SideBar"> 주기적으로 테스트가 필요하므로 주석 처리*/}
        <div className="top">
          <img
            src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/arrow/backArrow.svg"
            onClick={this.handleCancelSideBar}
          />
          <p>{nowCatecory.title}</p>
        </div>

        <div className="center">
          {/* 면도기 색상 선택 컴포넌트 */}
          {/* {this.state.nowCateIndex === 0 && (
              <SelectShaveColor
                index={this.state.nowCateIndex}
                handleChangeSideBar={this.handleChangeSideBar}
              />
            )} */}

          {/* 장바구니 컴포넌트 */}
          <SelectBasket />
        </div>
      </div>
    );
  }
}

export default SideBar;
