
import TodoCard from "./TodoCard"

const TodoList = ({todos})=>{

    return (
        <ul className="main">
           { todos.map((todo , todoIndex)=>(
              <TodoCard key={todoIndex} >
                 <p> {todo}</p>
              </TodoCard>
           ))}
        </ul>
    )

}
export default TodoList;