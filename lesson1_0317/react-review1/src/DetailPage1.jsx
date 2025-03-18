function functionsFromMainPage(props) {
  const { number, setNumber, changeValue } = props;

  function square() {
    setNumber(number ** 2);
  }

  function sqaureRoot() {
    setNumber(Math.sqrt(number));
  }

  return (
    <div>
      <div>{number}</div>
      <button onClick={square}>***</button>
      <button onClick={sqaureRoot}>///</button>
      <div>{changeValue("hello world")}</div>
      <div className="red">red</div>
      <div className="orange">orange</div>
      <div className="yellow">yellow</div>
      <div className="green">green</div>
      <div className="blue">blue</div>
      <div className="navy">navy</div>
      <div className="purple">purple</div>
    </div>
  );
}

export default functionsFromMainPage;
