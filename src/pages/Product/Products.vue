<template>
  <div class="col-lg-9 col-md-9 col-sm-12 col-xs-12">
    <table class="table table-striped">
      <thead>
      <tr>
        <th>Nome</th>
        <th>Preço</th>
        <th>Categoria</th>
        <th></th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="product in products">
        <td>{{product.name}}</td>
        <td>${{product.price}}</td>
        <td>{{product.category.name}}</td>
        <td><router-link :to="'/product/edit/'+product.id"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></router-link></td>
        <td><a @click="deleteProduct(product.id)"><i class="fa fa-trash"></i></a></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
    computed: {
      products () {
        return this.$store.getters.allProducts
      }
    },
    created () {
      this.$store.dispatch('allProducts', {order: 'asc', idCategoty: 0})
    },
    methods: {
      deleteProduct (id) {
        this.$store.dispatch('removeProduct', id)
      }
    }
  }
</script>
