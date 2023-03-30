import { Link, NavLink, Outlet } from "react-router-dom";


    //style 정의
const activeStyle = ({isActive}) => {
    return (
        {
            color:isActive ? 'green' : '',
            fontSize: isActive ? '2rem' : '',
        }
    );
};
const Layout = () => {

    return (
        <div>
            <nav>
                <ul> {/*링크 to를 통하면 App1로 가서 일치하는 컴포넌트를 수행한다 */}
                    <li>
                        {/* 메뉴용 링크에 스타일 요소를 적용하려면 NavLink로 해야함. Link는 적용 안됨 Link는 단순한 페이지 이동만 가능 */}
                        <NavLink to="/" style={activeStyle}>Home</NavLink>
                    </li>

                    <li>
                        {/* <a> 요소는 전체를 렌더링 하므로 <Link> 또는 <NavLink>를 사용한다. */}
                        {/* <a href="/about">About</a> */}
                        <NavLink to="/about?name=홍길동&loc=서울" style={activeStyle}>About</NavLink>
                    </li>

                    <li>
                        <NavLink to="/dashboard" style={activeStyle}>Dashboard</NavLink>
                    </li>

                    <li>
                        <NavLink to="/product" style={activeStyle}>Product</NavLink>
                    </li>

                    <li>
                        <NavLink to="/nothing-here" style={activeStyle}>Nothing Here</NavLink>
                    </li>
                </ul>
            </nav>

            <hr /> {/*컴포넌트 메뉴와 내용을 구분지어 줌 */}
            <Outlet /> 
        </div>
    )

}

export default Layout;