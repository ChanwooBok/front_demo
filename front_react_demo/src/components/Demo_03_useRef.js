import { useEffect, useRef, useState } from "react";

const Demo_03_useRef = () => {

    const fnameInput = useRef(); // 리액트에서 어떤 요소에 접근 해야 할 땐 useRef() 를 쓴다.

    /* 화면 띄울 시 입력 창에 자동으로 포커스가 맞춰지도록 하기. */

    useEffect( () =>{ // useEffect()는 작업 순서상 가장 마지막에 실행 됨.
        fnameInput.current.focus();
    }

    );



    const inputName = () => {
        // let fname = document.getElementById("fname").value;
        // alert(fname + '고객님 안녕하세요.')
        
        //스크립트로 접근 시 돔으로 접근해야함. 이때 쓰는것이 useRef이다.
        alert(fnameInput.current.value + '고객님 안녕하세요.');
        //alert(fnameInput.current.text + '고객님 안녕하세요.');
        
        // input에는 type ,placeholder등 객체의 많은 속성이 있으므로 이중 필요한 value만 써준다.
    }

    return (
        <div>
            {/* <input type="text" placeholder ="이름" id="fname" /> */}
            <input type="text" placeholder ="이름" ref={fnameInput} />
            <button onClick={inputName}>click</button>
        </div>
    )
}

export default Demo_03_useRef;