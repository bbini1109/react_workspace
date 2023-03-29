/**
  useEffect : 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정한다.
        특정작업(side effect) : Time(setTimeout), Ajax
        useEffect : useEffect는 side effect라는 뜻이다.

        useEffect 4가지 종류 :
        1. useEffect(callback) : 마운트 후, 리렌더링 될 때마다
        2. useEffect(callback, []) : 마운트 후
        3. useEffect(callback, [state]) : 마운트 후, state
        4. useEffect(callback, {return ();}, []) : 마운트 후, 언마운트 전
 */

import { useEffect, useState } from 'react';

const MyuseEffect001 = () => {
  const [name, setName] = useState('');
  const [nickName, setNickName] = useState('');

  const onChangeName = (e) => {
    setName(e.target.value); //name state에 저장이 됨
  };

  const onChangeNickName = (e) => {
    setNickName(e.target.value);
  };

  //   useEffect(() => {
  //     console.log('렌더링이 되었습니다.');
  //   }, []);

  //   useEffect(() => {
  //     console.log('name 렌더링이 되었습니다.');
  //   }, [name]);

  //   useEffect(() => {
  //     console.log('nickName 렌더링이 되었습니다.');
  //   }, [nickName]);

  //   useEffect(() => {
  //     console.log('렌더링 return :' + name);
  //     console.log('렌더링 return :' + nickName);
  //   }, [name, nickName]);

  useEffect(() => {
    console.log('렌더링 return :___1' + name);
    return () => {
      console.log('___2');
      console.log('clean up');
    };
  }, [name]); //[] 안에는 리렌더링이 발생할 수 있는 값을 넣어준다.

  return (
    <div>
      <input
        type='text'
        placeholder='name'
        value={name}
        onChange={onChangeName}
      />
      <input
        type='text'
        placeholder='nickName'
        value={nickName}
        onChange={onChangeNickName}
      />
      <br />
      <span>이름 : </span>
      <br />
      <span>닉네임 : </span>
    </div>
  );
};

export default MyuseEffect001;
