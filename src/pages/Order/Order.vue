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
        <td class="center" v-if="showRemove"><a @click="approvedOrder(order.id)"><i class="fa fa-trash"></i></a></td>
        <td class="center" v-if="showAuthorize"><a @click="approvedOrder(order.id)"><i class="fa fa-check"></i></a></td>
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
        var userStorange = JSON.parse(localStorage.getItem('userLogged'))
        return userStorange.profile !== 'ADMIN'
      },
      showAuthorize () {
        var userStorange = JSON.parse(localStorage.getItem('userLogged'))
        return userStorange.profile === 'ADMIN'
      }
    },
    methods: {
      approvedOrder (id) {
        this.$store.dispatch('approvedOrder', id)
      }
    }
  }
</script>

<style>
.center {
  text-align: center;
}

</style>
