
//상태전달 : props

import './App.css';
import {useEffect, useRef, useState} from 'react';
import Todo from './components/todo1';
import Input from './components/input1';
import axios from 'axios';
import {baseUrl} from './apiurl';

function App() {

  const inputRef = useRef('');

  const wrap = {
    width : '500px',
    border : '1px solid black',
    margin : '10px auto',
  };

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleChangeText = (e) =>{
    setInput(e.target.value);
  };

 //db에 데이터 넣기
  const insertTodo = async (e) => {
  //페이지 이동하는 이벤트(form action='#' 설정)를 막기 위해 설정
  e.preventDefault();

//db와 insert 처리                    //데이터는 객체 형태로
await axios.post(baseUrl + '/todo/',{todoname:input}).then((response) => {
  console.log(response.data);
  setInput('');
  getTodos(); // insert한 데이터 요청
  });

};

   //db에서 데이터 삭제
  const deleteTodo = async (id) => {
    await axios.delete(baseUrl + '/todo/' + id).then((response)=>{
      console.log(response.data);
      getTodos(); //삭제 후 db에 업데이트 된 리스트 가져오기
    }).catch((error)=>{
      console.log(error);
    });
  };

 //db에서 데이터 업데이트 
  const updateTodo = async (id) => {
  let completed = todos.filter((todo) => todo.id === id)[0].completed;
  console.log("completed : " + completed);

  await axios
    .put(baseUrl + "/todo/" + id + "/" + completed)
    .then((response) => {
      console.log(response.data);
      getTodos();
    })
    .catch((error) => {
      console.log(error);
    });
};


  const getTodos = async() => { //요청이 정상적으로 처리되면 -> //.then() 결과값 받아오기
      //.get(baseUrl + '/todo/all')
  await axios.get(`${baseUrl}/todo/all`).then((response) => {
    console.log(response);
    setTodos(response.data); //서버에서 넘어오는 데이터를 담기
    }).catch((error)=>{
    console.log(error);
  });
};

    useEffect (()=> {
        inputRef.current.focus();
  },[input]);

  useEffect(()=>{
    getTodos();
  }, []);

    return (
        <div className='App' style={wrap}>

            <h1>TODO LIST</h1>
            <Input 
            insertTodo={insertTodo} 
            input={input} 
            handleChangeText={handleChangeText} 
            inputRef={inputRef} />
    
            <Todo todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />   
        </div>
    );
}

export default App;
