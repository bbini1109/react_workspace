
import { useEffect, useRef, useState } from "react";
import { insertAction } from "../reduxs/action";

const Input = () => {
  const inputRef = useRef("");
  const [input, setInput] = useState("");


  const handleChangeText = (e) => {
    setInput(e.target.value);
  };

  const insertTodo = (e) => {
    e.preventDefault();
    insertAction(input);
    setInput("");
  };

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <form onSubmit={insertTodo}>
      <input
        type="text"
        required={true}
        value={input}
        onChange={handleChangeText}
        ref={inputRef}
      />
      <input type="submit" value="Create" />
      {/* form 안에 submit이 있으니 submit event가 발생했을 때 form에서 insertTodo를 발생시키라고 할 수 있음 */}
    </form>
  );
};
export default Input;


//내가 쓴거
// import { useEffect, useRef, useState } from "react";
// import { useDispatch } from "react-redux";
// import { getTodos, insertAction } from "../reduxs/action";
// import axios from "axios";
// import { baseUrl } from "../apiurl";
// import { insertAction } from "../reduxs/action";

// const Input = () => {

//     const inputRef = useRef('');
//     const [input, setInput] = useState('');

//     const dispatch = useDispatch();

//     const handleChangeText = (e) => {
//         setInput(e.target.value);
//     };

//     //db에 데이터 넣기
//   // const insertTodo = async (e) => {
//   //   e.preventDefault(); 
//   // //db와 insert 처리             
//   //   await axios
//   //       .post(baseUrl + '/todo/',{todoname:input})
//   //       .then((response) => {
//   //       setInput('');
//   //       window.location.replace('/');
//   //   });
  
//   // };

//   const insertTodo = (e) => {
//     e.preventDafault();
//     insertAction(input);
//     setInput('');
//   };

//     useEffect(()=>{
//         inputRef.current.focus();
//     });

//     return (       
//         <form onSubmit={insertTodo}> 
//         <input 
//             type='text' 
//             required={true} 
//             value={input} 
//             onChange={handleChangeText} 
//             ref={inputRef} />

//         <input type='submit' value='Create' />
//     </form>
//     );

// }

// export default Input;