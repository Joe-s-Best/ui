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
import Navbar from '@/components/Navbar'
export default {
  components: {
    Navbar,
  },
}
</script>

<style>
.ant-menu {
  background: #292929;
  font-family: 'Lexend Deca', sans-serif;
  font-size: 16px;
}

.ant-menu.ant-menu-dark .ant-menu-item-selected,
.ant-menu-submenu-popup.ant-menu-dark .ant-menu-item-selected {
  background: #292929;
  color: #fff;
  border-bottom: 2px solid #fff;
}

div {
  color: #fff;
  font-family: 'Libre Franklin', sans-serif;
}

body {
  background-color: #1e2749;
  height: 100%;
}

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.rounded-info-box {
  font-family: 'Lexend Deca, sans-serif';
  color: #fafaff;
  background-color: #273469;
  border-radius: 15px;
  margin-left: 10px;
  margin-right: 25px;
  padding: 10px 10px 10px 10px;
  text-align: center;
  min-height: 20vw;
  font-size: 1.15vw;
}
</style>
