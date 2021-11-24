const api = {
    api: 'http://localhost:3001/todo',
    fetchAll: () => fetch(api.api),
    fetchGetById: (id) => fetch(`${api.api}/${id}`),
    fetchPost: (data) => {
        return fetch(`${api.api}/add`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: new Headers({
                "Content-Type": "application/json"
            })
        })
    },
    fetchPut: (todo, id)=>{
        return fetch(`${api.api}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(todo),
            headers: new Headers({
            "Content-Type": "application/json"
            })
        })
    },
    fetchDelete: (id) => {
        return fetch(`${api.api}/${id}`, {
            method: 'DELETE'
        })
    }
}

export default api;