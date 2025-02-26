import { TodoCard } from "./TodoCard";

export function TodoList(props){
    const {todos, selectedTab} = props
  
    {/*Vamos a filtrar para que se muestren los tasks seleccionados */ }
    const filterTodosList = selectedTab === 'All' ? todos :
                            selectedTab === 'Completed' ? todos.filter(val => val.complete):
                            todos.filter(val => !val.complete)

    return(
        <>
        {/* */}
            {filterTodosList.map((todo,todoIndex) =>{
                return (
                    <TodoCard key={todoIndex}
                    todoIndex={todoIndex}
                    {...props}
                      todo={todo}/>
                )
            })}
        </>
    )
}