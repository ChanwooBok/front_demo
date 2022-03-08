import { Provider, useDispatch, useSelector } from "react-redux";
import { createStore } from "redux";

// props , useContext, redux 같은 예제로 하였다.


// redux 불변성 원칙
// ...state : 기존의 state르 ㄹ변경하지않고 새로운 메모리를 생성해서 복사해서
//쓴다.

// state 여러개를 reducer에서 저장하고 이들을 store 에 저장해놓고 useSelector로 가져다 쓴다.
function reducer(state, action){
    if(state===undefined){
        return{
            number:0,  // 이로써 , useState를 안 써도 됨.
            // age:30
        }
    } // state값 처리
    
    // return {} 이므로 중괄호로 newState받아야한다.
    const newState = {...state}; //기존 state값 number 복사. (원본을 갖다쓰면 안된다.)
    if(action.type ==='INCREMENT')
        newState.number++;
    
    return newState;
}
//reducer 장점 : state여러개 관리 용이 ,-> 어느곳에서 어떤state를
// 쓸지 정하는게 state를 선택해주는게 useSelector
// dispatch : state 작업 요청

const store = createStore(reducer);
// 어느 component에서 쓸건지 store 묶어줘야 한다.


const PageContainer = () => {

    // const [number, setNumber] = useState(0);
    // const [age, setAge] = useState(30);
    

    return (
        <div id="page">
            <h1>Page</h1>
            <div className="grid">
                {/* 어느 컨텡이너에서 store를 쓸건지 묶어줘야함. */}
                <Provider store={store}>
                 <Left1  />
                 <Right1 />
                </Provider>
            </div>
        </div>
    );
}

const Left1 = () => {
    return(
        <div>
            <h1>Left1:</h1>
            <Left2 />
        </div>
    );
}

const Left2 = () => {
    return(
        <div>
            <h1>Left2: </h1>
            <Left3  />
        </div>
    );
}

const Left3 = () => {

    const number = useSelector( (state) => state.number );

    return(
        <div>
            <h1>Left3:{number}</h1>
        </div>
    );
}


const Right1=(props) => {
    return(
        <div>
            <h1>Right1: </h1>
            <Right2 />
        </div>
    );
}

const Right2=(props) => {
    return(
        <div>
            <h1>Right2: </h1>
            <Right3  />
        </div>
    );
}

//state각각을 store에 저장해놓고 쓰는것. 

const Right3=(props) => {

    //Right3컴포넌트에서 사용할 state를 지정.
    const number = useSelector( (state) => state.number ) ; // 익명함수 이용하여 arrow 함수로 간단히 표현.
    const dispatch = useDispatch(); // dispatch 실행하면 reducer가 실행된다. 

    return(
        <div>
            <h1>Right3: {number}</h1>
            <input type="button" value="+" onClick={()=> dispatch( {type : 'INCREMENT'})} />
        </div>
    );
}

export default PageContainer;