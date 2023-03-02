import axios from "axios";





const http = axios.create({
    baseURL: 'https://63e4e6f44474903105f47899.mockapi.io/'
})
const Api = { 
    getPizzas: () => http.get('pizza'),
    createProduckt: (data) => http.post('pizza',data),
    deletePizza: (id) => http.delete(`pizza/${id}`)
}


export default Api