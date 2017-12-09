<template>
  <product-form 
    @save-product="addProduct" 
    :categories="categories"
    :model="model">
  </product-form>
</template>

<script>
  import ProductFrom from '../../components/product/ProductForm.vue'
  export default {
    data () {
      return {
      }
    },
    created () {
      if (this.categories.length === 0) {
        this.$store.dispatch('allCategories')
      }
    },
    computed: {
      categories () {
        return this.$store.getters.allCategories
      },
      model () {
        return {}
      }
    },
    methods: {
      addProduct (model) {
        this.$store.dispatch('addProduct', model)
        this.$router.push('/product')
      }
    },
    components: {
      'product-form': ProductFrom
    }
  }
</script>
