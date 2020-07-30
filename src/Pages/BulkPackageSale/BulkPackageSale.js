import React, { Component } from "react";
import BulkPackageWrap from "./BulkPackageWrap/BulkPackageWrap";
import Footer from "../../Component/Footer/Footer";
import Nav from "../../Component/Nav/Nav";
import PageTop from "../PageTop/PageTop";
import "./BulkPackageSale.scss";

class BulkPackageSale extends Component {
  constructor() {
    super();

    this.state = {
      product: [
        {
          id: 1,
          img:
            "https://wiselyshave-cdn.s3.amazonaws.com/assets/images/background/bulkLanding/bulk_blade.png",
          title: "리필면도날",
          subtitle: "독일산 5중 날",
          volume: "",
          list: [
            {
              index: 0,
              ea: "4개입",
              discount: "할인 없음",
              price: "9,600원",
              active: false,
            },
            {
              index: 1,
              ea: "8개입",
              discount: "7% 할인",
              price: "17,800원",
              active: false,
            },
            {
              index: 2,
              ea: "12개입",
              discount: "15% 할인",
              price: "24,400원",
              active: false,
            },
            {
              index: 3,
              ea: "16개입",
              discount: "20% 할인",
              price: "30,700원",
              active: false,
            },
          ],
        },
        {
          id: 2,
          img:
            "https://wiselyshave-cdn.s3.amazonaws.com/assets/images/background/bulkLanding/bulk_shaving_gel.png",
          title: "쉐이빙젤",
          subtitle: "부드럽고 풍성한 거품",
          volume: "150ml",
          list: [
            {
              index: 0,
              ea: "1개",
              discount: "할인 없음",
              price: "4,500원",
              active: false,
            },
            {
              index: 1,
              ea: "2개",
              discount: "10% 할인",
              price: "8,100원",
              active: false,
            },
            {
              index: 1,
              ea: "3개",
              discount: "15% 할인",
              price: "11,400원",
              active: false,
            },
            {
              index: 2,
              ea: "4개",
              discount: "20% 할인",
              price: "14,400원",
              active: false,
            },
          ],
        },
        {
          id: 3,
          img:
            "https://wiselyshave-cdn.s3.amazonaws.com/assets/images/background/bulkLanding/bulk_after_shave.png",
          title: "리페어 애프터쉐이브",
          subtitle: "면도 후 진정과 보습",
          volume: "60ml",
          list: [
            {
              index: 0,
              ea: "1개",
              discount: "할인 없음",
              price: "6,500원",
              active: false,
            },
            {
              index: 1,
              ea: "2개",
              discount: "10% 할인",
              price: "11,700원",
              active: false,
            },
            {
              index: 1,
              ea: "3개",
              discount: "15% 할인",
              price: "16,500원",
              active: false,
            },
            {
              index: 2,
              ea: "4개",
              discount: "20% 할인",
              price: "20,800원",
              active: false,
            },
          ],
        },
      ],
    };
  }

  handleActive = (changeProduct, ListIndex, ProductId) => {
    console.log(ProductId + 2, ListIndex + 1);
    let dataList = this.state.product[ProductId - 1].list.map((data) => {
      if (ListIndex === data.index) {
        data.active = !data.active;
        return data;
      } else {
        data.active = false;
        return data;
      }
    });

    let index = ProductId;

    this.setState({
      ...this.state.product,
      product: this.state.product.map((product) => {
        if (product.key === index) {
          return {
            ...product,
            list: dataList,
          };
        } else {
          return {
            ...product,
          };
        }
      }),
    });

    // 정보 보내는 틀 잡아놓음.

    // fetch(, {
    //   method : "POST",
    //   headers: {
    //     Authorization:
    //     "",
    //   },
    //   body : JSON.stringify({
    //    product_id: ProductId+2,
    //    quantity: ListIndex+1,
    //   }),
    // })
    // .then((res) => res.json())
    // .then((res) => {
    //   localStorage.setItem("access_token", res.access_tokken);
    // });
  };

  render() {
    const { product } = this.state;
    return (
      <div className="BulkPackageSale">
        <Nav />
        <PageTop />
        <div className="bulk-purchase-main">
          <div className="bulk-purchase-text-wrapper">
            <h2 className="bulk-purchase-title">대용량 팩 한정판매!</h2>
            <p className="bulk-purchase-value">
              최대 20% 저렴한 가격,
              <br />다 떨어질 일 없이 미리 구매해두세요
            </p>
            <span className="bulk-purchase-sub">*한정 수량 소진 시 종료</span>
          </div>
        </div>

        {product.map((data, index) => (
          <BulkPackageWrap
            key={data.id}
            img={data.img}
            title={data.title}
            subtitle={data.subtitle}
            volume={data.volume}
            list={data.list}
            handleActive={this.handleActive}
          />
        ))}

        <Footer />
      </div>
    );
  }
}

export default BulkPackageSale;
