import Api from "@/api/index.js";

const moduleB = {
    namespaced: true,
    state: {
      count: 1,
      list: [],
      tempList: [],      
    },
    getters: {
    },
    mutations: {
        initList(state, playload) {
            state.list = playload
            state.tempList = playload
        },    
        all(state) {
            state.tempList = state.list
        },            
        filter(state, type) {
            state.tempList = state.list.filter(item => item.type === type)
        }
    },
    actions: {
        initList({commit}) {
            Api.getList('').then((res) => {
                commit('initList', res.data)
            })
        }          
    }
}

export default moduleB