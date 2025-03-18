import { Select } from "antd";

function handleBackgroundColor(props) {
  const { back, setBack } = props;
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

  return (
    <>
      <div>
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
      </div>
    </>
  );
}

export default handleBackgroundColor;
