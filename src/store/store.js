import Vue from 'vue'
import Vuex from 'vuex'
import Api from "@/api/index.js";
import list from './list/list.js'

Vue.use(Vuex)

const moduleA = {
    namespaced: true,
    state: {
      count: 0,
    },
    getters: {
    },
    mutations: {
    },
    actions: {      
    }
}

export default new Vuex.Store({
    modules: {
        moduleA,
        list
    }
})