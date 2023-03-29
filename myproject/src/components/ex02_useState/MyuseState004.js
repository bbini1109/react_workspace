import { useState } from 'react';

const MyuseState004 = () => {
  //state는 setState함수를 통해서만 변경 가능하다.
  const [customer, setCustomer] = useState({
    name: '고수',
    address: '서울시 강남구',
    phone: '010-1111-1111',
  });

  const handleName = (e) => {
    console.log(e.target.value);
    console.log(customer.address);
    //비동기화식으로 처리가 되기 때문에, 가장 나중에 적용됨.
    //기존에 있는 값을 그대로 두고 특정값만 변경해야 하면,
    //기존의 것을 복사해서 넣는 것을 앞으로 둬야함.(...customer)
    //setCustomer({ ...customer, name: e.target.value });
    console.log(customer.address);
    setCustomer((prevState) => {
      return { ...prevState, name: e.target.value };
    });
  };

  const handleAddress = (e) => {
    // setCustomer({ ...customer, address: e.target.value });
    setCustomer((prevState) => {
      return { ...prevState, address: e.target.value };
    });
  };

  const handlePhone = (e) => {
    // setCustomer({ ...customer, phone: e.target.value });
    setCustomer((prevState) => {
      return { ...prevState, phone: e.target.value };
    });
  };

  return (
    <div>
      <p>
        <span>이름</span>{' '}
        {/*state와 연결시, 이벤트를 걸거나, readOnly를 해야함.*/}
        <input type='text' value={customer.name} onChange={handleName} />
      </p>

      <p>
        <span>주소</span>
        <input type='text' value={customer.address} onChange={handleAddress} />
      </p>

      <p>
        <span>전화번호</span>
        <input type='text' value={customer.phone} onChange={handlePhone} />
      </p>

      <button>확인</button>
    </div>
  );
};

export default MyuseState004;
