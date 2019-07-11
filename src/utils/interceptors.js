import axios from 'axios'
//import Vuex from 'vuex'

axios.interceptors.request.use(
    (config) => {
        config.headers['Authorization'] = localStorage.getItem('token');
        return Promise.resolve(config)
    },
    (error) => {
        return Promise.reject(error.response);
    }
)

axios.interceptors.response.use(
    (response) => {
        console.log(response)
        if (response.data.code === 200) {
            return Promise.resolve(response)
        } else if (response.data.code === 400) {
            alert(response.data.message)
        } else if (response.data.code === 403) {
            console.log('登陆过期')
            window.location.href = '/login'
        }
        return Promise.reject(response);
    },
    (error) => {
        return Promise.reject(error.response);
    }    
)