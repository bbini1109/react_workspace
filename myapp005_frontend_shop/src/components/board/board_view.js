import { Link, useNavigate, useParams } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from "react";
import { boardActions } from "../../reduxs/actions/board_action";

const BoardView = () => {
    const {num} = useParams();
    const dispatch = useDispatch();
    const navigator = useNavigate();

    const boardDetail = useSelector((state) => state.board.boardDetail); //reducer 이용해서 store에 있는 것을 가져옴
    //const boardFile = useSelector((state) => state.board.boardFile);
    const pv = useSelector((state) => state.board.pv);
    
    //가장 마지막에 처리되는 과정
    useEffect(()=>{
        //action에 설정되어 있는 getboardDetail을 boardActions 이용해서 호출
        dispatch(boardActions.getBoardDetail(num));
    },[])

    //download
    const handleDownload =  async () => {
    //board_action에서 넘겨준 데이터 값을 boardFile에서 받음           //boardDetail에 있는 첨부파일명을 그대로 넘겨준다.
    const boardFile = await dispatch(boardActions.getBoardDownload(boardDetail.upload));
    
    //dispatch(boardActions.getBoardDownload(boardDetail.upload));
    
    const fileName = boardDetail.upload.substring(
      boardDetail.upload.indexOf('_') + 1
    );

    console.log(fileName);
    
    //첨부파일 내용 읽어오기  
    const url = window.URL.createObjectURL(new Blob([boardFile]),{
      type: 'application/octet-stream',
    });

    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', fileName);
    link.style.cssText = 'dispaly:none';
    document.body.appendChild(link);
    link.click();
    link.remove();

    };

    //삭제
    const handleDelete = (e) => {
      e.preventDefault();
      dispatch(boardActions.getBoardDelete(num)); //서버처리
      navigator(`/board/list/${pv.currentPage}`); //삭제 후 리스트로 가기
    };

    return (
        <div>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <tbody>
              <tr>
                <th width="20%">글쓴이</th>
                <td>{boardDetail.reg_date}</td>
                <th width="20%">조회수</th>
                <td>{boardDetail.readcount}</td>
              </tr>
    
              <tr>
                <th>제목</th>
                <td colSpan="3">{boardDetail.subject}</td>
              </tr>
    
              <tr>
                <th>메일</th>
                <td colSpan="3">{boardDetail.memberEmail}</td>
              </tr>
    
              <tr>
                <th>내용</th>           
                                       {/* 글쓸 때 내용 줄 바꿈 적용 */}
                <td colSpan="3" style={{whiteSpace : 'pre-line' }}>
                  {boardDetail.content}
                </td>
              </tr>

              <tr>
                <th> 파일 </th>
                <td colSpan='3'>
                  <button onClick={handleDownload}>{boardDetail.upload 
                  ? boardDetail.upload.substring(boardDetail.upload
                  .indexOf('_') + 1) : null}
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <Link className='btn btn-primary' to={`/board/list/${pv.currentPage}`}>
        리스트
      </Link>
      <Link className='btn btn-primary' to={`/board/write/${boardDetail.num}`}>
        답변
      </Link>


      <Link className='btn btn-primary' to={`/board/update/${num}`}>
        수정
      </Link>


      <button className='btn btn-primary' onClick={handleDelete}>
        삭제
      </button>
        </div>
      );
};

export default BoardView;