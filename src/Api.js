import axios from 'axios'

// Ver rota backend
// Teste
const api = axios.create({
    baseURL: 'http://localhost:8080'
})

export default api