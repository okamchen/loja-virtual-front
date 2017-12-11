<template>
  <div id="app">
    <nav :hidden="hiddenHeader">
      <div class="container">
        <div class="nav__left">
          <div class="menu-option"><router-link to="/"><i class="fa fa-home"></i> Home</router-link></div>
          <div class="menu-option" v-if="getUserLogged && getUserLogged.login"><router-link to="/order"><i class="fa fa-shopping-basket"></i> Pedidos</router-link></div>
          <div class="menu-option" v-if="getUserLogged && getUserLogged.profile === 'ADMIN'"><router-link to="/product"><i class="fa fa-tags"></i> Produtos</router-link></div>
          <div class="menu-option" v-if="getUserLogged && getUserLogged.profile === 'ADMIN'"><router-link to="/user"><i class="fa fa-user"></i> Usuario</router-link></div>
        </div>
        <div class="nav__right">
          <div class="menu-option" v-if="getUserLogged && getUserLogged.login"><router-link to="/logout"><i class="fa fa-snowflake-o"></i> Logout</router-link></div>
          <div class="menu-option" v-if="getUserLogged && getUserLogged.login"><span class="login-name">{{userLogged.name}} <i class="fa fa-user-circle"></i></span></div>
          <div class="menu-option" v-if="!getUserLogged || !getUserLogged.login"><router-link to="/login"><i class="fa fa-user-circle"></i> Login</router-link></div>
          <div class="menu-option"><router-link to="/cart"><i class="fa fa-shopping-cart"></i> Carrinho ({{cartItemsCount}})</router-link></div>
        </div>
      </div>
    </nav>
    <router-view></router-view>
    <div class="overlay" v-show="showLoader">
      <div class="loading-spinner">
        <div class="dot dotOne"></div>
        <div class="dot dotTwo"></div>
        <div class="dot dotThree"></div>
      </div>
    </div>
  </div>
</template>

<script>
import toastr from 'toastr'

import {
  ERROR_MSG,
  ADD_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_SUCCESS,
  REMOVE_PRODUCT_SUCCESS,
  CLOSE_ORDER_SUCCESS
} from './store/mutation-types'

export default {
  name: 'app',
  data () {
    return {
      cartItems: this.$store.state.cart,
      hiddenHeader: this.$route.path === '/login',
      userLogged: {}
    }
  },
  watch: {
    '$route' (to, from) {
      this.hiddenHeader = to.path === '/login'
      if (to.path === '/logout') {
        this.logout()
        window.location.replace('/')
      }
    },
    '$store.state.userLogged' (newVal) {
      this.userLogged = newVal
      localStorage.setItem('userLogged', JSON.stringify(newVal))
    }
  },
  created () {
    var userStorange = localStorage.getItem('userLogged')
    if (userStorange !== 'undefined') {
      var userJson = JSON.parse(userStorange)
      this.userLogged = userJson
      this.$store.dispatch('setUser', userJson)
    }
    this.$store.subscribe((mutation) => {
      if (mutation.payload) {
        switch (mutation.type) {
          case ERROR_MSG:
            toastr.error(mutation.payload.content, mutation.payload.title)
            break
          case ADD_PRODUCT_SUCCESS:
            toastr.success('Produto criado com sucesso.', 'Sucesso!')
            break
          case UPDATE_PRODUCT_SUCCESS:
            toastr.success('Produto alterado com sucesso.', 'Sucesso!')
            break
          case REMOVE_PRODUCT_SUCCESS:
            toastr.warning('Produto removido.', 'Removido!')
            break
          case CLOSE_ORDER_SUCCESS:
            toastr.success('Pedido concluído.', 'Sucesso!')
            break
        }
      }
    })
  },
  computed: {
    getUserLogged () {
      return this.userLogged
    },
    setUserLogged (newVal) {
      this.userLogged = newVal
    },
    cartItemsCount () {
      return this.cartItems.length
    },
    showLoader () {
      return this.$store.state.showLoader
    }
  },
  methods: {
    logout () {
      localStorage.setItem('userLogged', undefined)
      this.$store.dispatch('setUser', undefined)
    }
  }
}
</script>

<style>
  .login-name {
    color: #FFFFFF;
    display: block;
    transition: all 150ms ease-out;
  }
  .logout-action {
    color: #FFFFFF;
  }
  .overlay {
    background: rgba(255, 255, 255, 0.6);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .loading-spinner {
    position : absolute;
    top      : 50%;
    left     : 50%;
    -webkit-transform : translateX(-50%) translateY(-50%);
    -moz-transform : translateX(-50%) translateY(-50%);
    transform : translateX(-50%) translateY(-50%);
  }

  .dot {
    background    : black;
    border-radius : 100%;
    color         : white;
    height        : 8px;
    line-height   : 8px;
    text-align    : center;
    width         : 8px;
  }

  .dotOne {
    -webkit-animation : dotOneKeyframes 5s ease  infinite;
    background        : #F9E610;
    position          : absolute;
    top               : 0;
    left              : 0;
  }

  .dotTwo {
    -webkit-animation : dotTwoKeyframes 5s ease 0.4166666666666s infinite;
    background        : #EFDB06;
    position          : absolute;
    top               : 0;
    left              : 14px;
  }

  .dotThree {
    -webkit-animation : dotThreeKeyframes 5s ease 0.83333333333s infinite;
    background        : #DBC906;
    position          : absolute;
    top               : 14px;
    left              : 14px;
  }

  @-webkit-keyframes dotOneKeyframes {
    0% {
      top  : 0;
      left : 0;
    }
    8.3333333333% {
      top  : 14px;
      left : 0;
    }
    16.6666666666% {

    }
    25% {
      top  : 14px;
      left : 0;
    }
    33.3333333333% {
      top  : 14px;
      left : 14px;
    }
    41.6666666666% {

    }
    50% {
      top  : 14px;
      left : 14px;
    }
    58.3333333333% {
      top  : 0;
      left : 14px;
    }
    66.6666666666% {

    }
    75% {
      top  : 0;
      left : 14px;
    }
    83.3333333333% {
      top  : 0;
      left : 0;
    }
    91.6666666666% {

    }
    100% {

    }
  }


  @-webkit-keyframes dotTwoKeyframes {
    0% {
      top  : 0;
      left : 14px;
    }
    8.3333333333% {
      top  : 0;
      left : 0;
    }
    16.6666666666% {

    }
    25% {
      top  : 0;
      left : 0;
    }
    33.3333333333% {
      top  : 14px;
      left : 0;
    }
    41.6666666666% {

    }
    50% {
      top  : 14px;
      left : 0;
    }
    58.3333333333% {
      top  : 14px;
      left : 14px;
    }
    66.6666666666% {

    }
    75% {
      top  : 14px;
      left : 14px;
    }
    83.3333333333% {
      top  : 0;
      left : 14px;
    }
    91.6666666666% {

    }
    100% {

    }
  }

  @-webkit-keyframes dotThreeKeyframes {
    0% {
      top  : 14px;
      left : 14px;
    }
    8.3333333333% {
      top  : 0;
      left : 14px;
    }
    16.6666666666% {

    }
    25% {
      top  : 0;
      left : 14px;
    }
    33.3333333333% {
      top  : 0;
      left : 0;
    }
    41.6666666666% {

    }
    50% {
      top  : 0;
      left : 0;
    }
    58.3333333333% {
      top  : 14px;
      left : 0;
    }
    66.6666666666% {

    }
    75% {
      top  : 14px;
      left : 0;
    }
    83.3333333333% {
      top  : 14px;
      left : 14px;
    }
    91.6666666666% {

    }
    100% {

    }
  }
</style>
