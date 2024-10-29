
import {useState} from "react"
import TodoInput  from "./components/TodoInput"
import TodoList  from "./components/TodoList"

function App() {
  const [todos , setTodos] = useState([]);
  const handleAddTodos = (newTodo) => {
    const newTodosList = [...todos , newTodo]
    setTodos(newTodosList);
    
  };

  return (
    <>
      <TodoInput handleAddTodos={handleAddTodos} />
      <TodoList todos={todos}/>
    </>
  )
}

export default App
