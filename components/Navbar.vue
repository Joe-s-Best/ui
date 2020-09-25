<template>
  <div class="w-full">
    <a-menu mode="horizontal" theme="dark">
      <a-menu-item key="landing" class="text-2xl">
        <nuxt-link
          tag="img"
          :src="require('@/assets/images/cram.png')"
          to="/"
        />
      </a-menu-item>
      <a-menu-item
        v-if="permission === 'user'"
        key="credit-overview"
        class="text-2xl"
      >
        <nuxt-link to="/credit-overview">Credit Overview</nuxt-link>
      </a-menu-item>
      <a-menu-item
        v-if="permission === 'user'"
        key="credit-request"
        class="text-2xl"
      >
        <nuxt-link to="/request">Credit Request</nuxt-link>
      </a-menu-item>
      <a-menu-item
        v-if="permission === 'admin'"
        key="credit-approval"
        class="text-2xl"
      >
        <nuxt-link to="/approval">Credit Approval</nuxt-link>
      </a-menu-item>
      <nuxt-link
        v-if="permission !== null"
        class="float-right text-white text-2xl mr-4"
        to="/"
      >
        Sign Out
      </nuxt-link>
      <nuxt-link
        v-if="permission === null"
        class="float-right mr-4"
        to="/signup"
      >
        <a-button type="primary" shape="round">Sign Up</a-button>
      </nuxt-link>
      <nuxt-link
        v-if="permission === null"
        class="float-right mr-4 text-white"
        to="/login"
      >
        Sign In
      </nuxt-link>
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
