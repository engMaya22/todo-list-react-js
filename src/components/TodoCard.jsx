
const TodoCard = ({children})=>{
    return (
        <li className="todoItem" > 
           {children}
           <div className = "actionsContainer">
                <i className="fa-solid fa-pen-to-square"></i>
                <i className="fa-regular fa-trash-can"></i>
            </div>
        </li>
    )

}
export default TodoCard;