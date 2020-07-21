import React, { Component } from "react";
import "./Main.scss";

class Main extends Component {
  render() {
    return (
      <>
        <div className="Main">
          <div className="Nav_test"></div>
          <div className="Nav_test2"></div>
          <div>
            <section className="section_subscription-main">
              <h2 className="h2_subscription-main-title">
                <strong>부담없이 시작해보세요.</strong>
                <br />첫 구독시 면도기 무료
              </h2>
              <span className="span_subscription-main-sub-title">
                면도기는 써봐야 아니까. 배송비는 언제나 무료에요.
              </span>
              <div className="div_btn-start">
                <button className="btn_start">시작하기</button>
              </div>
            </section>
            <section className="section_free">
              <h2 className="h2_free-title">
                낡은 면도날과 자극적인 면도로부터
                <br />
                <strong>자유로워지세요</strong>
              </h2>
              <div className="div_free-item-group">
                <div className="div_free-item">
                  <img
                    alt="img_item-shave"
                    className="img_item-image"
                    src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/background/subscription/subscription_free_icon_1.svg"
                  />
                  <p className="p_item-value">
                    부담없는 가격의 <br />
                    3-STEP 프리미엄 면도용품
                  </p>
                </div>
                <div className="div_free-item">
                  <img
                    alt="img_item-ship"
                    className="img_item-ship"
                    src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/background/subscription/subscription_free_icon_2.svg"
                  />
                  <p className="p_item-value">
                    건강한 주기에 맞춰 <br />
                    교체 알림을 드리고 배송해드려요.
                    <br />
                    배송비는 언제나 무료
                  </p>
                </div>
                <div className="div_free-item">
                  <img
                    alt="img_item-shave"
                    className="img_item-calander"
                    src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/background/subscription/subscription_free_icon_3.svg"
                  />
                  <p className="p_item-value">
                    언제나 변경,해지할 수 있어요.
                    <br />
                    카톡 하나만 보내면 끝!
                  </p>
                </div>
              </div>
            </section>
            <section className="section_smooth">
              <h2 className="h2_smooth-title">
                <strong>부드럽고 정교한 면도</strong>
                <br />
                독일산 5중 면도날
              </h2>
              <img
                alt="img_shave"
                className="img_smooth-image"
                src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/background/subscription/razor_navy.png"
              />
            </section>
          </div>
        </div>
      </>
    );
  }
}

export default Main;
