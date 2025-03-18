import "./App.css";

import { useState } from "react";
// import { Button, Select, Input } from "antd";

import Fruit from "./Fruit";
import Background from "./Background";
import Font from "./Font";
import InputText from "./InputText";
import apple from "./img/apple.jpg";

function App() {
  // 과일 value 저장용
  const [fruit, setFruit] = useState(apple);
  // 배경색
  const [back, setBack] = useState("red");
  // 글자색
  const [fontColor, setFontColor] = useState("white");
  // 텍스트
  const [text, setText] = useState("");
  return (
    <div className="App">
      <div>
        <Fruit fruit={fruit} setFruit={setFruit} />
      </div>
      <div>
        <Background back={back} setBack={setBack} />
      </div>
      <div>
        <Font fontColor={fontColor} setFontColor={setFontColor} />
      </div>
      <div>
        <InputText text={text} setText={setText} />
      </div>
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
    </div>
  );
}

export default App;
