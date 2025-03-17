import "./MainStyle.css";

// 메인페이지 아이템
// 작성자: 누구누구
// 작업 일시: 2025.03.17
// 작업 내용: 메인페이지 아이템
// props = {title: string, content: string}
const MainDetail1 = (props) => {
  const number = props.number;
  const setNumber = props.setNumber;

  function add() {
    setNumber(number + 1);
  }
  function sub() {
    setNumber(number - 1);
  }

  return (
    <div className="one">
      <div>{number}</div>
      <button onClick={add}>+</button>
      <button onClick={sub}>-</button>
    </div>
  );

  // const { number, plus, minus } = props;
  //   return (
  //     <>
  //       <button
  //         onClick={() => {
  //           minus();
  //         }}
  //       >
  //         -
  //       </button>
  //       <div>{number}</div>
  //       <button
  //         onClick={() => {
  //           plus();
  //         }}
  //       >
  //         +
  //       </button>
  //     </>
  //   );
};

export default MainDetail1;
