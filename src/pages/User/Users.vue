<template>
  <div class="col-lg-9 col-md-9 col-sm-12 col-xs-12">
    <table class="table table-striped">
      <thead>
      <tr>
        <th>Login</th>
        <th>E-mail</th>
        <th>Profile</th>
        <th></th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="user in users">
        <td>{{user.login}}</td>
        <td>{{user.email}}</td>
        <td>{{user.profile}}</td>
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
