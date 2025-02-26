import { useState } from "react";
import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";




function App() {
  
//const todos = [
//   { input: 'Hello! Add your first todo!', complete: true },
//   { input: 'Get the groceries!', complete: false },
//   { input: 'Learn how to web design', complete: false },
//   { input: 'Say hi to gran gran', complete: true },
//   ]

//Aqui estamos declarando los todos por default en este caso si no se encuentra ninguno [] en esta lista no aparecera ninguno
  const[todos, setTodos] = useState([{ input: 'Hello! Add your first todo!', complete: true }])

  const [selectedTab, setSelectedTab] = useState('Open')

//Aqui ira la logica para agregar un todo
  function handleAddTodo(newTodo){
    const newTodoList = [...todos, {input:newTodo, complete:false}] //aqui ...todos hacemos una copia del arreglo de los todos originales y agregamos en nuevo objeto que es el nuevo todo
    setTodos(newTodoList) //En este le pasamos a setTodos los nuevos todos
  }
//Aqui ira la logica para editar un todo
//actualizar/editar/modificar
  function handleCompleteTodo(index){
    
  }
//Aqui ira la logica para eliminar un todo
//Se escribe el indice de la posicion del todo que queremos eliminar
  function handleDeleteTodo(index){
    //Creamos una nueva lista newTodolist sin modificar la original todos,
    //  filtra los elementos dejando que solo aquellos cuyo indice valIndex 
    // sea diferente del index que queremos eliminar
    //val: representa cada todo en el array
    //valIndex: es el indice de cada todo dentro de todo
    let newTodoList = todos.filter((val, valIndex) =>{
      return valIndex !== index
    })
    setTodos(newTodoList)
  }

  return (
   <>

    <Header todos={todos}/>
    <Tabs todos={todos} selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
    <TodoList todos={todos} selectedTab={selectedTab} handleDeleteTodo={handleDeleteTodo}/>
    <TodoInput handleAddTodo= {handleAddTodo}/> {/*le pasamos a la clase los nuevos todos*/}
   </>
  )
}

export default App
