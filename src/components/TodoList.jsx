
import TodoCard from "./TodoCard"

const TodoList = ()=>{

    let todos  = [
        'Go to the gym',
        'Eat more fruits',
        'Learn new skill'
    ]
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