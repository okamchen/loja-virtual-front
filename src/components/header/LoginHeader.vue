<template>
  <div v-if="!userLogged.login">
    <li><router-link to="/login"><i class="fa fa-user-circle"></i> Login</router-link></li>
  </div>
  <div v-else>
    <li><span class="login-name">{{userLogged.name}} <i class="fa fa-user-circle"></i></span></li>
  </div>
</template>

<script>
export default {
  props: ['userLogged']
}
</script>

<style scope>
.login-name {
  color: #FFFFFF;
  display: block;
  padding: 15px 15px;
  transition: all 150ms ease-out;
}
</style>
