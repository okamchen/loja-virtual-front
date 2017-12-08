<template>
  <user-form @save-user="addUser" :model="model"></user-form>
</template>

<script>
  import UserFrom from '../../components/user/UserForm.vue'
  export default {
    data () {
      return {
        model: {}
      }
    },
    methods: {
      addUser (model) {
        this.$store.dispatch('addUser', model)
        this.$router.push('/user')
      }
    },
    components: {
      'user-form': UserFrom
    }
  }
</script>
