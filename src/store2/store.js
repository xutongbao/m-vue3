import Vue from 'vue'
import Vuex from 'vuex'
import Api from "@/api/index.js";
import user from './user/user.js'
import list from './list/list.js'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        user,
        list
    }
})