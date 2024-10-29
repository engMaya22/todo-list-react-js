
const TodoCard = (props)=>{
    const {children , deleteTodoHandler , todoIndex ,editTodoHandler} = props
    return (
        <li className="todoItem" > 
           {children}
           <div className = "actionsContainer">
                 <button onClick = {
                       ()=> {editTodoHandler(todoIndex )}}>  
                       <i className="fa-solid fa-pen-to-square"></i></button>
                 <button  onClick={
                       ()=>{deleteTodoHandler(todoIndex)}
                    }> <i className="fa-regular fa-trash-can"></i></button>
            </div>
        </li>
    )

}
export default TodoCard;