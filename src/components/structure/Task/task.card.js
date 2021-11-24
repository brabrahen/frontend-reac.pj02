import React from "react";
import { Link } from "react-router-dom";
import "./task.card.css"

const Card = (props) => {
    const todo = props.data;
    return (
        <section>
            <form>
                <Link to={`/byid/${todo._id}`}>
                    <button className="box">
                        <h1>{todo.tarefa}</h1>
                        <h4>{todo.prioridade}</h4>
                   
                    </button>
                </Link>
            </form>
        </section>
    )
}

export default Card