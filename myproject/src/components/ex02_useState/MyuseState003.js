import { useState } from 'react';

const MyuseState003 = () => {
  const [names, setNames] = useState(['고수', '여진구', '송중기']);
  const [input, setInput] = useState('');

  const handleChangeName = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };

  const handleClick = () => {
    //console.log(document.getElementById('fname').value);

    //배열 구조 그대로 가져오고[], spread 연산자 사용해서 배열 상태를 복사 ...
    //setNames([...names, document.getElementById('fname').value]);

    //document.getElementById('fname').value = ''; //초기화

    setNames([...names, input]);
    setInput(''); //초기화
  };

  return (
    <div>
      <input type='text' id='fname' onChange={handleChangeName} value={input} />
      <button onClick={handleClick}>ADD</button>
      {names.map((value, index) => {
        //반복해서 돌리는 경우(map) return 해서 jsx를 돌려줘야한다. 이 부분은 js가 아니기 때문에, 반복문을 사용할 수 없다.
        //key 값에 index를 줘서 input을 앞에 둘 경우 전체 인덱스 값이 변경된다.
        return <p key={index}>{value}</p>;
      })}

      {/*//리턴 값이 하나일 경우(줄이 여러개가 아닐 때) {return}은 생략가능 이 경우 ;도 지워야 한다.*/}
      {/* {names.map((value, index) => (
        <p key={index}>{value}</p>
      ))} */}
    </div>
  );
};
export default MyuseState003;
