<template>
  <product-form
    @save-product="updateProduct"
    :model="model"
    :categories="categories"
    :isEditing="true"></product-form>
</template>

<script>
  import ProductFrom from '../../components/product/ProductForm.vue'
  export default {
    created () {
      if (!this.model.name) {
        this.$store.dispatch('productById', this.$route.params['id'])
      }
      if (this.categories.length === 0) {
        this.$store.dispatch('allCategories')
      }
    },
    data () {
      return {
      }
    },
    computed: {
      categories () {
        return this.$store.getters.allCategories
      },
      model () {
        const product = this.$store.getters.productById(this.$route.params['id'])
        return Object.assign({}, product)
      }
    },
    methods: {
      updateProduct (model) {
        this.$store.dispatch('updateProduct', model)
        this.$router.push('/product')
      }
    },
    components: {
      'product-form': ProductFrom
    }
  }
</script>
