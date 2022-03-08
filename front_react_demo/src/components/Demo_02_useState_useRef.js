import { useRef, useState } from "react";

/*   */
const Demo_02_useState_useRef = () => {

    const [ count, setCount] = useState(0); // useState , state값이 바뀔때마다 전체가 리렌더링 됨. 
    const countRef = useRef(0); // html요소에 접근할 때 document.getELement~ 등 할 필요 없이 DOM으로 바로 접근하게함.
    let countLet = 0; // 일반 변수

    console.log("start");

    console.log("before count : " , count);


    const upCountState = () => {
        setCount(count + 1);
        console.log("state : " , count);
    }
     // state값은 변경이 되면 리렌더링이 된다. 
    const upCountRef = () => {
        console.log(countRef); // {current: 0} 
        console.log("ref : " ,countRef.current = countRef.current+1); //  0 : Ref는 current로 속성을 불러와야한다.
        
    }

    const upCountLet = () => {
        console.log("let : " , countLet = countLet+  1);
    }
    // 리렌더링이 되면 Let은 초기화 되버림. vs State & Ref 는 리렌더링되도 값 유지 


    //Ref 는 버튼 눌러도 안 바뀐다. 즉, return 이 다시 되지 않는다는 뜻.-> 리렌더링x
    // Ref & Let : re rendering 이 안된다.
    // useState, Ref : 리렌더링 되어도 값이 저장됨.
    // useRef: dom에 값을 저장하기 위함. 직접적으로 값 저장가능 ( input 등의 값..)

    return(
        <div>
            <p>State: {count}</p>
            <p>Ref: {countRef.current} </p> 
            <p>Let : {countLet}</p>
            <button onClick={upCountState}> State Up</button>
            <button onClick={upCountRef}> Ref up</button>
            <button onClick={upCountLet}> Let up</button>
            
        </div>

    )
}

export default Demo_02_useState_useRef;