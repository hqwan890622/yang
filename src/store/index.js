import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'

Vue.use(Vuex)

const state = {
    currentURL: 'http://localhost:8060/module/index.html',//本地环境
}

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
})