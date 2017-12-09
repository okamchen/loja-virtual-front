import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  PRODUCT_BY_ID,
  PRODUCT_BY_ID_SUCCESS,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_SUCCESS,
  REMOVE_PRODUCT,
  REMOVE_PRODUCT_SUCCESS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ALL_PRODUCTS,
  ALL_PRODUCTS_SUCCESS,
  ERROR_MSG,
  USER_BY_ID,
  USER_BY_ID_SUCCESS,
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  REMOVE_USER,
  REMOVE_USER_SUCCESS,
  ALL_USERS,
  ALL_USERS_SUCCESS,
  ADD_USER,
  ADD_USER_SUCCESS,
  ALL_CATEGORIES,
  ALL_CATEGORIES_SUCCESS,
  LOGIN,
  LOGIN_SUCCESS
} from './mutation-types'

export const productMutations = {
  [ALL_PRODUCTS] (state) {
    state.showLoader = true
  },
  [ALL_PRODUCTS_SUCCESS] (state, payload) {
    state.showLoader = false
    state.products = payload
  },
  [PRODUCT_BY_ID] (state) {
    state.showLoader = true
  },
  [PRODUCT_BY_ID_SUCCESS] (state, payload) {
    state.showLoader = false
    state.product = payload
  },
  [ADD_PRODUCT]: (state, payload) => {
    state.showLoader = true
  },
  [ADD_PRODUCT_SUCCESS]: (state, payload) => {
    state.showLoader = false
    state.products.push(payload)
  },
  [UPDATE_PRODUCT]: (state, payload) => {
    state.showLoader = true
  },
  [UPDATE_PRODUCT_SUCCESS]: (state, payload) => {
    state.showLoader = false
    state.products = state.products.map(p => {
      if (p.id === parseInt(payload.id)) {
        payload = {...payload, category: state.categories.filter(x => x.id === parseInt(payload.category.id))[0]}
        return payload
      }
      return p
    })
  },
  [REMOVE_PRODUCT]: (state, payload) => {
    state.showLoader = true
  },
  [REMOVE_PRODUCT_SUCCESS]: (state, payload) => {
    state.showLoader = false
    const index = state.products.findIndex(p => p.id === parseInt(payload))
    state.products.splice(index, 1)
  },
  [ERROR_MSG] (state, payload) {}
}

export const cartMutations = {
  [ADD_TO_CART]: (state, payload) => state.cart.push(payload),
  [REMOVE_FROM_CART]: (state, payload) => {
    const index = state.cart.findIndex(p => p.id === parseInt(payload))
    state.cart.splice(index, 1)
  }
}

export const userMutations = {
  [ALL_USERS] (state) {
    state.showLoader = true
  },
  [ALL_USERS_SUCCESS] (state, payload) {
    state.showLoader = false
    state.users = payload
  },
  [ADD_USER]: (state, payload) => {
    state.showLoader = true
  },
  [ADD_USER_SUCCESS]: (state, payload) => {
    state.showLoader = false
    state.userLogged = payload
    state.users.push(payload)
  },
  [LOGIN]: (state, payload) => {
    state.showLoader = true
  },
  [LOGIN_SUCCESS]: (state, payload) => {
    state.showLoader = false
    state.userLogged = payload
  },
  [USER_BY_ID] (state) {
    state.showLoader = true
  },
  [USER_BY_ID_SUCCESS] (state, payload) {
    state.showLoader = false
    state.user = payload
  },
  [UPDATE_USER]: (state, payload) => {
    state.showLoader = true
  },
  [UPDATE_USER_SUCCESS]: (state, payload) => {
    state.showLoader = false
    state.users = state.users.map(p => {
      if (p.id === parseInt(payload.id)) {
        payload = {...payload}
        return payload
      }
      return p
    })
  },
  [REMOVE_USER]: (state, payload) => {
    state.showLoader = true
  },
  [REMOVE_USER_SUCCESS]: (state, payload) => {
    state.showLoader = false
    const index = state.users.findIndex(p => p.id === parseInt(payload))
    state.users.splice(index, 1)
  },
  [ERROR_MSG] (state, payload) {}
}

export const categoryMutations = {
  [ALL_CATEGORIES] (state) {
    state.showLoader = true
  },
  [ALL_CATEGORIES_SUCCESS] (state, payload) {
    state.showLoader = false
    state.categories = payload
  }
}
