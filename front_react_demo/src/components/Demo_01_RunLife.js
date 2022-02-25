const { useEffect } = require("react");

/* 실행 순서 파악하기  */
const Demo_01_RunLife = () => {

	console.log("start"); // 1 번째 실행
	
    useEffect(() => {
		console.log("useEffect");
        method();
	}); // 3 번째 실행 ( 가장 마지막)
    
    const method = () => {
        console.log("method");
    }

	return(
		<div>
            {console.log("return)")} 
        </div>
	)	// 2 번째 실행
}

export default Demo_01_RunLife;