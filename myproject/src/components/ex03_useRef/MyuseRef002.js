import { useEffect, useRef } from 'react';

const MyuseRef002 = () => {
  const nameRef = useRef('');

  const handleBtn = () => {
    // console.log(nameRef.current);
    // console.log(nameRef.current.value);
    // document.querySelector('#ndata').value = '';

    //Ref 사용해서 간결하게
    nameRef.current.value = '';
  };

  // useEffect -> 컴포넌트가 다 수행된 후(렌더링이 끝난 후), 수행해야 할 것이 있을 때 사용
  useEffect(() => {
    // let ndata = document.querySelector('#ndata');
    // ndata.focus();
    nameRef.current.focus();
  }); // },[]); -> [] 대괄호가 있으면 마운트 후 한번만 수행

  return (
    <div>
      <input type='text' placeholder='이름입력' ref={nameRef} id='ndata' />
      <button onClick={handleBtn}>Click</button>
    </div>
  );
};

export default MyuseRef002;
