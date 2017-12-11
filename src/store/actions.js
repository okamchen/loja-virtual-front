import axios from 'axios'
import {API_BASE} from '../config'

import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  PRODUCT_BY_ID,
  PRODUCT_BY_ID_SUCCESS,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_SUCCESS,
  REMOVE_PRODUCT,
  REMOVE_PRODUCT_SUCCESS,
  ALL_PRODUCTS,
  ALL_PRODUCTS_SUCCESS,
  ADD_USER,
  ADD_USER_SUCCESS,
  USER_BY_ID,
  USER_BY_ID_SUCCESS,
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  REMOVE_USER,
  REMOVE_USER_SUCCESS,
  ALL_USERS,
  ALL_USERS_SUCCESS,
  ALL_CATEGORIES,
  ALL_CATEGORIES_SUCCESS,
  LOGIN,
  LOGIN_SUCCESS,
  CLOSE_ORDER,
  CLOSE_ORDER_SUCCESS,
  SET_USER,
  ALL_ORDERS_SUCCESS,
  ALL_ORDERS,
  GET_ORDER,
  ERROR_MSG,
  GET_ORDER_SUCCESS
} from './mutation-types'

let GET_CORS = {
  type: 'GET',
  crossdomain: true,
  dataType: 'jsonp',
  headers: {
    'Accept': 'application/json; charset=utf-8',
    'Content-Type': 'application/json; charset=utf-8'
  }
}

let POST_CORS = {
  type: 'POST',
  crossdomain: true,
  dataType: 'jsonp',
  headers: {
    'Accept': 'application/json; charset=utf-8',
    'Content-Type': 'application/json; charset=utf-8'
  }
}

let PUT_CORS = {
  type: 'PUT',
  // crossdomain: true,
  // dataType: 'jsonp',
  headers: {
    // 'Accept': 'application/json; charset=utf-8',
    // 'Content-Type': 'application/json; charset=utf-8',
    // 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    // 'Access-Control-Allow-Methods': 'PUT, POST, GET, DELETE, OPTIONS'
    'Content-Type': 'application/json'
  }
}

export const productActions = {
  allProducts ({commit}, payload) {
    commit(ALL_PRODUCTS)
    console.log(payload)
    axios.get(`${API_BASE}/product/filter/` + payload.idCategory + '/' + payload.order, GET_CORS).then(response => {
      commit(ALL_PRODUCTS_SUCCESS, response.data)
    }).catch(error => commit(ERROR_MSG, {
      type: 'error',
      title: 'Exceção!',
      content: error
    }))
  },
  productById ({commit}, payload) {
    commit(PRODUCT_BY_ID)
    axios.get(`${API_BASE}/product/${payload}`, GET_CORS).then(response => {
      commit(PRODUCT_BY_ID_SUCCESS, response.data)
    }).catch(error => commit(ERROR_MSG, {
      type: 'error',
      title: 'Exceção!',
      content: error
    }))
  },
  addProduct ({commit}, payload) {
    commit(ADD_PRODUCT)
    axios.post(`${API_BASE}/product`, payload, POST_CORS).then(response => {
      commit(ADD_PRODUCT_SUCCESS, response.data)
    }).catch(error => commit(ERROR_MSG, {
      type: 'error',
      title: 'Exceção!',
      content: error
    }))
  },
  updateProduct ({commit}, payload) {
    commit(UPDATE_PRODUCT)
    axios.put(`${API_BASE}/product/${payload.id}`, payload, PUT_CORS).then(response => {
      commit(UPDATE_PRODUCT_SUCCESS, response.data)
    }).catch(error => commit(ERROR_MSG, {
      type: 'error',
      title: 'Exceção!',
      content: error
    }))
  },
  removeProduct ({commit}, payload) {
    commit(REMOVE_PRODUCT)
    axios.delete(`${API_BASE}/product/${payload}`, payload).then(response => {
      commit(REMOVE_PRODUCT_SUCCESS, response.data)
    }).catch(error => commit(ERROR_MSG, {
      type: 'error',
      title: 'Exceção!',
      content: error
    }))
  }
}

export const userActions = {
  allUsers ({commit}) {
    commit(ALL_USERS)
    axios.get(`${API_BASE}/user`, GET_CORS).then(response => {
      commit(ALL_USERS_SUCCESS, response.data)
    }).catch(error => commit(ERROR_MSG, {
      type: 'error',
      title: 'Exceção!',
      content: error
    }))
  },
  userLogin ({commit}, payload) {
    commit(LOGIN)
    axios.post(`${API_BASE}/user/login`, payload, POST_CORS).then(response => {
      commit(LOGIN_SUCCESS, response.data)
    }).catch(error => commit(ERROR_MSG, {
      type: 'error',
      title: 'Exceção!',
      content: error
    }))
  },
  userById ({commit}, payload) {
    commit(USER_BY_ID)
    axios.get(`${API_BASE}/user/${payload}`, GET_CORS).then(response => {
      commit(USER_BY_ID_SUCCESS, response.data)
    }).catch(error => commit(ERROR_MSG, {
      type: 'error',
      title: 'Exceção!',
      content: error
    }))
  },
  addUser ({commit}, payload) {
    commit(ADD_USER)
    axios.post(`${API_BASE}/user`, payload, POST_CORS).then(response => {
      commit(ADD_USER_SUCCESS, response.data)
    }).catch(error => commit(ERROR_MSG, {
      type: 'error',
      title: 'Exceção!',
      content: error
    }))
  },
  updateUser ({commit}, payload) {
    commit(UPDATE_USER)
    axios.put(`${API_BASE}/user/${payload.id}`, payload, PUT_CORS).then(response => {
      commit(UPDATE_USER_SUCCESS, response.data)
    }).catch(error => commit(ERROR_MSG, {
      type: 'error',
      title: 'Exceção!',
      content: error
    }))
  },
  removeUser ({commit}, payload) {
    commit(REMOVE_USER)
    axios.delete(`${API_BASE}/user/${payload}`, payload).then(response => {
      commit(REMOVE_USER_SUCCESS, response.data)
    }).catch(error => commit(ERROR_MSG, {
      type: 'error',
      title: 'Exceção!',
      content: error
    }))
  },
  setUser ({commit}, payload) {
    commit(SET_USER, payload)
  }
}

export const orderActions = {
  closeOrder ({commit}, payload) {
    commit(CLOSE_ORDER)
    axios.post(`${API_BASE}/order`, payload).then(response => {
      commit(CLOSE_ORDER_SUCCESS, response.data)
    }).catch(error => commit(ERROR_MSG, {
      type: 'error',
      title: 'Exceção!',
      content: error
    }))
  },
  allOrders ({commit}, payload) {
    commit(ALL_ORDERS)
    axios.get(`${API_BASE}/order/` + payload).then(response => {
      commit(ALL_ORDERS_SUCCESS, response.data)
    }).catch(error => commit(ERROR_MSG, {
      type: 'error',
      title: 'Exceção!',
      content: error
    }))
  },
  getOrder ({commit}, payload) {
    commit(GET_ORDER)
    axios.get(`${API_BASE}/order/detail/` + payload).then(response => {
      commit(GET_ORDER_SUCCESS, response.data)
    }).catch(error => commit(ERROR_MSG, {
      type: 'error',
      title: 'Exceção!',
      content: error
    }))
  }
}

export const categoryActions = {
  allCategories ({commit}) {
    commit(ALL_CATEGORIES)
    axios.get(`${API_BASE}/category`, GET_CORS).then(response => {
      commit(ALL_CATEGORIES_SUCCESS, response.data)
    }).catch(error => commit(ERROR_MSG, {
      type: 'error',
      title: 'Exceção!',
      content: error
    }))
  }
}
