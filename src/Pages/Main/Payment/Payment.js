import React, { Component } from "react";
import MethodList from "./MethodList";
import Footer from "../../../Component/Footer/Footer";
import "./Payment.scss";

class Payment extends Component {
  state = {
    method: [
      {
        img:
          "https://wiselyshave-cdn.s3.amazonaws.com/assets/images/kakaoPay.svg",
        text: "카카오페이",
      },
      {
        img: "https://wiselyshave-cdn.s3.amazonaws.com/assets/images/card.svg",
        text: "신용/체크카드",
      },
      {
        img:
          "https://wiselyshave-cdn.s3.amazonaws.com/assets/images/accountPay.svg",
        text: "무통장 입금/가상 계좌",
      },
      {
        img:
          "https://wiselyshave-cdn.s3.amazonaws.com/assets/images/cellphonePay.svg",
        text: "휴대폰 소액결제",
      },
      {
        img: "https://wiselyshave-cdn.s3.amazonaws.com/assets/images/payco.svg",
        text: "페이코",
      },
    ],
  };
  render() {
    const { method } = this.state;
    return (
      <div className="Payment">
        <div className="nav-logo">
          <div className="logo-wrapper">
            <img
              alt="logo"
              src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/WiselyLogo.svg"
              className="logo"
            />
          </div>
        </div>
        <div className="option-wrapper">
          <div className="option-list-wrapper">
            <div className="option-header">
              <div className="user-info">
                <div className="first-delivery-info">
                  이병훈 (010-1234-5678)
                </div>
                <div className="second-delivery-info">경기 용인시 기흥구</div>
              </div>
              <div className="info-modify">수정 ></div>
            </div>
            <div className="option-content">
              <div className="option-title">
                <p>
                  <strong className="title-regular">결제 수단</strong>
                  <span className="title-light">을</span>
                </p>
                <p className="title-light">선택해주세요</p>
              </div>
              <div className="option-list-box">
                {method.map((data) => (
                  <MethodList img={data.img} text={data.text} />
                ))}
              </div>
              <div className="option-bottom">
                <button className="payment-button">
                  <span className="payment-text">결제하기</span>
                </button>
              </div>
            </div>
          </div>
          <div className="center-dividebar"></div>
          <div className="right-wrapper">
            <div className="cart-box">
              <div className="selected-item-box-wrapper">
                <div className="item-image-box">
                  <img
                    alt="goodsImg"
                    className="selected-image"
                    src="https://wiselyshave-cdn.s3.amazonaws.com/assets/images/items/starter_kit/starter_navy.png"
                  />
                </div>
                <div className="item-info-box">
                  <div className="item-info-left">
                    <div className="item-info-title">
                      면도기 세트 -
                      <span className="item-info-quantity"> 2개</span>
                    </div>
                    <div className="item-info-description">
                      <span className="item-info-option-value-navy">
                        미드나이트 네이비
                      </span>
                      <span className="inserted">면도기 + 날 2입</span>
                    </div>
                  </div>
                  <div className="item-info-price">8,900원</div>
                </div>
              </div>
              <div className="selected-item-price-div">
                <div className="selected-item-price-box">
                  <div className="selected-item-price-text">주문금액</div>
                  <div className="selected-item-price-price">17,800원</div>
                </div>
                <div className="selected-item-delivery-fee-box">
                  <div className="selected-item-delivery-fee-text">배송비</div>
                  <div className="selected-item-delivery-fee-price">무료</div>
                </div>
                <div className="selected-item-total-price-box">
                  <div className="selected-item-total-price-text">
                    최종 결제 금액
                  </div>
                  <div className="selected-item-total-price-price">
                    17.800원
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Payment;
