import { useState } from "react"


export function TodoInput(props){

    const{handleAddTodo} = props // Deconstruimos los nuevos todos
    const [inputValue, setInputValue] = useState('')//almacena el texto que el usuario escribe en el campo de entrada, setInputvalue es la funcion que lo actualiza

    return (
        <div className="input-container">
            {/*Aqui es para siempe poder ver lo que se este escribiendo en el input, si se pone un console log se ve el cambio de lo que se esta escribiendo*/}
            <input value= {inputValue}
             onChange={(e)=>{setInputValue(e.target.value)}} 
             placeholder="Add task" />

            <button onClick={() =>{
                if(!inputValue) {return}//Evita agregar tareas vacias
                handleAddTodo(inputValue)//Llama a la funcion para agregar la tarea
                setInputValue('')         //Limpia el input despues de agregar la tarea
            }}>
        {/*Es para poner el + en el boton  y para que aparezca en el index.html se encuentra un link despues del titulo q nos permite mostrar el +*/}
            <i className="fa-solid fa-plus"></i> 
            </button>

        </div>
    )
}