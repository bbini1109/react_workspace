//프로젝트에서 store는 하나만 있어야 함.

import { reducer } from "./reducer";
import {legacy_createStore as createStore} from 'redux'; //지금만 사용 나중에 바꿈

            //reducer에 정의해 놓은 boardList가 store에 저장됨.
export const store = createStore(reducer); //npm install redux react-redux, reducer 등록