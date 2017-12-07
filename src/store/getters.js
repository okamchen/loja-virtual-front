
export const productGetters = {
  allProducts: (state, getters) => {
    return state.products
  },
  productById: (state, getters) => id => {
    if (getters.allProducts.length > 0) {
      return getters.allProducts.filter(p => p._id === id)[0]
    } else {
      return state.product
    }
  }
}

export const userGetters = {
  allUsers: (state, getters) => {
    return state.users
  },
  productById: (state, getters) => id => {
    if (getters.allUsers.length > 0) {
      return getters.allUsers.filter(p => p._id === id)[0]
    } else {
      return state.user
    }
  }
}
