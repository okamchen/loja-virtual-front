<template>
  <div>
    <div class="products">
      <div class="container">
        <template v-for="product in products">
          <product-item :product="product"></product-item>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  import ProductItem from './ProductItem.vue'
  export default {
    name: 'product-list',
    props: ['category', 'order'],
    data () {
      return {}
    },
    create () {
      var idCategory = !this.category || this.category.id ? 0 : this.category.id
      var order = !this.order ? 'asc' : this.order
      var payload = {
        idCategory,
        order
      }
      this.$store.dispatch('allProducts', payload)
    },
    components: {
      'product-item': ProductItem
    },
    computed: {
      products () {
        return this.$store.getters.allProducts
      }
    }
  }
</script>

<style>
  .products {
    background: #F7F8FB;
    padding: 30px 0;
  }
</style>
