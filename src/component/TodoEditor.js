import './TodoEditor.css'; 
import {useState, useRef} from 'react'; 

const TodoEditor = ({onCreate}) => {

    //useState 생성 : 할일 내용 : content 
    const [content, setContent] = useState(""); 

    const inputRef = useRef(); 

    // content 갑이 수정 되었을때 
    const onChangeContent = (e) => {
        setContent (e.target.value); 
    }; 

    // input 박스에서 enter 이벤트 처리 
    const onKeyDown = (e) => {
        if (e.keyCode === 13) {
            onSubmit() ; 
        }
    }; 

    // onSubmit () 함수  : input 의 값을 받아서 onCreate 메소드 호출 (App 컴포넌트)
    const onSubmit = () => {

        onCreate(content);      //onCreate(content) : App 컴포넌트
        setContent(""); 
    }


    return (
        <div className = "TodoEditor"> 
            <h4> 새로운 todo 작성하기 ⛷  </h4>
            <div className ="editor_wrapper">
                <input  
                    ref = {inputRef}
                    value = {content}
                    onChange = {onChangeContent}
                    
                
                placeholder ="새로운 todo..." />
                <button> 추가 </button>
            </div>

        </div>
    ); 

}
export default TodoEditor; 