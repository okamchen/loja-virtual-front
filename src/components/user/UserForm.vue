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
        <label>Perfil</label>
        <input
          type="text"
          placeholder="Perfil"
          v-model="model.type"
          v-validate="'required'"
          name="type"
          :class="{'form-control': true, 'error': errors.has('type') }" />
        <span class="small text-danger" v-show="errors.has('type')">Perfil é obrigatório</span>
      </div>
    </div>

    <!-- <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
      <div class="form-group">
        <label>Image</label>
        <input
          type="text"
          lass="form-control"
          placeholder="Image"
          v-model="model.image"
          v-validate="'required|url'"
          name="image"
          :class="{'form-control': true, 'error': errors.has('image') }" />
        <span class="small text-danger" v-show="errors.has('image')">Imagem é obrigatório e URL deve ser válida</span>
      </div> -->
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

    },
    methods: {
      saveUser () {
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
</script>
