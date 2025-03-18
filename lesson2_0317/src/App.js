import "./App.css";
import React, { useState } from "react";

// function SayFunction() {
//   const [message, setMessage] = useState("");
//   const onClickEnter = () => {
//     setMessage("안녕하세요");
//   };
//   const onClickLeave = () => {
//     setMessage("안녕히가세요");
//   };

//   return (
//     <div>
//       <button onClick={onClickEnter}>입장</button>
//       <button onClick={onClickLeave}>퇴장</button>
//       <h1>{message}</h1>
//     </div>
//   );
// }

function Counter() {
  const [number, setNumber] = useState(0);
  function onClickCount() {
    setNumber(number + 1);
  }
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onClickCount}>+1</button>
    </div>
  );
}

export default Counter;
