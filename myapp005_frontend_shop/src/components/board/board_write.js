import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { boardActions } from "../../reduxs/actions/board_action";
import { useDispatch, useSelector } from "react-redux";

// const BoardWrite = () => {

//       const navigator = useNavigate();
//       const dispatch = useDispatch();

//       const [inputs, setInputs] = useState({
//         subject:'',
//         content:'',
//         filename: null,
//       });

//       const {subject, content, filename} = inputs;

//       const {num} = useParams(); //답변글일 때 num을 받아옴

//       const pv = useSelector((state) => state.board.pv ? state.board.pv : {currentPage:1}
//       );

//       const boardDetail = useSelector((state) => state.board.boardDetail);

//       const handleValueChange = (e) => {
//           // let nextState = {};
//           // nextState[e.target.name] = e.target.value;
//           // setInputs({...inputs, ...nextState});

//           // setInputs({...inputs, [e.target.name]: e.target.value });

//           setInputs((prev) => {
//             return {...prev, [e.target.name]: e.target.value }
//           });
//       };

//       //첨부파일
//       const handleFileChange = (e) => {
//           e.preventDefault();
//           setInputs({...inputs, [e.target.name]: e.target.files[0]}); //files[]는 컬렉션이라 [0] 0번째 인덱스를 지정해줘야 한다.  
//       };

//       const onSubmit =  async (e) => {
//           e.preventDefault();

//           //form에 담아서 넘겨주기
//       const formData = new FormData();
//           formData.append('subject', subject);
//           formData.append('content', content);

//           console.log('filename:', filename);
//           //javascript 부분이라 if문 사용 가능
//           if(filename != null) formData.append('filename', filename);

//           //답변글이면... -> num !== undefined
//           if(num !== undefined){
//             formData.append('num', boardDetail.num);
//             formData.append('ref', boardDetail.ref);
//             formData.append('re_step', boardDetail.re_step);
//             formData.append('re_level', boardDetail.re_level);
//           }

//           //첨부파일이 있기 때문에 headers로 form-data를 보냄
//       const config = {
//             headers : { 'Content-Type' : 'multipart/form-data'},
//           };

//           await dispatch(boardActions.getBoardWrite(formData, config));

//           //초기화
//           setInputs({
//             subject:'',
//             content:'',
//             filename: null,
//           });

//           //글을 다 쓰고 난 뒤, 리스트로 가기 (현재 페이지 값을 가져옴)           //현재 페이지가 제목글이면 1페이지로 넘긴다
//           navigator(`/board/list/${pv.currentPage ? pv.currentPage : {currentPage : 1}}`
//           );
//         };

const BoardWrite = () => {
  const navigator = useNavigate();
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
    subject: "",
    content: "",
    filename: null,
  });

  const { subject, content, filename } = inputs;

  // 답변글일때 num을 받아와야함
  const { num } = useParams();

  const pv = useSelector((state) =>
    state.board.pv ? state.board.pv : { currentPage: 1 }
  );

  const boardDetail = useSelector((state) => state.board.boardDetail);

  // 일반 데이터
  const handleValueChange = (e) => {
    // let nextState = {};
    // nextState[e.target.name] = e.target.value;
    // setInputs({ ...inputs, ...nextState });

    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  //첨부파일
  const handleFileChange = (e) => {
    e.preventDefault();
    setInputs({ ...inputs, [e.target.name]: e.target.files[0] }); //files가 collection이라 [0]이라고 해야 원하는 값을 가져올 수 있다.
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("subject", subject);
    formData.append("content", content);
    console.log("filename", filename); // 첨부파일은 이름만 찍어봄
    //js 구현하는 부분이라서 if문 사용가능
    // 선택한 첨부파일이 있으면!
    if (filename != null) formData.append("filename", filename);

    // 답변글이면...
    if (num !== undefined) {
      formData.append("num", boardDetail.num);
      formData.append("ref", boardDetail.ref);
      formData.append("re_step", boardDetail.re_step);
      formData.append("re_level", boardDetail.re_level);
    }

    const config = {
      headers: { "Content-type": "multipart/form-data" },
    };

    await dispatch(boardActions.getBoardWrite(formData, config));

    // 초기화 시켜주기 위해서
    setInputs({
      subject: "",
      content: "",
      filename: null,
    });

    // 글을 다 쓰고나서 리스트 가져오기
    // 답변글이면 그 페이지로 가고, 제목글이면 첫페이지로 가도록함
    navigator(
      `/board/list/${pv.currentPage ? pv.currentPage : { currentPage: 1 }}`
    );
  };
    

    return (
        <>
      <form onSubmit={onSubmit}>
        <table>
          <tbody>
            <tr>
              <td width='20%' align='center'>
                제목
              </td>
              <td>
                <input
                  type='text'
                  name='subject'
                  size='40'
                  value={subject}
                  placeholder={num !== undefined ? '답변' : null}
                  onChange={handleValueChange}
                />
              </td>
            </tr>


            <tr>
              <td width='20%' align='center'>
                내용
              </td>
              <td>
                <textarea
                  name='content'
                  rows='13'
                  cols='40'
                  value={content}
                  onChange={handleValueChange}
                ></textarea>
              </td>
            </tr>


            <tr>
              <td width='20%' align='center'>
                첨부파일
              </td>
              <td>
                <input
                  type='file'
                  name='filename'
                  id='filepath'
                  onChange={handleFileChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <Link className='btn btn-primary' to={`/board/list/${pv.currentPage}`}>
          리스트
        </Link>
        <input type='submit' className='btn btn-primary' value='등록' />
      </form>
        </>
    )
};

export default BoardWrite;