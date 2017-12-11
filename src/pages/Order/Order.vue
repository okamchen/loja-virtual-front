<template>
  <div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Cliente</th>
          <th>Status</th>
          <th>Valor Total</th>
          <th class="center">Detalhes</th>
          <th class="center" v-if="showRemove">Remover</th>
          <th class="center" v-if="showAuthorize">Autorizar</th>
        </tr>
      </thead>
      <tbody>
      <tr v-for="order in orders">
        <td>{{order.client.name}}</td>
        <td>{{order.situation}}</td>
        <td>${{order.totalPrice}}</td>
        <td class="center"><router-link :to="'/order/detail/'+order.id"><i class="fa fa-info-circle" aria-hidden="true"></i></router-link></td>
        <td class="center" v-if="showRemove"><a @click="removeOrder(order.id)"><i class="fa fa-trash"></i></a></td>
        <td class="center" v-if="showAuthorize"><a @click="authorizeOrder(order.id)"><i class="fa fa-check"></i></a></td>
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
    created () {
      var idUser = this.$store.state.userLogged.id
      this.$store.dispatch('allOrders', idUser)
    },
    computed: {
      orders () {
        return this.$store.getters.allOrders
      },
      showRemove () {
        var userLogged
        var userStorange = localStorage.getItem('userLogged')
        if (userStorange !== 'undefined') {
          userLogged = JSON.parse(userStorange)
        }
        return userLogged && userLogged.profile === 'ADMIN'
      },
      showAuthorize () {
        var userLogged
        var userStorange = localStorage.getItem('userLogged')
        if (userStorange !== 'undefined') {
          userLogged = JSON.parse(userStorange)
        }
        return userLogged && userLogged.profile === 'ADMIN'
      }
    },
    methods: {
      authorizeOrder (id) {
        var userLogged
        var userStorange = localStorage.getItem('userLogged')
        if (userStorange !== 'undefined') {
          userLogged = JSON.parse(userStorange)
        }
        var payload = {
          idOrder: id,
          user: userLogged
        }
        this.$store.dispatch('authorizeOrder', payload)
      },
      removeOrder (id) {
        var userLogged
        var userStorange = localStorage.getItem('userLogged')
        if (userStorange !== 'undefined') {
          userLogged = JSON.parse(userStorange)
        }
        var payload = {
          idOrder: id,
          user: userLogged
        }
        this.$store.dispatch('removeOrder', payload)
      }
    }
  }
</script>

<style>
.center {
  text-align: center;
}

</style>
