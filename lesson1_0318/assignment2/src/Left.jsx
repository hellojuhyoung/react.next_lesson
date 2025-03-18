import "./Left.css";

import apple1 from "./img/apple2.avif";
import apple2 from "./img/apple3.jpg";
import apple3 from "./img/apple4.webp";

import { useState } from "react";

function Left() {
  const [fruit, setFruit] = useState(apple1);

  const apples = [
    { value: apple1, label: apple1 },
    { value: apple2, label: apple2 },
    { value: apple3, label: apple3 },
  ];

  function handleApples(selectedFruit) {
    setFruit(selectedFruit);
  }
  return (
    <>
      <div className="imageContainer">
        <div className="main">
          <img src={fruit} alt="mainfruit" />
        </div>
        <div className="sub">
          {apples.map((apple) => (
            <div key={apple.value} onClick={() => handleApples(apple.value)}>
              <img src={apple.value} alt={apple.label} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Left;
