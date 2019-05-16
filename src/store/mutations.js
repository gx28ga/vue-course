import Vue from 'vue'
const mutations = {
  setAppName (state, payload) {
    state.appName = payload
  },
  setAppVersion (state, version) {
    console.log(arguments)
    Vue.set(state, 'appVersion', version)
  },
  setTestValue (state, value) {
    state.testValue = value
  }
}

export default mutations
