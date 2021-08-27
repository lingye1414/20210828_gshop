import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from './actions'
import state from './actions'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters
})