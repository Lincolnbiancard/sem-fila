import axios from 'axios'

const api = axios.create({
    baseUrl: 'http://localhost/'
})

export default api