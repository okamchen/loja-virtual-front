import Vue from 'vue'
import Vuex from 'vuex'

import { productGetters, userGetters, categoryGetters, orderGetters } from './getters'
import { productMutations, cartMutations, userMutations, categoryMutations, orderMutations } from './mutations'
import { productActions, userActions, categoryActions, orderActions } from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    cart: [],
    showLoader: false,
    product: {},
    products: [],
    users: [],
    categories: [],
    userLogged: {},
    orders: [],
    order: {}
  },
  mutations: Object.assign({}, productMutations, cartMutations, userMutations, categoryMutations, orderMutations),
  getters: Object.assign({}, productGetters, userGetters, categoryGetters, orderGetters),
  actions: Object.assign({}, productActions, userActions, categoryActions, orderActions)
})
