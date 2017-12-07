import Vue from 'vue'
import Router from 'vue-router'

import HomeRoutes from './home'
import UserRoutes from './user'
import DetailsRoutes from './details'

Vue.use(Router)

export default new Router({
  routes: [
    HomeRoutes,
    UserRoutes,
    DetailsRoutes
  ]
})
