export function Tabs(props){

    const {todos} = props

    const tabs = ['All', 'Open', 'Completed']
    return (
        <nav className="tab-container">
             {/*Recorre el array tabs, ejecutando el codigo dentro de la funcion para cada elemento*/}
             {/* tab representa cada elemento del array y tabindex el indice de cada elemento */}
             {/* Asi creamos varios botones con la funcion  */}

            {tabs.map((tab, tabindex) => {
                {/*Si tab es igual a All, se van a mostrar todos los to-dos*/ }
                {/*Si tab es igual a Open , muestra los to-dos que no estan completos*/}
                {/*y sino es igual a estos abrira los que estan completos*/}
                {/* y agregamos el numOfTasks en nuesto span para que se muestre */ }

                const numOfTasks = tab === 'All' ? todos.length : tab === 'Open' ? todos.filter(val => val.complete).length:
                                                    todos.filter(val => val.complete).length
                return(
                    
                    <button key={tabindex} className="tab-button">{/* key es un id unico en una lista de elementos */}
                        <h4>{tab} <span>({numOfTasks})</span></h4>
                    </button>
                )
            })}
        </nav>
    )
}