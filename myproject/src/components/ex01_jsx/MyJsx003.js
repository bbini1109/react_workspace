import './MyJsx003.css'; //js가 아닌 것들은 반드시 확장자를 써야한다.

const MyJsx003 = () => {
  const numX = 3;
  const numY = 5;

  return (
    <>
      <div>{`${numX} + ${numY} = ${numX + numY}`}</div>
      <div className='line'>Line Test</div>
    </>
  );
};

export default MyJsx003;
