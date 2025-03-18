import "./Right.css";
import { useState } from "react";
import { Select, Button, Rate } from "antd";

function Right() {
  const price = 34500;
  //   declares the unit count
  const [number, setNumber] = useState(1);
  //   declares packaging variables
  const [option, setOption] = useState(0);
  //   declares select packaging options
  const packagingOptions = [
    {
      value: 0,
      label: "기본(+ 0원)",
    },
    {
      value: 3000,
      label: "선물포장(+ 3,000원)",
    },
    {
      value: 11000,
      label: "고급포장(+ 11,000원)",
    },
  ];
  // total price of the product excluding packaging option
  const unitPrice = price * number;

  //   total price of the product including packaing option
  const totalPrice = unitPrice + option;

  //   handles decrease in count *does not go below 0
  const handleDecrement = () => {
    setNumber((prevNumber) => Math.max(0, prevNumber - 1)); // Ensure number doesn't go below 0
  };

  //   handles increase in count
  const handleIncrement = () => {
    setNumber((prevNumber) => prevNumber + 1);
  };

  //   handles packaging options
  function handlePackaging(pkgOption) {
    setOption(pkgOption);
  }

  //   adds comma to every thousand
  function addCommasToNumber(price) {
    if (price === null || price === undefined) {
      return price;
    }
    if (typeof price !== "number") {
      throw new Error("Input must be a number.");
    }

    return price.toLocaleString("en-US");
  }
  return (
    <>
      <div className="rightContainer">
        <div className="productName">맛있는 사과</div>
        <div className="ratings">
          <div className="stars">
            <Rate />
          </div>
          <div className="comments"></div>
        </div>
        <div className="unitPriceContainer">
          <div className="unitPrice">{addCommasToNumber(price)}원 (박스당)</div>
        </div>
        <div className="description">
          <span className="span1">이 상품은</span>
          <span className="span2">내일 도착, 무료배송</span>
        </div>
        <div className="selectionBar">
          <div>
            <div className="right__unitCount">
              <button
                className="right__unitCount__button"
                onClick={handleDecrement}
              >
                -
              </button>
              <span className="right__unitCount__number">{number}</span>
              <button
                className="right__unitCount__button"
                onClick={handleIncrement}
              >
                +
              </button>
            </div>
          </div>
          <div className="packagingOption">
            <Select
              defaultValue={option}
              style={{
                width: 170,
              }}
              onChange={handlePackaging}
              options={packagingOptions}
            />
          </div>
          <div className="shoppingCart">
            <Button>장바구니</Button>
          </div>
          <div className="purchase">
            <Button>바로구매</Button>
          </div>
        </div>
        <div className="totalPrice">
          총:
          <span className="span1">{addCommasToNumber(totalPrice)}원</span>
        </div>
      </div>
    </>
  );
}

export default Right;
