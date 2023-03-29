const MyJsx005 = () => {
  let name = 'REACT';
  return (
    <div>
      <p>{name === 'react' ? 'REACT' : null}</p>{' '}
      {/* 조건에 만족하지 않으면 null값 리턴 */}
      {/* 출력결과 <p></p> */}
    </div>
  );
};

export default MyJsx005;
