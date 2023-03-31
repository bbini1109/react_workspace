
import './App.css';
import {useEffect, useRef, useState} from 'react';
import axios from 'axios';
import { baseUrl } from './apiurl';

function App() {

  const inputRef = useRef('');

  const wrap = {
    width : '500px',
    border : '1px solid black',
    margin : '10px auto',
  };

  // let boardList = [
  //   {id : 1, todoname : '운동하기', completed : 0},
  //   {id : 2, todoname : 'SNS꾸미기', completed : 0},
  //   {id : 3, todoname : '사진정리하기', completed : 0},
  // ]

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

  //db에서 데이터 가져오기
  //async, await
  //async function getTodos(){}와 같음
  const getTodos = async() => {//요청이 정상적으로 처리되면 -> //.then() 결과값 받아오기
             //.get(baseUrl + '/todo/all')
    await axios.get(`${baseUrl}/todo/all`).then((response) => {
      console.log(response);
      console.log('111111111');
      setTodos(response.data); //서버에서 넘어오는 데이터를 담기
    }).catch((error)=>{
      console.log(error);
    });

    console.log('222222222');
  };

  useEffect (()=> {
    getTodos();

  },[]);

  useEffect(()=>{
    inputRef.current.focus();  
  },[input]); //[]가 없으면 리렌더링 될 때 마다 useEffect가 실행된다. state가 바뀔 때 마다 리렌더링 됨.

  return (
    <div className='App' style={wrap}>

      <h1>TODO LIST</h1>

      {/*submit 이벤트가 발생하면 insertTodo를 실행해라. */}
    <form onSubmit={insertTodo}> 
      <input type='text' required={true} value={input} onChange={handleChangeText} ref={inputRef} />
      <input type='submit' value='Create' />
    </form>

      {todos ? todos.map((todo)=>{
          return (
            <div className='todo' key={todo.id}>
              <h3>
                <label className={todo.completed === 1 ? 'completed' : null}
                  onClick={()=>{updateTodo(todo.id)}}> 
                  {todo.todoname}
                </label>
                <label onClick={()=>{deleteTodo(todo.id)}}> &nbsp;&nbsp;삭제 </label>
              </h3>  
            </div>
          );
        })
      :null}
    </div>
  );
}

export default App;
