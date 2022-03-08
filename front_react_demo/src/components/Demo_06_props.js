import { useState } from 'react';
import './Demo_06_props.css';

// left3, right3 로 넘겨주기 위해서 위에서부터 일일이 넘겨주는거 귀찮다. -> useContext 써야 할 이유
const Page = () => {

    const [number, setNumber] = useState(0);
    const onHandleIncrease= () => {
        setNumber(number + 1);
    }

    return (
        <div id="page">
            <h1>Page</h1>
            <div className="grid">
                <Left1 number={number}  />
                <Right1 number={number} onHandleIncrease = {()=> onHandleIncrease()} />
            </div>
        </div>
    );
}

const Left1 = ({number}) => {
    return(
        <div>
            <h1>Left1:{number}</h1>
            <Left2 number={number}/>
        </div>
    );
}

const Left2 = ({number}) => {
    return(
        <div>
            <h1>Left2:{number}</h1>
            <Left3 number={number} />
        </div>
    );
}

const Left3 = ({number}) => {
    return(
        <div>
            <h1>Left3:{number}</h1>
        </div>
    );
}


const Right1=(props) => {
    return(
        <div>
            <h1>Right1: {props.number}</h1>
            <Right2 number={props.number} onHandleIncrease={()=> props.onHandleIncrease()}/>
        </div>
    );
}

const Right2=(props) => {
    return(
        <div>
            <h1>Right2: {props.number}</h1>
            <Right3 number={props.number} onHandleIncrease={()=> props.onHandleIncrease()} />
        </div>
    );
}

const Right3=(props) => {
    return(
        <div>
            <h1>Right3: {props.number}</h1>
            <input type="button" value="" onClick ={ () => props.onHandleIncrease()} />
        </div>
    );
}

export default Page;