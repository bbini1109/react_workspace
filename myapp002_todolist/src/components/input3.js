import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

const Input = () => {

    const inputRef = useRef('');

    const [input, setInput] = useState('');

    const dispatch = useDispatch();

    const handleChangeText = (e) => {
        setInput(e.target.value);
    };
            //reducer에 있는 todos에 넣어준다
    const insertTodo = (e) => {
        e.preventDefault();
            //reducer에 정의된 switch가 실행되게 해야 함
        dispatch({type: 'INSERT', todoname:input}); // 여기에서 넘겨주는 값은 reducer에 있는 action에서 받음
        setInput(''); 
    };

    useEffect(()=>{
        inputRef.current.focus();
    });

    return (       
        <form onSubmit={insertTodo}> 
        <input 
            type='text' 
            required={true} 
            value={input} 
            onChange={handleChangeText} 
            ref={inputRef} />

        <input type='submit' value='Create' />
    </form>
    );

}

export default Input;