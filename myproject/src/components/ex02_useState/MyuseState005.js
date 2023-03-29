import { useState } from 'react';

const MyuseState005 = () => {
  const [customer, setCustomer] = useState({
    name: '고수',
    address: '서울시 강남구',
    phone: '010-1111-1111',
  });

  //여러개의 이벤트 처리 : input에 있는 id 키값만 가져와서 한번에 value값 변경하기
  const handleChange = (e) => {
    // []대괄호 묶어주기 반드시
    // setCustomer({ ...customer, [e.target.id]: e.target.value });

    //위에 반복되는 구문을 가져옴, e.target으로부터 id,value를 추출
    //결과값 받는 것은 딕셔너리로 받기 { id, value }
    const { id, value } = e.target;
    setCustomer({
      ...customer, // 기존의 customer 객체를 복사한 뒤(spread연산자 ...)
      [id]: value, // id키를 가진 값을 value로 설정 [] 대괄호 묶어주기
    });

    // setCustomer((prevState) => {
    //   return { ...prevState, [id]: value }; // 대괄호로 묶어주기 [id]
    // });
  };

  return (
    <div>
      <p>
        <span>이름</span>{' '}
        {/*state와 연결시, 이벤트를 걸거나 readOnly를 해야함.*/}
        <input
          type='text'
          value={customer.name}
          id='name'
          onChange={handleChange}
        />
      </p>

      <p>
        <span>주소</span>
        <input
          type='text'
          value={customer.address}
          id='address'
          onChange={handleChange}
        />
      </p>

      <p>
        <span>전화번호</span>
        <input
          type='text'
          value={customer.phone}
          id='phone'
          onChange={handleChange}
        />
      </p>

      <button>확인</button>
    </div>
  );
};

export default MyuseState005;
