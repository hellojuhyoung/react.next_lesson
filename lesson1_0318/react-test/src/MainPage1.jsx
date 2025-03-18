import "./App.css";

import { useState } from "react";
import { Button, Select, Input } from "antd";

import apple from "./img/apple.jpg";
import banana from "./img/banana.jpg";
import grape from "./img/grape.jpg";

const MainPage1 = () => {
  // 과일 value 저장용
  const [fruit, setFruit] = useState(apple);
  // 배경색
  const [back, setBack] = useState("red");
  // 글자색
  const [fontColor, setFontColor] = useState("white");
  // 텍스트
  const [text, setText] = useState("");

  // 과일 옵션
  const option1 = [
    {
      value: apple,
      label: "사과",
    },
    {
      value: banana,
      label: "바나나",
    },
    {
      value: grape,
      label: "포도",
    },
  ];

  // 배경색 옵션
  const option2 = [
    {
      value: "red",
      label: "빨간색",
    },
    {
      value: "yellow",
      label: "노란색",
    },
    {
      value: "blue",
      label: "파란색",
    },
  ];

  // 글자색 옵션
  const option3 = [
    { value: "white", label: "흰색" },
    { value: "gray", label: "회색" },
    { value: "green", label: "초록색" },
  ];

  const fruitChange = (value) => {
    setFruit(value);
  };
  return (
    <>
      <div>
        과일:
        <Select
          defaultValue={fruit}
          style={{
            width: 120,
          }}
          onChange={fruitChange}
          options={option1}
        />
        배경색:
        <Select
          defaultValue={back}
          style={{
            width: 120,
          }}
          onChange={(value) => {
            setBack(value);
          }}
          options={option2}
        />
        글자색:
        <Select
          defaultValue={fontColor}
          style={{
            width: 120,
          }}
          onChange={(value) => {
            setFontColor(value);
          }}
          options={option3}
        />
      </div>
      내용:
      <Input
        style={{ width: 400 }}
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
      <br />
      <img style={{ width: 200, height: 150 }} src={fruit} />
      <div
        style={{
          padding: 10,
          width: 200,
          backgroundColor: back,
          color: fontColor,
        }}
      >
        {text}
      </div>
    </>
  );
};

export default MainPage1;
