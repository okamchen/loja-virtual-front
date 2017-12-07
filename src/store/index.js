import Vue from 'vue'
import Vuex from 'vuex'

import { productGetters, userGetters } from './getters'
import { productMutations, userMutations } from './mutations'
import { productActions, userActions } from './actions'

Vue.use(Vuex)

//     image: 'http://www.brandsmartusa.com/images/product/large/20222515.jpg',

export default new Vuex.Store({
  strict: true,
  state: {
    showLoader: false,
    product: {},
    products: [],
    users: []
  },
  mutations: Object.assign({}, productMutations, userMutations),
  getters: Object.assign({}, productGetters, userGetters),
  actions: Object.assign({}, productActions, userActions)
})
