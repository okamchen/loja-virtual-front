<template>
  <div class="col-lg-9 col-md-9 col-sm-12 col-xs-12">
    <table class="table table-striped">
      <thead>
      <tr>
        <th>Nome</th>
        <th></th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="user in users">
        <td>{{user.login}}</td>
        <td><router-link :to="'/user/edit/'+user.id"><i class="fa fa-pencil-square-o"></i></router-link></td>
        <td><a @click="deleteUser(user.id)"><i class="fa fa-trash"></i></a></td>
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
    users () {
      return this.$store.getters.allUsers
    }
  },
  created () {
    if (this.users.length === 0) {
      this.$store.dispatch('allUsers')
    }
  },
  methods: {
    deleteUser (id) {
      this.$store.dispatch('removeUser', id)
    }
  }
}
</script>


<style>
  .admin-menu a {
    display: block;
    background: #EFDB06;
    border: 1px solid #F9E610;
    color: #3D3D3D;
    padding: 10px 15px;
    font-family: 'PT Sans', sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 12px;
    transform: scaleX(1);
    transition: transform 200ms ease-in;
  }

  .admin-menu a:hover {
    text-decoration: none;
    transform: scaleX(1.02);
  }

  .admin-new, .admin-products {
    border-bottom: 2px solid #F5F5F5;
    padding: 30px 0;
  }
</style>
