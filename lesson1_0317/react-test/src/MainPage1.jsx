import "./App.css";
import MainDetail1 from "./MainDetail1";
import MainDetail2 from "./MainDetail2";
import MainDetail3 from "./MainDetail3";
import MainDetail4 from "./MainDetail4";
import MainDetail5 from "./MainDetail5";
import MainDetail6 from "./MainDetail6";
import MainDetail7 from "./MainDetail7";
import { useState } from "react";
import { Button } from "antd";

const MainPage1 = () => {
  // 첫번째 숫자 + - 1씩 되게 만들어 주세요 (함수 자식에서)
  const [number, setNumber] = useState(0);
  // 두번째 번역 버튼을 만들고 눌렀을때 hello;
  const [hello, setHello] = useState("안녕하세요");
  // 세번째 param 받아서 출력

  const changeValue = (value) => {
    return value;
  };
  return (
    <div>
      <Button type="primary" ghost>
        Primary
      </Button>
      출력
      <MainDetail1 number={number} setNumber={setNumber} />
      <MainDetail2 hello={hello} setHello={setHello} />
      <MainDetail3 changeValue={changeValue} />
      <MainDetail4 />
      <MainDetail5 />
      <MainDetail6 />
      <MainDetail7 />
    </div>
  );
};
//
//
//

// return <MainDetail number={number} plus={plus} minus={minus} />;

//   const [number, setNumber] = useState(2);

//   const timesTwo = () => {
//     setNumber(number * 2);
//   };

//   const reset = () => {
//     setNumber(2);
//   };

//   return (
//     <div>
//       <div>{number}</div>
//       <button
//         onClick={() => {
//           timesTwo();
//         }}
//       >
//         2배
//       </button>
//       <button
//         onClick={() => {
//           reset();
//         }}
//       >
//         초기화
//       </button>
//     </div>
//   );
// };
//
//
//

// const MainPage1 = () => {
//   const [number, setNumber] = useState(2);
//   // 플러스 함수 만들기
//   const plus = () => {
//     setNumber(number + 1);
//   };

//   // 마이너스 함수 만들기
//   const minus = () => {
//     setNumber(number - 1);
//   };

//   return <MainDetail number={number} plus={plus} minus={minus} />;
// };

export default MainPage1;
