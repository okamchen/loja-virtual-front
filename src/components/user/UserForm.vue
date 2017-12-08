<template>
  <form @submit.prevent="saveUser">
    <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
      <div class="form-group">
        <label>Nome</label>
        <input
          type="text"
          placeholder="Nome"
          v-model="model.name"
          v-validate="'required'"
          name="name"
          :class="{'form-control': true, 'error': errors.has('name') }" />
        <span class="small text-danger" v-show="errors.has('name')">Nome é obrigatório</span>
      </div>
      <div class="form-group">
        <label>Senha</label>
        <input type="password" name="password" id="password"
            class="form-control" placeholder="Senha" 
            minlength="6"
            v-model="model.password">
      </div>
      <div class="form-group">
        <label>Confirmar Senha</label>
        <input type="password" name="confirmePassword" id="password"
            class="form-control" placeholder="Confirmar Senha" 
            v-model="confirmePassword">
      </div>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
      <div class="form-group">
        <label>Login</label>
        <input
          type="text"
          placeholder="Login"
          v-model="model.login"
          v-validate="'required'"
          name="login"
          :class="{'form-control': true, 'error': errors.has('login') }" />
        <span class="small text-danger" v-show="errors.has('login')">Login é obrigatório</span>
      </div>
      <div class="form-group">
        <label>E-mail</label>
        <input
          type="text"
          placeholder="E-mail"
          v-model="model.email"
          v-validate="'required'"
          name="email"
          :class="{'form-control': true, 'error': errors.has('email') }" />
        <span class="small text-danger" v-show="errors.has('email')">Perfil é obrigatório</span>
      </div>
      <div class="form-group">
        <label>Perfil</label>
        <input
          type="text"
          placeholder="Perfil"
          v-model="model.profile"
          name="profile"
          :class="{'form-control': true }" />
      </div>
      <div class="form-group new-button">
        <button class="button">
          <i class="fa fa-pencil"></i>
          <span v-if="isEditing">Salvar</span>
          <span v-else>Adicionar</span>
        </button>
      </div>
    </div>
  </form>
</template>

<script>
  import {
    ERROR_MSG
  } from '../../store/mutation-types'
  export default {
    props: ['model', 'isEditing'],
    created () {
      this.confirmePassword = ''
    },
    date () {
      return {
        confirmePassword: ''
      }
    },
    methods: {
      saveUser () {
        if (this.model.password !== this.confirmePassword) {
          this.$store.commit(ERROR_MSG, {
            type: 'error',
            title: 'Validação!',
            content: 'Confirmação de senha inválida'
          })
        } else {
          this.$validator.validateAll().then(() => {
            this.$emit('save-user', this.model)
          }).catch(() => {
            this.$store.commit(ERROR_MSG, {
              type: 'error',
              title: 'Validação!',
              content: 'Certifique-se de que o formulário seja válido.'
            })
          })
        }
      }
    }
  }
</script>
