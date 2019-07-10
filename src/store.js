import Vue from 'vue'
import Vuex from 'vuex'
import Api from "@/api/index.js";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        list: []
    },
    getters: {
        listFilter(state) {
            return state.list;
        }
    },
    mutations: {
        initList(state, playload) {
            state.list = playload
        }
    },
    actions: {
        initList({commit}) {
            Api.getList('?type=2').then((res) => {
                console.log(res.data)
                commit('initList', res.data)
            })
        }
    }
})