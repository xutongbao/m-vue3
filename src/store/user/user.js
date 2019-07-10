import Api from "@/api/index.js";

const user = {
    namespaced: true,
    state: {  
        username: ''
    },
    getters: {
    },
    mutations: {
        username(state, username) {
            state.username = username
        }
    },
    actions: {       
    }
}

export default user