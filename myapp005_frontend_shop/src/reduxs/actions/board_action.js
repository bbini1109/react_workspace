//네트워크를 통해 backend로 접근

import axios from 'axios';
import { baseUrl } from '../../apiurl';
import { boardReducers } from '../reducers/board_reducer';

function getBoardList(currentPage){
    
    return async (dispatch) => {   
        const data = await axios
            .get(`${baseUrl}/board/list/${currentPage}`)
            .then((response) => response.data); //백엔드에서 넘겨준 데이터를 받는 형식 response.data
            console.log(data);
        dispatch(boardReducers.getBoardList({data}));  //board_reducer.js -> board_reducer.js, getBoardList(action)에 값을 넘겨줌
    };
}

//db에 접근해서 글 눌렀을 때 data 가져오기 num으로 처리
function getBoardDetail(num){

    return async (dispatch) => {                //backend에 요청하는 방식
        const data = await axios.get(`${baseUrl}/board/view/${num}`)
        .then((response) => response.data);
        //결과값을 담은 response.data를 data에 넘겨줌
        dispatch(boardReducers.getBoardDetail({data})); // -> board_view.js에서 사용 가능
    }
}

//첨부파일 다운로드 받는 작업
function getBoardDownload(upload) {
    return async (dispatch) => {
      const data = await axios
                  //백엔드에서 "application/octet-stream" 이렇게 보내기 때문에 responseType:'blob' 해야함
        .get(`${baseUrl}/board/contentdownload/${upload}`,{responseType:'blob',
      })
        .then((response) => response.data);
      //dispatch(boardActions.getBoardDownload(data));
      return data; //store에 저장하지 않고 바로 data로 보내도 됨. board_view에서만 사용하기 때문에
  };
}


  function getBoardDelete(num) {
        return async (dispatch) => {
          await axios.delete(`${baseUrl}/board/delete/${num}`).then((response) => response.data);
      };
  };

  function getBoardWrite(formData, config){
    return async () => {                        
      await axios                     //넘겨줄 데이터(formData), 옵션(config)
      .post(`${baseUrl}/board/write`, formData, config)
      .then((response) => response.data);
    };
  }

  function getBoardUpdate(formData, config) {
    return async () => {
      await axios
      .put(`${baseUrl}/board/update`, formData, config)
      .then((response) => response.data);
    };
  }

                           //여기에 등록 시켜야 외부에서 사용 가능 
export const boardActions={getBoardList, getBoardDetail, getBoardDownload, getBoardDelete, getBoardWrite, getBoardUpdate};