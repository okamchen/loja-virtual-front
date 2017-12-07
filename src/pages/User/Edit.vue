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
    data () {
//      const productById = this.$store.getters.productById(this.$route.params['id'])
      return {
//        model: {}
//        model: this.$store.getters.productById(this.$route.params['id'])
      }
    },
    computed: {
      model () {
        const userById = this.$store.getters.userById(this.$route.params['id'])
        return Object.assign({}, userById)
      }
    },
    methods: {
      updateUser (model) {
        this.$store.dispatch('updateUser', model)
      }
    },
    components: {
      'user-form': UserFrom
    }
  }
</script>
