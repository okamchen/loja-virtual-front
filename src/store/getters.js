
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
  }
}

export const categoryGetters = {
  allCategories: (state, getters) => {
    return state.categories
  }
}
