import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Bus from './lib/bus'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
process.env.NODE_ENV !== 'production' && require('./mock')

Vue.use(iView)
Vue.config.productionTip = false
Vue.prototype.$bus = Bus
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
