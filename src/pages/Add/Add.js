import React from 'react'
import api from './../../api/api';
import { useNavigate } from 'react-router-dom';
import './add.css'

const Add = () => {
    const navigate = useNavigate();

    const hSubmit = async (evento) => {
        evento.preventDefault();
        const tarefa = evento.target.tarefa.value;
        const descricao = evento.target.descricao.value;
        const prioridade = evento.target.prioridade.value;
        const estado = evento.target.estado.value;
        const prazo = evento.target.prazo.value;

        const todo = {
            tarefa,
            descricao,
            prioridade,
            estado,
            prazo
        }

        const request = await api.fetchPost(todo);
        if(request.status === 500){
            alert('ERRO')
        }

        const result = await request.json();
        if(result.error) {
            console.log(result.error)
        } else {
            alert(result.message);
            navigate('/')
        }
        
    }
    return (
      <section className="box-add">
        <div className="task">
          <h1>Diga qual sua tarefa</h1>
        </div>
        <form onSubmit={hSubmit} className="fileds">
          <div>
            <label htmlFor="tarefa">Qual a tarefa?</label>
            <input id="tarefa" className="tarefa" type="text" placeholder="Escreve aqui pra não esquecer" name="tarefa" />
          </div>
          <div>
              <label htmlFor="descricao">Descrição:</label>
              <input id="descricao" className="descricao" type="text" placeholder="Descreva sua tarefa" name="descricao" />
          </div>
          <div>
              <label htmlFor="prioridade">Prioridade:</label>
              <select name="prioridade" className="prioridade">
                <option value="alta">Alta</option>
                <option value="media">Média</option>
                <option value="baixa">Baixa</option>
              </select>
            </div>
            <div>
              <label htmlFor="prazo">Prazo:</label>
                <input id="prazo" className="prazo" type="string" placeholder="Formato dd/mm/aaaa" name="prazo" /> 
            </div>
            <div className="radio">
              <label htmlFor="estado">Status:</label>
              <select name="estado" className="estado">
                <option value="Pendente">Pendente</option>
                <option value="Concluído">Concluído</option>
              </select>
            </div>
            <div className="btn">
              <button type="submit">Adicionando tarefa</button>
            </div>
        </form>
      </section>
    );
}

export default Add
