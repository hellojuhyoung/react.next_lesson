import "./App.css";
import { useState } from "react";
import DetailPage1 from "./DetailPage1";

function SampleFunction() {
  const [number, setNumber] = useState(2);
  function changeValue(value) {
    return value + " how are you?";
  }
  return (
    <div>
      <DetailPage1
        number={number}
        setNumber={setNumber}
        changeValue={changeValue}
      />
    </div>
  );
}

export default SampleFunction;
