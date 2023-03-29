import { useState } from 'react';

const MyuseState006 = () => {
  //배열
  const [customerList, setCustomerList] = useState([
    {
      name: '고수',
      address: '서울시 강남구',
      phone: '010-000-0000',
    },
    {
      name: '여진구',
      address: '서울시 서초구',
      phone: '010-111-1111',
    },
  ]);

  //딕셔너리 객체
  const [customer, setCustomer] = useState({
    name: '',
    address: '',
    phone: '',
  });

  const handleChange = (e) => {
    //기존 속성 값을 먼저 복사해 온 다음,
    //setCustomer({ ...customer, [e.target.name]: e.target.value });

    const { name, value } = e.target;
    //setCustomer({ ...customer, [name]: value }); // 비동기화 식으로 처리가 된다.

    setCustomer((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleCommit = () => {
    //customer는 객체(딕셔너리형태)이기 때문에 spread 연산자(...) 사용 불가, 객체 그대로 넣어야함.
    //customerList는 배열 -> spread 연산자 사용 가능
    setCustomerList([...customerList, customer]);
    //데이터 입력 후, 입력창 초기화
    setCustomer({
      name: '',
      address: '',
      phone: '',
    });
  };

  //rendering 하기 위해서는 return() 해줘야함. camel 표기법 사용. class속성은 className="" 으로 써야함.
  //jsx 문법에서는 if,for문 사용 X
  return (
    <div>
      <p>
        <span>이름</span>
        <input
          type='text'
          value={customer.name}
          name='name'
          onChange={handleChange}
        />
      </p>

      <p>
        <span>주소</span>
        <input
          type='text'
          value={customer.address}
          name='address'
          onChange={handleChange}
        />
      </p>

      <p>
        <span>전화번호</span>
        <input
          type='text'
          value={customer.phone}
          name='phone'
          onChange={handleChange}
        />
      </p>

      <button onClick={handleCommit}>확인</button>

      <table>
        <thead>
          <tr>
            <th>이름</th>
            <th>주소</th>
            <th>전화</th>
          </tr>
        </thead>

        <tbody>
          {customerList.map((element, idx) => {
            return (
              // Warning: Each child in a list should have a unique "key" prop.
              // 자식은 유니크한 키 값을 가져야 한단
              <tr key={idx}>
                <td>{element.name}</td>
                <td>{element.address}</td>
                <td>{element.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default MyuseState006;
