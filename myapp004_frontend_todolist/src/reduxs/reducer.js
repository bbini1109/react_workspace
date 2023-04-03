//실제 사용 할 값을 넣음, 모든 데이터 관리 페이지
//reducer는 여러개가 있어도 됨.

   export const reducer = (todos, action) => {
    switch(action.type){ //action값을 type에 넣어서 사용
        // case 'INSERT' : //추가
        // return [...todos,  
        //     {id : todos.length + 1, todoname : action.todoname, completed :0},
        // ]; //return한 데이터는 최종적으로 todos에 저장됨.
        
        // //label3에서 넘어온 deleteTodo 수행
        // case 'DELETE' : // 삭제        //id값이 다른것은 삭제되지 않고 남겨두어야함.
        // return todos.filter((todo)=> todo.id !== action.id);

        // case 'UPDATE' : //수정                  //action을 통해서 id를 넘겨받음         //completed 값이 0이면 1로 1이면 0으로
        // return todos.map((todo) => todo.id === action.id 
        // ? {...todo, completed:todo.completed === 1 ? 0 : 1} : todo);

        case 'LIST' : // 목록
            return (todos = action.todos);
        default :
            return null;

        
    }
  };