import { useContext, useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { UserContext } from '../contexts/UserContext';
import './Demo_06_props.css';


const Page = () => {

    const [number, setNumber] = useState(0);
    const [name , setName] = useState('홍길동');


    const onHandleIncrease= () => {
        setNumber(number + 1);
    }
    // ThemeContext.Provider 안에 있는 곳에서는 위의 자원을 모두 사용 할 수 있다.
    // 내부 컴포넌트들에서 자원을 직접 사용 할 수 있다.

    const onHandleName = ()=>{
        setName("찬우");
    }


    return (
        <UserContext.Provider value={{name, setName, onHandleName}}>
            <ThemeContext.Provider value={{number, setNumber , onHandleIncrease}}>
                <div id="page">
                    <h1>Page</h1>
                    <div className="grid">
                        <Left1   />
                        <Right1  />
                    </div>
                </div>
            </ThemeContext.Provider>
        </UserContext.Provider>
    );
}

const Left1 = () => {
    const {name} = useContext(UserContext);
    return(
        <div>
            <h1>Left1:</h1>
            <h2>Name: {name} </h2>
            <Left2 />
        </div>
    );
}

const Left2 = () => {
    return(
        <div>
            <h1>Left2:</h1>
            <Left3  />
        </div>
    );
}

const Left3 = () => {
    const {number} = useContext(ThemeContext); //  useContext : 여러단계로 컴포넌트가 되어있을때
    // 상위의 자원을 하위에서 직접적으로 쓰고 싶을때 쓴다. ( 일일이 단계적으로 물려줄 필요가 없음.)

    return(
        <div>
            <h1>Left3:{number}</h1>
        </div>
    );
}


const Right1=() => {
    return(
        <div>
            <h1>Right1: </h1>
            <Right2 />
        </div>
    );
}

const Right2=() => {
    return(
        <div>
            <h1>Right2: </h1>
            <Right3  />
        </div>
    );
}

const Right3=() => {
    const {number , onHandleIncrease} = useContext(ThemeContext);
    const {onHandleName} = useContext(UserContext);


    return(
        <div>
            <h1>Right3: {number} </h1>
            <input type="button" value="이름변경" onClick={ ()=> onHandleName()} />
            <input type="button" value="+" onClick= { ()=> onHandleIncrease()} />
        </div>
    );
}

export default Page;

    