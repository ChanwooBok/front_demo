
//reducer : state를 업데이트 해주는 역할
//dispatch : state업데이트 요청
//action : 요청한 내용

import { useReducer, useState } from "react";


function reducer(state,action){

    console.log(action);
    // ..state : 앞에있는 값 그대로 복사
    return {
        ...state, 
        [action.name]:action.value
    }
}

const Demo_09_useReducer = () => {
    
    // const [name,setName] = useState('');
    // const [nickname,setNickname] = useState('');

    const [state,dispatch] = useReducer(reducer, {name:'' , nickname:''});
    //state = {name:'' , nickname:''}
    const {name, nickname} = state;
    //state받아오기 / 중괄호로 받아와야 함. 24에서 중괄호 이므로 .
    
    const onChange = (e) =>{
        dispatch(e.target); // 객체값 받아오기. dispatch가 실행되야 reducer가 실행됨.
    }

    return(
        <div>
            <div>
                <input value={name} onChange={onChange} name='name'/>
                <input value={nickname} onChange={onChange} name='nickname' /> 
            </div>

            <div>
                <div>
                    <b>이름:</b>{name}
                </div>    
                <div>
                    <b>닉네임:</b>{nickname}
                </div>
            </div> 
         </div>  
        );

    
}

export default Demo_09_useReducer;