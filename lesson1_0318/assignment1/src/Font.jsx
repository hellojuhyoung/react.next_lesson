import { Select } from "antd";

function handleFont(props) {
  const { fontColor, setFontColor } = props;
  const option3 = [
    { value: "white", label: "흰색" },
    { value: "gray", label: "회색" },
    { value: "green", label: "초록색" },
  ];
  return (
    <>
      <div>
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
    </>
  );
}

export default handleFont;
