import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/',
    home: 'home',
    component:()=>import('@/views/home'),
  },
  {
    path: '/schema',
    name: 'schema',
    component: () => import('@/views/schema'),
  }
]


// VueRouter主要有两个模式：hash模式和history模式。hash是默认模式，url的#号被用作路由分隔符，
// history模式中可以去掉#号
const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router