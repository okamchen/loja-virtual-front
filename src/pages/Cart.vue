<template>
  <div v-if="cart.length > 0">
    <div class="title">
      <h1><i class="fa fa-shopping-cart"></i> Carrinho</h1>
    </div>
    <template v-for="product in cart">
      <product-details :product="product" :key="product.id"></product-details>
    </template>
    <div class="close-order">
      <button class="button" @click="closeOrder"><i class="fa fa-cart-plus"></i>Finalizar Pedido</button>
    </div>
  </div>
  <div v-else class="title"><h1><i class="fa fa-shopping-cart"></i> Carrinho está vazinho</h1></div>
</template>

<script>
  import ProductDetails from '../components/product/ProductDetails'
  export default {
    data () {
      return {
        cart: this.$store.state.cart
      }
    },
    components: {
      productDetails: ProductDetails
    },
    methods: {
      closeOrder () {
        if (!this.$store.state.userLogged.login) {
          this.$router.push('/login')
        } else {
          var order = {
            client: this.$store.state.userLogged,
            products: this.cart
          }
          this.$store.dispatch('closeOrder', order)
          this.$router.push('/order')
        }
      }
    }
  }
</script>

<style>
.close-order {
  padding-top: 10px;
  text-align: center;
  margin-bottom: 10px;
}
</style>
