
import {useState} from "react"
import TodoInput  from "./components/TodoInput"
import TodoList  from "./components/TodoList"

function App() {
  const [todos , setTodos] = useState([]);
  const [todoValue , setTodoValue] = useState('');//tp access value in input component by list for edit handler
  //make it share with parent component

  const handleAddTodos = (newTodo) => {
    const newTodosList = [...todos , newTodo]
    setTodos(newTodosList);
    
  };
  const deleteTodoHandler =(todoIndx)=>{
      const newTodoList = todos.filter((todo , indx  )=> {return(indx !== todoIndx)} );
      setTodos(newTodoList)
  }
  const editTodoHandler = (todoIndx )=>{
    const valueToBeEdited = todos[todoIndx];
    console.log(valueToBeEdited)
    setTodoValue(valueToBeEdited)
    deleteTodoHandler(todoIndx)//delete the old one
  }

  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos} />
      <TodoList todos={todos}
                deleteTodoHandler={deleteTodoHandler}
                editTodoHandler={editTodoHandler}
        />
    </>
  )
}

export default App
