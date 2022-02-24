import { useEffect, useState } from 'react';
import './BoardList.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { baseUrl } from "../../config"; // 상위폴더로 2번이동 : ../ 2번

//useEffect(callback, dependency array[])
//useEffect(callback) : 모든 update, upmount 시 callback 무조건 수행
//useEffect(callback, []) : componet가 최초 렌더링 될때만 callback실행
//useEffect(callback, [boardList])  : component가 최초 렌더링될때, state(boardList)가 update될때 callback 실행

const BoardList = ( ) => {
    //const baseUrl = "http://localhost:8090";
    const [ boardList,  setBoardList] = useState([]);

    useEffect(()=>{
        axios.get(baseUrl + '/board/listArticles')
            .then((response) => {
                console.log(response.data);
                setBoardList(response.data);
            })
            .catch((error)=> {
                console.log(error);
            })
    },[]);

    let result = [];

    return (
        <div>
            <table style={{align:"center", border:"1", width:"80%"}}>
                <thead>
                    <tr style={{height:"10", align:"center", backgroundColor:"lightgreen"}}>
                        <th>글번호</th>
                        <th>작성자</th>
                        <th>제목</th>
                        <th>작성일</th>
                    </tr>
                </thead>
                <tbody>
                    {boardList.length===0 ?  
                      <tr>
                          <td colSpan="4">
                              <p style={{align:"center"}}>
                                    <b><span style={{fontSize:"9pt"}}>
                                        등록된 글이 없습니다.
                                    </span></b>
                              </p>
                          </td>
                      </tr>
                    : 
                      boardList.map((article, key) => {
                           // key값은 unique값이라 한번만 써야함.
                          return(
                              <tr style={{align:"center"}} key={key}> 
                                  <td style={{width:"5%"}}> {article.articleNO} </td>
                                  <td style={{width:"10%"}}> {article.id} </td>
                                  <td style={{textAlign:"left", width:"35%"}}>
                                    {  ( () => {
                                        result = [] // 초기화 , return 에서는 if문 못쓴다.

                                        if(article.level > 1 ){
                                            for(let i = 0 ; i < article.level; i++){
                                                result.push(<span key={i} style={{paddingLeft:"10px"}}></span>)
                                            } // 공백을 주기 위함 ( 댓글,답변글..)
                                            result.push(<span style={{fontSize:"12px"}}>[답변]</span>);
                                        }// 답변글 처리

                                        result.push(<Link to={`/board/viewArticle/${article.articleNO}`}>{article.title}</Link>);
                                        // "" 로하면 문자그대로 내보냄 , ``백틱을 쓰면 변수를 가져다 쓸 수 있음.
                                        return (result);
                                        }
                                    )()  //함수를 정의함과 동시에 실행해주면 return안에서도 if쓸수있다.
                                     // jsx문법 쓸 땐 함수를 쓸떈 중괄호로 묶어줘야 한다.
                                  } 
                                  
                                  </td>
                                  <td style={{width:"10%"}}> {article.writeDate} </td>
                              </tr>
                          )
                      })
                    }
                </tbody>
            </table>
            <Link className="cls1" to="/board/articleForm"><p className="cls2">글쓰기</p></Link>
        </div>
    );
}

export default BoardList;