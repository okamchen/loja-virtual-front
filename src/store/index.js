import Vue from 'vue'
import Vuex from 'vuex'

import { productGetters, userGetters, categoryGetters } from './getters'
import { productMutations, cartMutations, userMutations, categoryMutations } from './mutations'
import { productActions, userActions, categoryActions } from './actions'

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
    userLogged: {}
  },
  mutations: Object.assign({}, productMutations, cartMutations, userMutations, categoryMutations),
  getters: Object.assign({}, productGetters, userGetters, categoryGetters),
  actions: Object.assign({}, productActions, userActions, categoryActions)
})
