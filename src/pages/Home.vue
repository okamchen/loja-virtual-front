<template>
  <div>
    <div class="title">
      <h1><i class="fa fa-shopping-basket"></i> Produtos</h1>
    </div>
    <product-list></product-list>
  </div>
</template>

<script>
  import ProductList from '../components/product/ProductList.vue'
  export default {
    name: 'home',
    data () {
      return {
      }
    },
    components: {
      'product-list': ProductList
    }
  }
</script>

<style scoped>

</style>
