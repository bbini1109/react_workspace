import { useSelector } from "react-redux";
import Label from "./label3";
import { useEffect } from "react";
import { getAction, getTodos } from "../reduxs/action";
import { useDispatch } from "react-redux";


const Todo = () => {
    const todos = useSelector((todos) => todos); //가져오기
    const dispatch = useDispatch();

 useEffect(()=>{
    getAction(dispatch);
 },[]);

    return (
        <>
            {todos ? todos.map((todo)=> {
            return (
                <div className='todo' key={todo.id}>
                    <Label todo={todo}/>
                </div>
            )
        }) : null}
        </>
    );
};  

export default Todo;