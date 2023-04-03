import axios from "axios";
import { baseUrl } from "../apiurl";
import { useDispatch } from "react-redux";


//backend 접근 관련한 것들은 action쪽으로 뺀다.

//db 접속 데이터 가져오기
const getAction = async(dispatch) => { //요청이 정상적으로 처리되면 -> //.then() 결과값 받아오기
    await axios
        .get(`${baseUrl}/todo/all`)
        .then((response) => {
            console.log(response.data);
            dispatch({type :'LIST', todos : response.data}); 
            //return response.data;
        })
        .catch((error)=>{
        console.log(error);
});
};

const insertAction = async (input) => {         
    await axios
        .post(baseUrl + '/todo/',{todoname:input})
        .then((response) => {
        window.location.replace('/');
    });

};

const deleteAction = async (id) => {
    await axios.delete(baseUrl + '/todo/' + id)
    .then((response)=>{
        window.location.replace('/');
    }).catch((error)=>{
        console.log(error);
    });
};

const updateAction = async (id, completed) => {
    await axios
        .put(baseUrl + "/todo/" + id + "/" + completed)
        .then((response) => {
        window.location.replace('/');
    })
        .catch((error) => {
        console.log(error);
    });
};

export { getAction, insertAction, deleteAction, updateAction };
