<template>
  <div>
    <link
      href="https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap"
      rel="stylesheet"
    />
    <Navbar />
    <Nuxt />
  </div>
</template>

<script>
import Navbar from '@/pages/navbar'
export default {
  components: {
    Navbar,
  },
}
</script>

<style src="./default.css"></style>

