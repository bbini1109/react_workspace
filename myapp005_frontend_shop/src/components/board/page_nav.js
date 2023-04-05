import { useSelector } from "react-redux";


const PageNavigation = ({getBoardList}) => {
    
    //store에 저장되어 있으면 어디에서든 접근해서 사용가능
    const pv = useSelector((state) => state.board.pv ? state.board.pv : {currentPage:1});

    //[]에 페이지에 대한 정보가 저장됨
    const pageNumbers=[];
    for(let i = pv.startPage; i <= pv.endPage; i++) {
        pageNumbers.push(i);
    }
    return (
        <nav arial-label='...'>
            <ul className='pagination'>
                <li className={pv.startPage <= 1 ? 'page-item disabled' : 'page-item'}>
                    <span className='page-link' onClick= {() => getBoardList(pv.startPage - pv.blockPage)}>
                        &laquo;
                    </span>
                </li>

                {/* 페이지 이동 구현 */}
                {pageNumbers.map((pnum, idx) => (
                <li key={pnum}  
                    className={pv.currentPage===pnum ? 'page-item active' : null}
                    aria-current={pv.currentPage===pnum ? 'page' : null} 
                    >                        {/*onClick 이벤트 발생 시 getBoardList(pnum) 넘겨줌 */}
                    <span className='page-link' onClick= {() => getBoardList(pnum)}>
                        {pnum}
                    </span>
                </li>
                ))}

                <li 
                    className={pv.endPage >= pv.totalPage ? 'page-item disabled' : 'page-item'}>
                    <span className='page-link' onClick= {() => getBoardList(pv.startPage + pv.blockPage)}>
                        &raquo;
                    </span>
                </li>
            </ul>
        </nav>
    );
};

export default PageNavigation;