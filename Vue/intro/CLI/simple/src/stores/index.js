import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const KEY_ANNTO_USER = 'annto-user'

const store = new Vuex.Store({
  state: {
    auth: false,
    user: {}
  },
  mutations: {
    userUpdated (state, payload) {
      state.user = payload
      state.auth = Boolean(state.user)
    },
    authChanged (state, payload) {
      state.auth = payload
      if (!state.auth) {
        state.user = null
      }
    }
  },
  actions: {
    init({commit}) {
      console.log('init')
      let item = localStorage.getItem(KEY_ANNTO_USER)
      if (item) {
        let user = JSON.parse(String(item))
        console.log(user)
        commit('userUpdated', user)
      }
    },
    login({commit}, loginUser) {
      if (loginUser) {
        localStorage.setItem(KEY_ANNTO_USER, JSON.stringify(loginUser))
        commit('userUpdated', loginUser)
      }
    },
    logout({commit}) {
      localStorage.removeItem(KEY_ANNTO_USER)
      commit('userUpdated', null)
    }
  }
})

store.dispatch('init')

export default store
