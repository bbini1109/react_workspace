// 버전이 낮은 경우 import를 해줘야 한다.
//import React from 'react';

/*
  리액트 17 이전 버전에서는 JSX 구문이 있는 파일은 반드시 import React from 'react';문을 사용해야 한다.
  그러나 17 이후 버전부터는 JSX 구문이 있어도 import React from 'react'; 생략 가능하다. 
  JSX 구문 -> return (
            <div>
              <div>Hello</div>
              <div>React</div>
            </div>
             );
*/

//function MyJsx002() {

//}

const MyJsx001 = () => {
  return (
    <div>
      <div>Hello</div>
      <div>React</div>
    </div>
  );
};

export default MyJsx001;
