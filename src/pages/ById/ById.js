import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import { Modal } from 'react-responsive-modal'
import api from './../../api/api'
import './ById.css'
import 'react-responsive-modal/styles.css';


const ById = ()=> {
    const [todo, setTodo] = useState({});
    const [open, setOpen] = useState(false)
    const navigate = useNavigate();

    const aModal = () => setOpen(true);
    const fModal = () => setOpen(false);

    useEffect(()=>{
        ById();
    }, []);

    const { id } = useParams();
    console.log(id)

    const ById = async () => {
        const request = await api.fetchGetById(id)
        const data = await request.json();
        setTodo(data);
    }

    const hDelete = async () => {
        const response = await api.fetchDelete(id)
        const data = await response.json()
        if(data.message) {
            console.log('excluido', data.message);
            navigate('/')
        } else {
            alert(data.error);
        }

        
    }
    return (
        <section > 
            <div className="byid">
                <div className="byyid">
                <h1><b>Tarefa:</b>{todo.tarefa}</h1>
                <h3><b>Descrição:</b>{todo.descricao}</h3>
                <h4><b>Prioridade:</b>{todo.prioridade}</h4>
                <h5><b>Status:</b>{todo.estado}</h5>
                <h5><b>Prazo:</b>{todo.prazo}</h5>
                <h6><b>Data de criação:</b>{todo.dtCriacao}</h6>
                </div>
            </div>
            <div className="btns">
                <button>
                <Link to={`/edit/${todo._id}`}>Editar</Link>
                </button>
                <button onClick={aModal}>Exlcuir</button>
                <button type="submit" className="btn-box" onClick={hDelete}>Marcar como feito!</button>                
            </div>
            <Modal open={open} onClose={fModal} center showCloseIcon={false}>
                <div>
                    <h2>Deseja realmente exluir?</h2>
                    <button onClick={fModal}>Não</button>
                    <button onClick={hDelete}>Sim</button>
                </div>
            </Modal>
        </section>
    )
}

export default ById
