

<style src="./navbar.css"></style>
<template src="./navbar.html"></template>

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
