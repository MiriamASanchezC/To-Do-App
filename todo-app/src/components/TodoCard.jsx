export function TodoCard(props){
 {/*Estamos deconstruyendo de Todolist para agarrar los todos */}
    const {todo} = props
   

    return (
        <div className="card todo-item">

            <p>{todo.input}</p>
            <div className="todo-buttons">
                <button disabled= {todo.complete}>
                    <h6>Done</h6>
                </button>
                <button>
                    <h6>Delete</h6>
                </button>
            </div>
        </div>
    )
}