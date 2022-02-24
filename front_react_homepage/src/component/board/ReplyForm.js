import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { baseUrl } from "../../config"; // 상위폴더로 2번이동 : ../ 2번



const ReplyForm = () => {
    
    const navigate= useNavigate();
    const {articleNO} = useParams(); // parameter 쓰려면 이거 써야함. -> parentNO 로 쓰기위함.
    // 어디서 받아오지 근데? -> navigate(`/board/replyForm/${articleNO}`); 로 넘겨줄때 인자까지 전달한다. 

    const [title,setTitle]  = useState(''); // 초기값 String이라 ''
    
    const [content, setContent] =useState('');
    const [imageFileName, setImageFileName] = useState('');

    const fn_reply = async() =>{
        
        // multipart를 해야하므로 가져온ㄷ.
        const formData=  new FormData(); // 첨부파일을 담아서  formData라는 객체에 담아 넘길 용도.
        formData.append("title",title) //  key , value 형태로 백엔드에서 받아서 쓸 수 있다.
        formData.append("content",content);
        formData.append("imageFileName" ,imageFileName);
        formData.append("user_name", sessionStorage.getItem("user_name"));
        formData.append("user_id", sessionStorage.getItem("user_id"));
        formData.append("parentNO", articleNO); // 인자로 받아온 articleNO를 parentNO로 쓴다. 즉, 어떤 글 A에 대하여 답글을 쓸때 A의 articleNO가 답글의 parentNO가 된다.    
        

        await axios
         .post(baseUrl + "/board/addReply" , formData ,{ headers: {"Content-Type":"multiaprt/form-data; boundary=${formData._boundary"}})
         .then( (response) => {
            alert(response.data.message);
            navigate(response.data.path);
         })
         .catch( (error) => {
            console.log(error);
        })
    }
    
    
    const readURL = (e) => {
        if(e.target.files && e.target.files[0]){
            let reader = new FileReader();
            reader.onloadend = function(){
                //파일이 로드 되었으면 preview이미지로 보여줘야함.
                document.getElementById("preview").setAttribute('src',reader.result);
                // reader를 이용해서 이미지를 읽어오고 src속성에 추가한다.
            }

            reader.readAsDataURL(e.target.files[0]);
            setImageFileName(e.target.files[0]);
            
        }
    }

    //취소 하기
    const backToList = () => {
        navigate('/board/list');
    }


    return(
        <div>
           <table>
               <tbody>
        <tr>
			<td align="right"> 작성자:&nbsp; </td>
			<td><input type="text" size="20" maxLength="100"  name="writer" value={sessionStorage.user_name} readOnly /> </td>
		</tr>
		<tr>
			<td align="right">제목:&nbsp;  </td>
			<td><input type="text" size="67"  maxLength="500" name="title" onChange={ (e) => {setTitle(e.target.value)}} /> </td>
		</tr>
		<tr>
			<td align="right" valign="top">내용:&nbsp; </td>
			<td><textarea name="content" rows="10" cols="65" maxLength="4000" onChange={ (e) => {setContent(e.target.value)}}/>  </td>
		</tr>

		<tr>
			<td align="right">이미지파일 첨부:  </td>
			<td> <input type="file" name="imageFileName"  onChange={readURL} /></td>
            <td><img  id="preview" src="#"   style={{width:"200", height:"200"}} alt="preview"/></td>
		</tr>
		<tr>
			<td align="right"> </td>
			<td>
				<input type="button" value="답글쓰기" onClick={fn_reply} />
				<input type="button" value="취소"onClick={backToList} />
				
			</td>
		</tr>
        </tbody>
    </table>
        </div>
    )
    }


export default ReplyForm;