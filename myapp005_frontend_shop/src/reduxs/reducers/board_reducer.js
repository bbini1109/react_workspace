
import { createSlice } from '@reduxjs/toolkit';

let initialState = {
    boardList : [],
    pv:{currentPage:1},
    boardDetail:{},
    boardFile:null,
};

//reduce 설정
const boardSlice = createSlice({
    //state(초기값) 설정, state값을 처리해줄 함수
    name : 'board', initialState,

    reducers:{
        getBoardList(state, action){
        //  console.log(action);
            state.boardList = action.payload.data.aList;
            state.pv = action.payload.data.pv;
        },

        getBoardDetail(state, action){
            state.boardDetail = action.payload.data;
        },

        getBoardDownload(state, action) {
          state.boardFile = action.payload.data;
        }
    },
});

//이것을 이용해서 함수명 자동완성을 할 수 있다.
//getBoardList를 외부에서 사용할 수 있도록
export const boardReducers = boardSlice.actions;
export default boardSlice.reducer; 

