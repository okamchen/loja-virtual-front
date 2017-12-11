<template>
  <div>
    <div class="title">
      <h1><i class="fa fa-shopping-basket"></i> Produtos</h1>
    </div>
    <div class="form-group">
      <label>Categoria</label>
      <select
        type="text"
        class="form-control"
        v-model="category"
        @change="searchProducts"
        name="category">
        <template v-for="category in categories">
          <option :value="category">{{category.name}}</option>
        </template>
      </select>
    </div>
    <div class="form-group">
      <label>Ordenação</label>
      <select
        type="text"
        class="form-control"
        @change="searchProducts"
        v-model="order"
        name="order">
        <template v-for="order in orders">
          <option :value="order">{{order.name}}</option>
        </template>
      </select>
    </div>
    <product-list :order="order" :category="category"></product-list>
  </div>
</template>

<script>
  import ProductList from '../components/product/ProductList.vue'
  export default {
    name: 'home',
    create () {
      console.log('allProduts')
    },
    data () {
      return {
        category: {id: 0, name: 'Nenhuma'},
        order: {value: '', name: 'Nenhuma'},
        products: this.$store.dispatch('allProducts', {order: 'asc', idCategoria: 0})
      }
    },
    components: {
      'product-list': ProductList
    },
    computed: {
      categories () {
        if (this.$store.getters.allCategories.length === 0) {
          this.$store.dispatch('allCategories')
        }
        var categories = this.$store.getters.allCategories.slice(0)
        categories.push({
          id: 0,
          name: 'Nenhuma'
        })
        return categories
      },
      orders () {
        return [{
          name: 'Nenhuma',
          value: ''
        }, {
          name: 'Crescente',
          value: 'asc'
        }, {
          name: 'Decrescente',
          value: 'desc'
        }]
      },
      getProducts () {
        return this.$store.getters.products
      }
    },
    methods: {
      searchProducts () {
        var payload = {
          order: !this.order || !this.order.value ? 'asc' : this.order.value,
          idCategory: !this.category || !this.category.id ? 0 : this.category.id
        }
        this.$store.dispatch('allProducts', payload)
      }
    }
  }
</script>

<style scoped>

</style>
