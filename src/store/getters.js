
export const productGetters = {
  allProducts: (state, getters) => {
    return state.products
  },
  productById: (state, getters) => id => {
    if (getters.allProducts.length > 0) {
      return getters.allProducts.filter(p => p.id === parseInt(id))[0]
    } else {
      return state.product
    }
  }
}

export const userGetters = {
  allUsers: (state, getters) => {
    return state.users
  },
  userById: (state, getters) => id => {
    if (getters.allUsers.length > 0) {
      return getters.allUsers.filter(p => p.id === parseInt(id))[0]
    } else {
      return state.user
    }
  },
  userLogged: (state, getters) => {
    return state.userLogged
  }
}

export const categoryGetters = {
  allCategories: (state, getters) => {
    return state.categories
  }
}

export const orderGetters = {
  allOrders: (state, getters) => {
    return state.orders
  },
  getOrder: (state, getters) => {
    return state.order
  }
}
