
import TodoCard from "./TodoCard"

const TodoList = (props)=>{
   const {todos   } = props;
   // destruct just what i need in list

    return (
        <ul className="main">
           { todos.map((todo , todoIndex)=>(
              <TodoCard {...props } todoIndex = {todoIndex} key={todoIndex} >
               {/* send all props that list recieve + todoIndex */}
                 <p> {todo}</p>
              </TodoCard>
           ))}
        </ul>
    )

}
export default TodoList;