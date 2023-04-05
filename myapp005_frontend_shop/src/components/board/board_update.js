import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { boardActions } from "../../reduxs/actions/board_action";


const BoardUpdate = () => {

    const navigator = useNavigate();
    const dispatch = useDispatch();
    const {num} = useParams(); //num값에 해당하는 데이터를 업데이트 하기 위해 선언

    const [inputs, setInputs] = useState({
        subject : '',
        content : '',
        filename : null,
    });

    const {subject, content, filename} = inputs;

    const board = useSelector((state) => state.board.boardDetail);

    const pv = useSelector((state) => state.board.pv);

    useEffect(() => {
      setInputs(board);
    },[]);

    //글 수정하기 누르고 내용 바꾸는 것
    const handleValueChange = (e) => {
      e.preventDefault();
      let nextState={};
      nextState[e.target.name]=e.target.value;
      setInputs((prev)=>{
        return {...prev, ...nextState}; 
      })
    };

    //첨부파일
    const handleFileChange = (e) => {
      e.preventDefault();
      setInputs({...inputs, [e.target.name] : e.target.files[0] }); //단순하게 값만 업데이트
    };

    //수정버튼 눌렀을 때 수정완료우
    const handleUpdate = async (e) => {
      e.preventDefault();

    const formData = new FormData();
      formData.append('num', num); //board_view에 {`/board/update/${num}`}에서 num값 처리
      formData.append('subject', subject);
      formData.append('content', content);
      formData.append('currentPage', pv.currentPage);

      console.log('filename:', filename);
      if(filename != null)  formData.append('filename:', filename);

    const config = {
        headers: { 'Content-Type' : 'multipart/form-data'},
      };

      await dispatch(boardActions.getBoardUpdate(formData, config));

      setInputs({
        subject: "",
        content: "",
        filename: null,
      });

      navigator(`/board/list/${pv.currentPage}`);
    
    };

    //글쓰기 수정하다가 수정 전으로 취소
    const handleReset = (e) => {
      e.preventDefault();
      setInputs(board);
    };

    //수정하다가 안하고 그냥 뒤로
    const handleBack = (e) => {
      e.preventDefault();
      navigator(-1);
    };



    return (
    <div>
      <form name='frm' >
        <table className='table table-striped' style={{ marginTop: 20 }}>
          <tbody>
            <tr>
              <th width='20%'>글쓴이</th>
              <td>{board.writer}</td>
              <th width='20%'>등록일</th>
              <td>{board.reg_date}</td>
            </tr>


            <tr>
              <th>제목</th>
              <td colSpan='3'>
                <input
                  type='text'
                  name='subject'
                  id='subject'
                  defaultValue={board.subject}
                  value={subject}
                  onChange={handleValueChange}
                />
              </td>
            </tr>


            <tr>
              <th>내용</th>
              <td colSpan='3'>
                <textarea
                  name='content'
                  id='content'
                  rows='13'
                  cols='40'
                  defaultValue={board.content}
                  value={content}
                  onChange={handleValueChange}
                ></textarea>
              </td>
            </tr>


            <tr>
              <th>첨부파일</th>
              <td colSpan='3'>
                <input
                  type='file'
                  name='filename'
                  id='filepath'
                  onChange={handleFileChange}
                />
                <span>{board.upload ? board.upload.substring(board.upload.indexOf('_') + 1) : null}</span>
              </td>
            </tr>
          </tbody>
        </table>


        <button className='btn btn-primary' onClick={handleUpdate}>
          수정
        </button>
        <button className='btn btn-primary' onClick={handleReset}>
          취소
        </button>
        <button className='btn btn-primary' onClick={handleBack}>
          뒤로
        </button>
      </form>
    </div>
    )
};

export default BoardUpdate;