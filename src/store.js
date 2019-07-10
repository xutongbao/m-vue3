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
        filter(state) {
            state.tempList = state.list.filter(item => item.status === 1)
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