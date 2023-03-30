import { useDispatch, useSelector } from "react-redux";
import Label from "./label3";

const Todo = () => {
                    //데이터에 접근, reducer에 등록한 todos에서 데이터 가져옴
    const todos = useSelector((todos) => todos);
    // const list = useSelector((list) => list);

    // const dispatch = useDispatch();

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