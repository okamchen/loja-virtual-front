import Vue from 'vue'
import Router from 'vue-router'

import HomeRoutes from './home'
import LoginRoutes from './login'
import OrderRoutes from './order'
import AdminRoutes from './product'
import UserRoutes from './user'
import DetailsRoutes from './details'
import CartRoutes from './cart'

Vue.use(Router)

export default new Router({
  routes: [
    HomeRoutes,
    LoginRoutes,
    OrderRoutes,
    AdminRoutes,
    UserRoutes,
    DetailsRoutes,
    CartRoutes
  ]
})
