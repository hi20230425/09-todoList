import './TodoItem.css'; 

const TodoItem = ({id , content, isDone, createDate, onUpdate, onDelete}) => {

    //onChangeCheckbox 함수 
    const onChangeCheckbox  = () =>  {
        onUpdate (id); 
    }
    const onClickDelete = () => {
        onDelete(id); 
    }

    return (
        <div className ="TodoItem">
            <div className ="checkbox_col">
                <input type="checkbox" onChange={onChangeCheckbox} checked = {isDone} /> 
            </div>
            <div className="title_col"> { content }</div>
            <div className="date_col"> { new Date(createDate).toLocaleDateString()} </div>
            <div className="btn_col"> 
                <button onClick = {onClickDelete} > 삭제 </button>
            </div>
            
        </div>
    ); 
}
export default TodoItem; 