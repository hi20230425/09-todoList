import './App.css';
import Header from './component/Header';
import TodoEditor from './component/TodoEditor';
import TodoList from './component/TodoList';

import { useRef, useState} from 'react'; 

// Mock Date (Dumy Date) : 프로그램을 작동하기 위한 임시 데이터 (가짜 데이터)

// 객체
// const 로 선언하더라도 객체의 속성값을 수정이나 삭제가 가능 함. 

const mockDate = [
  {
    id : 0,
    isDone : false, 
    content: "React 공부하기", 
    createDate : new Date().getDate()
  }, 
  {
    id : 1,
    isDone : false, 
    content: "노래 연습하기", 
    createDate : new Date().getDate()
  },
  {
    id : 2,
    isDone : false, 
    content: "빨래 널기", 
    createDate : new Date().getDate()
  }
]


function App() {
    // 최 상위 컴포넌트  : root 컴포넌트 
    // useState 선언 : 값이 수정이되면 랜더링이 자동으로 일어남 
    //todo : 배열 [ {객체}, {객체}, {객체}]
    const [todo , setTodo] = useState(mockDate); 

    // 컴포넌트의 라이프사이클 : 생성(mount) ===> 수정 (값이 변경도면 리랜더링)=>삭제(unmount)
    //    컴포넌트가 생성되는 시점에서 객체의 id 값이 : 0, 1, 2 
    //   컴포넌트가 생성시점이 아니라 수정시점에서 초기값 할당 :  id 값을 3번 부터 할당 

    const idRef = useRef(3); 

    // Todo를 생성하는 함수 : onCreate
        //content 를 인풋 받아서 
    const onCreate = (content) => {
      const newItem = {
        id : idRef.current, 
        content , 
        isDone : false , 
        createDate : new Date().getTime(),  
      }; 

      setTodo ([newItem, ...todo]); 
      idRef.current += 1; 

    }; 

    // Todo를 수정하는 함수 : onUpdate

    // Todo를 삭제 하는 함수 : onDelete


  return (
    <div className="App">
        <Header /> 
        <TodoEditor /> 
        <TodoList /> 
    </div>
  );
}

export default App;
