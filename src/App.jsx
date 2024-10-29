
import {useState , useEffect} from "react"
import TodoInput  from "./components/TodoInput"
import TodoList  from "./components/TodoList"

function App() {
  const [todos , setTodos] = useState([]);
  const [todoValue , setTodoValue] = useState('');//tp access value in input component by list for edit handler
  //make it share with parent component


  const persistData = (newList)=>{
    localStorage.setItem('todos' , JSON.stringify({todos:newList}))
  }
  const handleAddTodos = (newTodo) => {
    const newTodosList = [...todos , newTodo]
    persistData(newTodosList)
    setTodos(newTodosList);
    
  };
  const deleteTodoHandler =(todoIndx)=>{
      const newTodoList = todos.filter((todo , indx  )=> {return(indx !== todoIndx)} );
      persistData(newTodoList)
      setTodos(newTodoList)
  }
  const editTodoHandler = (todoIndx )=>{
    const valueToBeEdited = todos[todoIndx];
    setTodoValue(valueToBeEdited)
    deleteTodoHandler(todoIndx)//delete the old one
  }

  useEffect(()=>{
    if(!localStorage)
      return
    let localTodos = localStorage.getItem('todos')
    if(!localTodos)
      return
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)

  },[])//empty dependency to run whenver load page
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
