//실제 사용 할 값을 넣음

let boardList = [
    {id : 1, todoname : '운동하기', completed : 0},
    {id : 2, todoname : 'SNS꾸미기', completed : 0},
    {id : 3, todoname : '사진정리하기', completed : 0},
   ];
                         //사용 할 데이터값 선언
  export const reducer = (todos = boardList, action) => {
    switch(action.type){ //action값을 type에 넣어서 사용
        case 'INSERT' : //추가
        return [
            {id : todos.length + 1, todoname : action.todoname, completed :0},
        ];
        
        default : // 목록
        return todos;
    }
   }