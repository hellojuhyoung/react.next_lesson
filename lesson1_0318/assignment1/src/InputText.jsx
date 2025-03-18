import { Input } from "antd";

function handleInput(props) {
  const { text, setText } = props;

  return (
    <>
      <div>
        내용:{" "}
        <Input
          style={{ width: 400 }}
          onChange={(event) => {
            setText(event.target.value);
          }}
        />
      </div>
      <div>{text}</div>
    </>
  );
}

export default handleInput;
