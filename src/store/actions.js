import axios from 'axios'
import {API_BASE} from '../config'

import {
  ADD_PRODUCT
  , ADD_PRODUCT_SUCCESS
  , PRODUCT_BY_ID
  , PRODUCT_BY_ID_SUCCESS
  , UPDATE_PRODUCT
  , UPDATE_PRODUCT_SUCCESS
  , REMOVE_PRODUCT
  , REMOVE_PRODUCT_SUCCESS
  , ALL_PRODUCTS
  , ALL_PRODUCTS_SUCCESS
  , ALL_USERS
  , ALL_USERS_SUCCESS
} from './mutation-types'

export const productActions = {
  allProducts ({commit}) {
    commit(ALL_PRODUCTS)
    axios.get(`${API_BASE}/produto`, {
      type: 'GET',
      crossdomain: true,
      dataType: 'jsonp',
      headers: {
        'Accept': 'application/json; charset=utf-8',
        'Content-Type': 'application/json; charset=utf-8'
      }
    }).then(response => {
      commit(ALL_PRODUCTS_SUCCESS, response.data)
    })
  },
  productById ({commit}, payload) {
    commit(PRODUCT_BY_ID)
    axios.get(`${API_BASE}/produto/${payload}`).then(response => {
      console.log(payload, response.data)
      commit(PRODUCT_BY_ID_SUCCESS, response.data)
    })
  },
  addProduct ({commit}, payload) {
    commit(ADD_PRODUCT)
    axios.post(`${API_BASE}/produto`, payload).then(response => {
      commit(ADD_PRODUCT_SUCCESS, response.data)
    })
  },
  updateProduct ({commit}, payload) {
    commit(UPDATE_PRODUCT)
    axios.put(`${API_BASE}/produto/${payload._id}`, payload).then(response => {
      commit(UPDATE_PRODUCT_SUCCESS, response.data)
    })
  },
  removeProduct ({commit}, payload) {
    commit(REMOVE_PRODUCT)
    axios.delete(`${API_BASE}/produto/${payload}`, payload).then(response => {
      console.debug('response', response.data)
      commit(REMOVE_PRODUCT_SUCCESS, response.data)
    })
  }
}

export const userActions = {
  allUsers ({commit}) {
    commit(ALL_USERS)
    axios.get(`${API_BASE}/user`, {
      type: 'GET',
      crossdomain: true,
      dataType: 'jsonp',
      headers: {
        'Accept': 'application/json; charset=utf-8',
        'Content-Type': 'application/json; charset=utf-8'
      }
    }).then(response => {
      commit(ALL_USERS_SUCCESS, response.data)
    })
  }
}

