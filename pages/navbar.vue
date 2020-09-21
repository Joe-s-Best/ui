<style src="../components/navbar/navbar.css"></style>
<template src="../components/navbar/navbar.html"></template>

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
