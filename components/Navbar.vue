<template>
  <div class="w-full">
    <a-menu mode="horizontal">
      <a-menu-item key="landing">
        <nuxt-link to="/">Logo</nuxt-link>
      </a-menu-item>
      <a-menu-item v-if="permission === 'user'" key="credit-overview">
        <nuxt-link to="/overview">Credit Overview</nuxt-link>
      </a-menu-item>
      <a-menu-item v-if="permission === 'user'" key="credit-request">
        <nuxt-link to="/request">Credit Request</nuxt-link>
      </a-menu-item>
      <a-menu-item v-if="permission === 'admin'" key="credit-approval">
        <nuxt-link to="/approval">Credit Approval</nuxt-link>
      </a-menu-item>
      <a-menu-item v-if="permission !== null" key="signout">
        <nuxt-link to="/">Sign Out</nuxt-link>
      </a-menu-item>
      <a-menu-item v-if="permission === null" key="signout">
        <nuxt-link to="/login">Sign In</nuxt-link>
      </a-menu-item>
      <a-menu-item v-if="permission === null" key="signout">
        <nuxt-link to="/signuo">Sign Up</nuxt-link>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  computed: {
    permission() {
      return this.$store.state.permission
    },
  },
}
</script>

<style></style>
