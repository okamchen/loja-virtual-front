<template>
  <user-form
    @save-user="updateUser"
    :model="model"
    :isEditing="true"></user-form>
</template>

<script>
  import UserFrom from '../../components/user/UserForm.vue'
  export default {
    created () {
      if (!this.model.name) {
        this.$store.dispatch('userById', this.$route.params['id'])
      }
    },
    computed: {
      model () {
        const model = this.$store.getters.userById(this.$route.params['id'])
        model.password = ''
        return Object.assign(model)
      }
    },
    methods: {
      updateUser (model) {
        this.$store.dispatch('updateUser', model)
        this.$router.push('/user')
      }
    },
    components: {
      'user-form': UserFrom
    }
  }
</script>
