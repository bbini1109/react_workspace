
//상태전달 : props

import './App.css';
import {useEffect, useRef, useState} from 'react';
import Todo from './components/todo1';
import Input from './components/input1';

function App() {

  const inputRef = useRef('');

  const wrap = {
    width : '500px',
    border : '1px solid black',
    margin : '10px auto',
  };

  let boardList = [
    {id : 1, todoname : '운동하기', completed : 0},
    {id : 2, todoname : 'SNS꾸미기', completed : 0},
    {id : 3, todoname : '사진정리하기', completed : 0},
  ]

  const [todos, setTodos] = useState([...boardList]);
  const [input, setInput] = useState('');

  const handleChangeText = (e) =>{
    setInput(e.target.value);
  };

  const insertTodo = (e) => {
    //페이지 이동하는 이벤트(form action='#' 설정)를 막기 위해 설정
    e.preventDefault();
    setTodos([...todos, {id:todos.length+1, todoname:input, completed:0},
  ]);

    setInput('');
  };

    const deleteTodo = (id) => {
                                      //선택한 id와 같지 않으면 리턴해줘라. (선택한 id는 삭제해야 하기 때문에)
    // setTodos(todos.filter((todo)=>{ return todo.id !== id;})
    // );

    //filter -> 원래 데이터 보다 축소됨.
    setTodos(todos.filter((todo)=>todo.id !== id)); //return 할 것이 한개일 때는 {return} 생략 가능
    };

    //map -> 원래 데이터 그대로 
  const updateTodo = (id) => {                              //객체 -> 키 : 값
    setTodos(todos.map((todo)=> todo.id === id ? {...todo, completed : todo.completed === 1 ? 0 : 1} : todo));
    };

    useEffect (()=> {
        inputRef.current.focus();
  }); //[]가 없으면 리렌더링 될 때 마다 useEffect가 실행된다. state가 바뀔 때 마다 리렌더링 됨.

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
