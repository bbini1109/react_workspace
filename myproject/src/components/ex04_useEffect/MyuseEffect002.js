import { useEffect, useState } from 'react';

const MyuseEffect002 = () => {
  let data = 0;
  const [num, setNum] = useState(0);

  // 리렌더링 발생하지 않음
  const handleData = () => {
    console.log((data = data + 1));
  };

  //state 변경 -> 리렌더링발생
  const handleName = (e) => {
    console.log(e.target.value + 1);
    setNum(num + 1);
  };

  //리렌더링이 발생하면 수행된다.
  useEffect(() => {
    console.log('data:' + data);
  });

  return (
    <div>
      <input type='text' placeholder='data' onChange={handleData} />
      <input type='text' placeholder='num' onChange={handleName} />
    </div>
  );
};

export default MyuseEffect002;
