import apple from "./img/apple.jpg";
import banana from "./img/banana.jpg";
import grape from "./img/grape.jpg";
import { Select } from "antd";

function handelFruit(props) {
  const { fruit, setFruit } = props;

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
  const fruitChange = (value) => {
    setFruit(value);
  };
  return (
    <>
      <div>
        <Select
          defaultValue={fruit}
          style={{
            width: 120,
          }}
          onChange={fruitChange}
          options={option1}
        />
      </div>
    </>
  );
}

export default handelFruit;
