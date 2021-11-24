import React, {useState, useEffect} from "react";
import Card from "../Task/task.card";
import './lista.css'
const Tasks = ()=>{
    const [todo, setTodo] = useState([]);

    useEffect(() => {
        gTodo();
    }, [])

    const gTodo = async () => {
        const request = await fetch('http://localhost:3001/todo')
        const data = await request.json();
        setTodo(data)
    }

    return (
        <div className="cars-lista">
            {todo.map((task)=>(
                <Card data={task} key={task._id}/>
               ))}
        </div>
    )
}

export default Tasks