import React, { useState , useMemo} from 'react';

// 숫자 데이터를 입력할떄마다 getAverage를 호출함. ( 리 렌더링 ) -> 특정 상황에서만 함수를 호출하고 싶을때 useMemo씀.
const Demo_04_useMemo = () =>{
/**
 *Warning: A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components
    at input
    at div
    at Demo_04_useMemo (http://localhost:3000/static/js/bundle.js:460:74)
    at div
    at App
 */

    const [list , setList] = useState([]); // 별도의 list 라는 저장소에 저장되고 리렌더링 되면 나타난다.
    const [number, setNumber] =  useState(''); // number의 타입을 정해줘야 함 .( '') 안 정해주면 string으로 저장됨.


    const onChange = (e) => {
        console.log('onChange');
        setNumber(e.target.value);
        console.log(e.target.value); 
        //console.log(number); //한 박자 느린 이유: 리렌더링이 바로 안되기 때문에 state값 변한게 바로 뜨지 않음.
        // input창에 아이디적고 axios로 실시간으로 중복체크하려고함.
    }

    const onInsert = () => {
        console.log('onInsert');
        const nextList = list.concat(parseInt(number)); // number를 string에서 int타입으로 바꾸고 ,list로 저장되니까 연결해주기 위해 concat
        setList(nextList);
        setNumber('');
    }

    const getAverage = (listNumbers) => {
        console.log('getAverage');
        if(listNumbers.length===0){
            return 0;
        }else{
            const sum = listNumbers.reduce( (a,b) => a+b );
            return sum/listNumbers.length;
        }
    }
    // useMemo(콜백함수, []);    : dependency index []  가 변할때만 함수를 수행하란뜻.
    const avg  = useMemo( ()=>getAverage(list),[list]); 
    
    



    //하나하나 뽑아쓸때
    //listNumbers.map( (value,index) => {})
    // 결과값을 하나로 뽑아야할때 ( 함수형 프로그래밍 )
    //listNumbers.reduce( (a,b) => a+b );  : a는 누적값(total), b는 하나하나 뽑아온 값.(i)

    //반복되는 작업은 key값으로 unique 하게 분류해주어야 한다.

    // 실행순서 : getAverage (호출하고있으므로) -> 값을 입력하면 onChage -> state값이 바뀌었으므로 리렌더링이 발생해서  다시 getAverage
    return (
        <div>
            <input value={number} onChange={onChange} />
            <button onClick={onInsert}> 등록</button>
            <ul>
                {list.map( (value, index) => {
                    return(
                        <li key={index}>{value}</li>
                        )
                })}
            </ul>

            <div>
                {/* <b>평균값: </b><span>{getAverage(list)}</span> */}
                <b>평균값: </b><span>{avg}</span>
            </div>
        </div>
    )
}

export default Demo_04_useMemo;