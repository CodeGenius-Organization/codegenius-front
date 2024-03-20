import axios from 'axios'

// Ver rota backend
// Teste
const Api = axios.create({
    baseURL: "/api"
})

export default Api