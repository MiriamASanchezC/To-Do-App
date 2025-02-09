export function Header(props){ {/* Recibimos un parametro que es los todos de App.jsx  */}
    const { todos } = props
    const todosLength = todos.length ; {/* El tamaño de los todos que estan en App.jsx  */}
    const isTasksPlural = todos.length != 1 ; {/*Si el tamaño de los todos es diferente de 1 */}
    const taskOrTasks = isTasksPlural ? 'tasks' : 'task';  {/*Utilizamos un operador ternario para poner que si es plural se pongan tasks sino task  */}
    return(
        <header>


             {/* Aqui mostramos cuantos todos son y aplicamos si son plurales  */}
            <h1 className="text-gradient">You have {todosLength} open {taskOrTasks}.</h1>

        </header>
    )
}