import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "./../../api/api";
import "./../Edit/Edit.css";

const Edit = () => {
  const navigate = useNavigate();
  const [todo, setTodo] = useState({
    tarefa: "",
    descricao: "",
    estado: "",
    prioridade: "",
    prazo: "",
  });

  useEffect(() => {
    byId();
  }, []);

  const { id } = useParams();

  const byId = async () => {
    const request = await api.fetchGetById(id);
    const todo = await request.json();
    setTodo(todo);
  };

  const hfEdit = (e) => {
    const todoEdit = { ...todo };
    todoEdit[e.target.name] = e.target.value;
    setTodo(todoEdit);
  };

  const hSubmit = async (e) => {
    e.preventDefault();
    const request = await api.fetchPut(todo, id);
    const data = await request.json();
    alert(data.message);
    navigate(`/byid/${id}`);
  };

  return (
    <section className="edit-section">
      <div className="task">
        <h1>Diga qual sua tarefa</h1>
      </div>
      <form onSubmit={hSubmit} className="fields">
        <div>
          <label htmlFor="tarefa">Qual a tarefa?</label>
          <input
            id="tarefa"
            onChange={hfEdit}
            className="tarefa"
            type="text"
            placeholder="Escreve aqui pra não esquecer"
            value={todo.tarefa}
            name="tarefa"
          />
        </div>
        <div>
          <label htmlFor="descricao">Descrição:</label>
          <input
            id="descricao"
            onChange={hfEdit}
            className="descricao"
            type="text"
            placeholder="Descreva sua tarefa"
            value={todo.descricao}
            name="descricao"
          />
        </div>
        <div>
          <label htmlFor="prioridade">Prioridade:</label>
          <select
            name="prioridade"
            className="prioridade"
            value={todo.prioridade}
          >
            <option value="Alta">Alta</option>
            <option value="Média">Média</option>
            <option value="Baixa">Baixa</option>
          </select>
        </div>
        <div>
          <label htmlFor="prazo">Prazo:</label>
          <input
            id="prazo"
            onChange={hfEdit}
            className="prazo"
            type="string"
            placeholder="Formato YYYY-MM-DD"
            value={todo.prazo}
            name="prazo"
          />
        </div>
        <div className="radio">
          <label htmlFor="estado">Status:</label>
          <select name="estado" className="estado">
                <option value="Pendente">Pendente</option>
                <option value="Concluído">Concluído</option>
              </select>
        </div>
        <div className="btn">
          <button type="submit">Editando tarefa</button>
        </div>
      </form>
    </section>
  );
};

export default Edit;
