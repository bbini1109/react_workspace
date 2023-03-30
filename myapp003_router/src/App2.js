//v6
//npm install react-router-dom --save

import {Route, Routes} from 'react-router-dom';
import About from './components2/About';
import Dashboard from './components2/Dashboard';
import Detail from './components2/Detail';
import Home  from './components2/home';
import Layout from './components2/Layout';
import NoMatch from './components2/NoMatch';
import Product from './components2/Product';

const App = () => {

    return (
        <div>
            <h1>Basic Example</h1>
            <Routes>  {/* Routes -> 링크와 컴포넌트 연결 역할, element={}로 컴포넌트 수행*/}

                {/* <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/dashboard' element={<Dashboard />} /> */}

                
                <Route path='/' element={<Layout />}>
                    {/* 상위 path와 경로가 같으면 path='/' 빼고 index로 쓴다 */}
                    <Route index element={<Home />} />
                    {/*전체 경로가 Layout에 있는 링크를 통해 오기 때문에 /about과 경로 모양이 같아야 함 */}
                    <Route path='about' element={<About />} />
                    <Route path='dashboard' element={<Dashboard />} />
                    <Route path='product' element={<Product />} />
                    <Route path='product/:productId' element={<Detail />} />
                    {/* 특별한 경로가 없을 때 *을 지정해서 element={<NoMatch />} 수행 */}
                    <Route path='*' element={<NoMatch />} />
                </Route>
            </Routes>
        </div>
    );

};

export default App;