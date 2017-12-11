<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-xs-4">
          <h3>Cliente: <span>{{getOrder.client.name}}</span></h3>
        </div>
        <div class="col-xs-4">
          <h3>Número do Pedido: <span>{{getOrder.id}}</span></h3>
        </div>
        <div class="col-xs-4">
          <h3>Status: <span>{{getOrder.situation}}</span></h3>
        </div>
      </div>
      <br />
      <template v-for="product in getOrder.products">
        <product-card :product="product"></product-card>
      </template>
    </div>
    <div class="back">
      <button class="button" @click="back"><i class="fa fa-cart-plus"></i>Voltar</button>
    </div>
  </div>
</template>

<script>
import ProductCard from './../../components/product/ProductCard.vue'
export default {
  data () {
    return {
    }
  },
  created () {
    this.$store.dispatch('getOrder', this.$route.params['id'])
  },
  computed: {
    getOrder () {
      return this.$store.state.order
    }
  },
  methods: {
    back () {
      this.$router.push('/order')
    }
  },
  components: {
    'product-card': ProductCard
  }
}
</script>

<style>
.back {
  padding-top: 10px;
  text-align: center;
  margin-bottom: 10px;
}
</style>

