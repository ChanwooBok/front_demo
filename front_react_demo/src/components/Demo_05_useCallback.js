import React, { useState , useMemo, useCallback, useEffect} from 'react';

// useCallback(생성할 함수 , [])
//두번쨰 인자는 배열로 ( [] dependency array ) 함수 내부에서 상태값을 의존할 떄 넣어준다.



const Demo_05_useCallback = () =>{



    const [list , setList] = useState([]); // 별도의 list 라는 저장소에 저장되고 리렌더링 되면 나타난다.
    const [number, setNumber] =  useState(''); // number의 타입을 정해줘야 함 .( '') 안 정해주면 string으로 저장됨.


    const onChange = useCallback ((e) => {
        console.log('onChange');
        setNumber(e.target.value);
        console.log(e.target.value); 
        
    },[]); // number state값이 변경될때만 함수를 새로 생성해서 처리해주란 의미.

    const onInsert = useCallback ( () => {
        console.log('onInsert');
        const nextList = list.concat(parseInt(number)); // number를 string에서 int타입으로 바꾸고 ,list로 저장되니까 연결해주기 위해 concat
        setList(nextList);
        setNumber('');
    } ) ;

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
    
    
    useEffect ( 
       ()=> {
           console.log("함수가 생성ㅎ됨");
           onInsert();
       }, [] 
    );

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

export default Demo_05_useCallback;