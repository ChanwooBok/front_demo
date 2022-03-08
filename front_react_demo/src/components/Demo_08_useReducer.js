/* useReducer : useState보다 더 다양한 컴포넌트 상황에 따라
 다양한 상태를 다른 값으로 업데이트해 주고 싶을 때 사용한다.
   리듀서는 현재상태, 그리고 업데이트를 위해 필요한 정보를 담은 액션(action)값을
   전달받아 새로운 상태를 변환하는 함수이다. 리듀서 함수에서 새로운 상태를
   만들 때는 반드시 불변성을 지켜 주어야 한다.
 */

import { useReducer } from "react";

// dispatcher : 클릭 버튼 이벤트 발생 시 호출되는 작업 , 너 ~ 이런  클릭 이벤트 발생했으니 해 
// -> dispather에 등록된 reduce 수행 시킴  number의 인자값을 받아다가 업데이트함.
// 정리: 클릭 -> dispatcher() -> reduce( state, action) : 실제 작업해야할 값이 저장 되어있음. ( stae,action)은 이미 연결처리 되어있어야 함.


// reducer : state를 업데이트 시켜주는 역할.
// dispatch : state 업데이트 요청
// action : dispatch에서 요청한 내용
function reducer(state, action){
    switch(action.type){
      case 'INCREMENT' : 
       return {value:state.value+1};
      case 'DECREMENT' :
       return {value:state.value-1};
      default :
       return state;
    }
}
// reducer에서는 action으로 들어온 요청을 처리한다.


const Demo_08_useReducer = () => {

  //const [number, setNumber] = useState();
  const [state, dispatch] = useReducer(reducer, {value:0});
  // state: 업데이트할 내용 . value:0 는 초기값. dispatch: event발생시 state업데이트를 요청 
  // dispatch가 state요청을 받아야 reducer에서 실제 작업을 수행한다. {value:0} 은 기본값.
  //dispatch 는 어느이름이든 상관없다. 
  

  return(
    <div>
        <p>
          현재 카운트 값 : <b>{state.value} </b> 입니다.
        </p>
        <button onClick={() => dispatch({type:'INCREMENT'}) }>+1 INCREMENT</button>
        <button onClick={() => dispatch({type:'DECREMENT'}) }>-1 DECREMENT</button>
    
    </div>
  )
}

export default Demo_08_useReducer ;