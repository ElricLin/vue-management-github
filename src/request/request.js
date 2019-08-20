import axios from 'axios'
import qs from 'qs'
const server = axios.create({
    timeout:5000
})

server.interceptors.request.use(config=>{
    const token = localStorage.getItem('token')
    if(config.method ==='post'||config.method ==='put'){
        if(token){
            config.data = config.data||{}
            config.data.token = token
        }
        config.data=qs.stringify(config.data)
    }else {
        if(token){
            config.params = config.params||{}
            config.params.token = token
        }
    }
    return config
},error => {
    return Promise.reject(error)
})

server.interceptors.response.use(result=>{
    return result.data
},error => {
    return Promise.reject(error)
})

export default server