import axios from 'axios'

const server = axios.create({
    timeout:5000
})

server.interceptors.request.use(config=>{
    return config
},error => {
    return Promise.reject(error)
})

server.interceptors.response.use(result=>{
    return result
},error => {
    return Promise.reject(error)
})

export default server