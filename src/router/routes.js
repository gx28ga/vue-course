export default [
  {
    path: '/',
    name: 'home',
    alias: 'welcome',
    component: () => import('@/views/Layout'),
    meta: {
      title: 'gaga'
    }
  },
  {
    path: '/store',
    name: 'store',
    component: () => import('@/views/Store')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login')
  },
  {
    path: '/count',
    name: 'count',
    component: () => import('@/views/Count')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },
  {
    path: '/argu',
    name: 'argu',
    component: () => import('@/views/Argu'),
    props: {
      name: 'big'
    }
  },
  {
    path: '/parent',
    name: 'parent',
    component: () => import('@/views/Parent'),
    children: [
      {
        path: 'child',
        components: {
          default: () => import('@/views/Child'),
          email: () => import('@/components/Email'),
          tel: () => import('@/components/Tel')
        }
      }
    ]
  },
  {
    path: '/profile',
    components: {
      default: () => import('@/views/Child'),
      email: () => import('@/components/Email'),
      tel: () => import('@/components/Tel')
    }
  },
  {
    path: '/main',
    redirect: to => {
      return {
        name: 'home'
      }
    }
  },
  {
    path: '*',
    component: () => import('@/views/404')
  }
]
