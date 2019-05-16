import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import { setTitle } from '@/lib/util'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes
})

const IS_LOGGEDIN = true
router.beforeEach((to, from, next) => {
  to.meta && setTitle(to.meta.title)
  if (to.name !== 'login') {
    if (IS_LOGGEDIN) next()
    else next({ name: 'login' })
  } else {
    if (IS_LOGGEDIN) next({ name: 'home' })
    else next()
  }
})

export default router
