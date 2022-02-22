import React, { useState } from 'react';
import axios from 'axios';

const Login = ( ) => {
    const baseUrl = "http://localhost:8090";

    const [user_id, setId] = useState('');
    const [user_pwd, setPwd] = useState('');

    const handleId = (e) => {
        setId(e.target.value);
        console.log(user_id);
    }

    const handlePwd = (e) => {
        setPwd(e.target.value);
        console.log(user_pwd);
    }

    function handleSubmit(e) {
        const handleSubmit = async() => { //await 키워드가 비동기 코드를 호출할 수 있게 하기 위해서 async()로 함수를 먼저 비동기함수로 만든다.
            e.preventDefault();
            console.log(user_id);
            console.log(user_pwd);
            
            await axios
                .post(baseUrl+'/member/login', {user_id:user_id, user_pwd:user_pwd})
                .then((response)=>{
                    console.log(response.status);

                    if(response.data.success===true){
                        alert('로그인되었습니다.');
                        sessionStorage.setItem('user_name', response.data.user_name);
                        sessionStorage.setItem('success', response.data.success);
                        sessionStorage.setItem('user_id', response.data.user_id);
                        document.location.href='/';
                    }else {
                        console.log(response.data.success);
                        alert('회원이 아닙니다.');
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        handleSubmit();
        setId('');
        setPwd('');
    }

    return (
        <div>
            <p><input type="text" placeholder="아이디" onChange={handleId} value={user_id} /></p>
            <p><input type="text" placeholder="비밀번호" onChange={handlePwd} value={user_pwd}/></p>
            <p><button onClick={handleSubmit}>로그인</button></p>
        </div>
    );
};

export default Login;