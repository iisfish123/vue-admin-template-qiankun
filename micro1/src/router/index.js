import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import LayoutIndex from '../views/LayoutIndex.vue'
// import AboutView from '../views/AboutView.vue'

Vue.use(VueRouter)

export default [
  {
    path: '/micro1',
    redirect: '/micro1/test'
  },
  {
    path: '/micro1',
    name: 'home',
    component: LayoutIndex,
    children: [
      {
        path: 'test',
        name: 'home',
        component: () => import('../views/HomeView.vue')
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('../views/AboutView.vue')
      }
    ]
  }
]

// const router = new VueRouter({
//   routes
// })

// export default router
