import axios from 'axios'

axios.interceptors.request.use(
    (config) => {
        console.log(config)
        return Promise.resolve(config)
    },
    () => {

    }
)

axios.interceptors.response.use(
    (response) => {
        console.log(response)
    }
)