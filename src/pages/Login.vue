<template>
<div class="container">
  <div class="row">
    <div class="col-md-6 col-md-offset-3">
      <div class="panel panel-login">
        <div class="panel-heading">
          <div class="row">
            <div class="col-xs-6">
              <a v-bind:class="activeLogin" id="login-form-link"
                @click="ativeLogin">Login</a>
            </div>
            <div class="col-xs-6">
              <a v-bind:class="activeRegister" id="register-form-link"
                @click="ativeRegister">Register</a>
            </div>
          </div>
          <hr>
        </div>
        <div class="panel-body">
          <div class="row">
            <div class="col-lg-12">
              <form id="login-form" v-bind:style="styleLogin" v-bind:ref="'login-form'">
                <div class="form-group">
                  <input type="text" name="username" id="username" 
                    tabindex="1" class="form-control" placeholder="Usuário"
                    v-model="username">
                </div>
                <div class="form-group">
                  <input type="password" name="password" id="password" tabindex="2" 
                    class="form-control" placeholder="Senha" 
                    v-model="password">
                </div>
                <div class="form-group">
                  <div class="row">
                    <div class="col-sm-6 col-sm-offset-3">
                      <input type="button" name="login-submit" id="login-submit" 
                        tabindex="4" class="form-control btn btn-login" value="Login"
                        @click="login">
                    </div>
                  </div>
                </div>
              </form>
              <form id="register-form" v-bind:style="styleRegister">
                <div class="form-group">
                  <input type="text" name="name" id="name" tabindex="1" 
                    :class="{'form-control': true, 'error': errors.has('name') }"
                    placeholder="Nome" v-model="name">
                    <span class="small text-danger" v-show="errors.has('name')">Nome é obrigatório</span>
                  </input>
                </div>
                <div class="form-group">
                  <input type="text" name="username" id="username" tabindex="2" 
                    minlength="6" placeholder="Login" v-model="username"
                    :class="{'form-control': true, 'error': errors.has('username') }">
                    <span class="small text-danger" v-show="errors.has('username')">Login é obrigatório</span>
                  </input>
                </div>
                <div class="form-group">
                  <input type="text" name="email" id="email" tabindex="3" 
                    placeholder="E-mail" v-model="email"
                    :class="{'form-control': true, 'error': errors.has('email') }">
                    <span class="small text-danger" v-show="errors.has('email')">Email é obrigatório</span>
                  </input>
                </div>
                <div class="form-group">
                  <input type="password" name="password" id="login" tabindex="4" 
                    placeholder="Senha" v-model="password"
                    :class="{'form-control': true, 'error': errors.has('password') }">
                    <span class="small text-danger" v-show="errors.has('password')">Senha é obrigatório</span>
                  </input>
                </div>
                <div class="form-group">
                  <input type="password" name="confirmPassword" id="login" tabindex="4" 
                    placeholder="Confirmar Senha" v-model="confirmPassword"
                    :class="{'form-control': true, 'error': errors.has('confirmPassword') }">
                    <span class="small text-danger" v-show="errors.has('confirmPassword')">Confirmar Senha é obrigatório</span>
                  </input>
                </div>
                <div class="form-group">
                  <div class="row">
                    <div class="col-sm-6 col-sm-offset-3">
                      <input type="button" name="register-submit" id="register-submit" 
                        tabindex="4" class="form-control btn btn-register" value="Cadastrar" 
                        @click="register">
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {
  ERROR_MSG
} from '../store/mutation-types'

export default {
  create () {
  },
  data () {
    return {
      name: '',
      username: '',
      password: '',
      email: '',
      confirmPassword: '',
      styleRegister: 'display:none;',
      styleLogin: 'display:block;',
      activeRegister: '',
      activeLogin: 'active'
    }
  },
  computed: {
    userLogged () {
      return this.$store.getters.userLogged
    }
  },
  methods: {
    ativeLogin () {
      this.styleRegister = 'display:none;'
      this.styleLogin = 'display:block;'
      this.activeRegister = ''
      this.activeLogin = 'active'
    },
    ativeRegister () {
      this.styleRegister = 'display:block;'
      this.styleLogin = 'display:none;'
      this.activeRegister = 'active'
      this.activeLogin = ''
    },
    login () {
      var model = {
        login: this.username,
        password: this.password
      }

      this.$store.dispatch('userLogin', model).then(response => {
        if (this.userLogged.login !== null) {
          this.$router.push('/')
        }
      }, function () {

      })
    },
    register () {
      if (this.password === this.confirmPassword) {
        var model = {
          name: this.name,
          login: this.username,
          email: this.email,
          password: this.password
        }
        this.$store.dispatch('addUser', model)
        this.$router.push('/')
      } else {
        this.$store.commit(ERROR_MSG, {
          type: 'error',
          title: 'Validação!',
          content: 'Certifique-se de que a senha ou usuário estão corretos.'
        })
      }
    }
  }
}
</script>

<style scoped>
.container {
  padding-top: 10%;
}
body {
    padding-top: 90px;
}
.panel-login {
    border-color: #ccc;
	-webkit-box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.2);
	-moz-box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.2);
	box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.2);
}
.panel-login>.panel-heading {
	color: #00415d;
	background-color: #fff;
	border-color: #fff;
	text-align:center;
}
.panel-login>.panel-heading a{
	text-decoration: none;
	color: #666;
	font-weight: bold;
	font-size: 15px;
	-webkit-transition: all 0.1s linear;
	-moz-transition: all 0.1s linear;
	transition: all 0.1s linear;
}
.panel-login>.panel-heading a.active{
	color: #029f5b;
	font-size: 18px;
}
.panel-login>.panel-heading hr{
	margin-top: 10px;
	margin-bottom: 0px;
	clear: both;
	border: 0;
	height: 1px;
	background-image: -webkit-linear-gradient(left,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.15),rgba(0, 0, 0, 0));
	background-image: -moz-linear-gradient(left,rgba(0,0,0,0),rgba(0,0,0,0.15),rgba(0,0,0,0));
	background-image: -ms-linear-gradient(left,rgba(0,0,0,0),rgba(0,0,0,0.15),rgba(0,0,0,0));
	background-image: -o-linear-gradient(left,rgba(0,0,0,0),rgba(0,0,0,0.15),rgba(0,0,0,0));
}
.panel-login input[type="text"],.panel-login input[type="email"],.panel-login input[type="password"] {
	height: 45px;
	border: 1px solid #ddd;
	font-size: 16px;
	-webkit-transition: all 0.1s linear;
	-moz-transition: all 0.1s linear;
	transition: all 0.1s linear;
}
.panel-login input:hover,
.panel-login input:focus {
	outline:none;
	-webkit-box-shadow: none;
	-moz-box-shadow: none;
	box-shadow: none;
	border-color: #ccc;
}
.btn-login {
	background-color: #59B2E0;
	outline: none;
	color: #fff;
	font-size: 14px;
	height: auto;
	font-weight: normal;
	padding: 14px 0;
	text-transform: uppercase;
	border-color: #59B2E6;
}
.btn-login:hover,
.btn-login:focus {
	color: #fff;
	background-color: #53A3CD;
	border-color: #53A3CD;
}
.forgot-password {
	text-decoration: underline;
	color: #888;
}
.forgot-password:hover,
.forgot-password:focus {
	text-decoration: underline;
	color: #666;
}

.btn-register {
	background-color: #1CB94E;
	outline: none;
	color: #fff;
	font-size: 14px;
	height: auto;
	font-weight: normal;
	padding: 14px 0;
	text-transform: uppercase;
	border-color: #1CB94A;
}
.btn-register:hover,
.btn-register:focus {
	color: #fff;
	background-color: #1CA347;
	border-color: #1CA347;
}
</style>
