const state = {
  userName: 'rand'
}

const getters = {
  getFirstLetter: state => state.userName.substring(0, 1)
}

const mutations = {
  setUsername (state, params) {
    state.userName = params
  }
}

const actions = {
  updateUserName ({ commit, state, rootState }) {

  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
