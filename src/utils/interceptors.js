import axios from 'axios'

axios.interceptors.request.use(
    (config) => {
        console.log(config)
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
        }
    },
    (error) => {
        return Promise.reject(error.response);
    }    
)