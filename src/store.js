import Vue from 'vue'
import Vuex from 'vuex'
import Api from "@/api/index.js";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        list: [],
        tempList: []
    },
    getters: {
        listFilter(state) {
            return state.list;
        }
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
})