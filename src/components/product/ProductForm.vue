<template>
  <form @submit.prevent="saveProduct">
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
        <label>Preço</label>
        <input
          type="number"
          step="0.01"
          class="form-control"
          placeholder="Preço"
          v-model="model.price"
          v-validate="'required'"
          name="price"
          :class="{'form-control': true, 'error': errors.has('price') }" />
        <span class="small text-danger" v-show="errors.has('price')">Preço é obrigatório</span>
      </div>
      <div class="form-group">
        <label>Categoria</label>
        <select
          type="text"
          class="form-control"
          v-model="model.category"
          v-validate="'required'"
          name="category"
          :class="{'form-control': true, 'error': errors.has('category') }">
          <template v-for="category in categories">
            <option :value="category">{{category.name}}</option>
          </template>
        </select>
        <span class="small text-danger" v-show="errors.has('category')">Categoria é obrigatório</span>
      </div>
      <div class="form-group">
        <label>Data de Válidade</label>
        <input
          type="text"
          class="form-control"
          placeholder="Data de Válidade"
          v-model="model.expirationDate"
          v-validate="'required'"
          name="expirationDate"
          :class="{'form-control': true, 'error': errors.has('expirationDate') }" />
        <span class="small text-danger" v-show="errors.has('expirationDate')">Data de Válidade é obrigatório</span>
      </div>
    </div>

    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
      <div class="form-group">
        <label>Imagem</label>
        <input
          type="text"
          lass="form-control"
          placeholder="Imagem"
          v-model="model.imageUrl"
          v-validate="'required|url'"
          name="imageUrl"
          :class="{'form-control': true, 'error': errors.has('imageUrl') }" />
        <span class="small text-danger" v-show="errors.has('imageUrl')">A imagem é obrigatório e deve ser um URL válido</span>
      </div>
      <div class="form-group">
        <label>Descrição</label>
        <textarea
          type="number"
          class="form-control"
          placeholder="Descrição"
          rows="5"
          v-model="model.description"
          v-validate="'required'"
          name="description"
          :class="{'form-control': true, 'error': errors.has('description') }"></textarea>
        <span class="small text-danger" v-show="errors.has('description')">Descrição é obrigatório</span>
      </div>
      <div class="form-group new-button">
        <button class="button">
          <i class="fa fa-pencil"></i>
          <span v-if="isEditing">Salvar</span>
          <span v-else>Adicionar</span>
        </button>
      </div>
    </div>
    <product-price-history :historicPrice="model.historicPrice"></product-price-history/>
  </form>
</template>

<script>
  import { ERROR_MSG } from '../../store/mutation-types'
  import ProductPriceHistory from '../../components/product/ProductPriceHistory.vue'
  export default {
    props: ['model', 'categories', 'isEditing'],
    created () {
      return {
      }
    },
    methods: {
      saveProduct () {
        this.$validator.validateAll().then(() => {
          if (!this.model.category || !this.model.category.id || this.model.category.id === 0) {
            this.$store.commit(ERROR_MSG, {
              type: 'error',
              title: 'Validação!',
              content: 'Categoria deve ser informada.'
            })
          } else {
            this.$emit('save-product', this.model)
          }
        }).catch(() => {
          this.$store.commit(ERROR_MSG, {
            type: 'error',
            title: 'Validação!',
            content: 'Certifique-se de que o formulário seja válido.'
          })
        })
      }
    },
    components: {
      'product-price-history': ProductPriceHistory
    }
  }
</script>

<style>
.title {
  text-align: center;
}
</style>

