function MainDetail2(props) {
  //   const params = props.param;
  //   console.log(params);
  //   return <div>{params}</div>;
  const { hello, setHello } = props;

  const changeHello = () => {
    setHello("hello");
  };

  return (
    <>
      <div className="two">
        {hello}
        <button onClick={changeHello}>translate</button>
      </div>
    </>
  );
}

export default MainDetail2;
