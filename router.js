import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 将组件 (components) 映射到路由 (routes)

import LikeComponent from './components/LikeComponents'
import TabComponent from './components/TabComponent'

const routes = [
  { path: '/like', component: LikeComponent },
  { path: '/tab', component: TabComponent }
]

export default new VueRouter({
  mode: 'history',
  routes
})




