import "./MainStyle.css";

// 메인페이지 아이템
// 작성자: 누구누구
// 작업 일시: 2025.03.17
// 작업 내용: 메인페이지 아이템
// props = {title: string, content: string}
const MainDetail1 = (props) => {
  return (
    <div className="one">
      <div>{number}</div>
      <button onClick={add}>+</button>
      <button onClick={sub}>-</button>
    </div>
  );
};

export default MainDetail1;
