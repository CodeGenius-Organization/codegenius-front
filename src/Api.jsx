import axios from 'axios'

// Ver rota backend
// Teste
const Api = axios.create({
    baseURL: 'http://localhost:8080'
})

export default Api