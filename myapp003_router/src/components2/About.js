import { useLocation } from "react-router-dom";
import queryString from "query-string";  //npm install query-string --save

/*
[페이지 주소를 설정할 때 유동적인 값 설정]

(1) URL 파라미터 : http://localhost:3000/about/홍길동/서울

(2) 쿼리 스트링 : http://localhost:3000/about?name=홍길동&loc=서울
                {hash, key, pathname, search, state}

- hash : 주소의 #문자열 뒤의 값
- pathname : 현재 주소 경로
- search : ?포함한 쿼리스트링
- state : 페이지로 이동시 임의로 넣을 수 있는 상태 값
- key : location 객체의 고유 값, 초기 값은 default, 페이지가 변경될 때 마다 고유의 값이 생성됨.

*/
const About = () => {

    const location = useLocation();


    // <h3>About</h3>
    // <h5>pathname: {location.pathname}</h5>
    // <h5>search: {location.search}</h5>

//아래 같이 search 값을 가져와서 처리하려면 parse를 하기 위해 query-string 설치 해야 함.
    const { pathname, search } = useLocation();
    const { name,loc } = queryString.parse(search);

//   <h5>pathname:{pathname}</h5>
//   <h5>search:{search}</h5>

  return (
    <div>
        <h3>About</h3>
        <h5>pathname: {location.pathname}</h5>
        <h5>search: {location.search}</h5>

        <hr />
        <h5>pathname:{pathname}</h5>
        <h5>search:{search}</h5> {/* 파라미터값 넘겨주는 것이 인코딩 되어 출력 됨 */}

        <hr />
        <p>이름:{name}</p>
        <p>지역:{loc}</p>
    </div>
    );
};
export default About;