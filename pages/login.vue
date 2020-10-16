<template>
  <div class="flex w-full justify-center" style="padding-top: 15%">
    <form
      class="h-full shadow-md rounded p-16 mb-4"
      style="background-color: #273469"
    >
      <h1 class="text-gray-200 font-bold text-4xl box-header">
        Private Key Sign In
      </h1>
      <div class="mb-4">
        <input
          id="username"
          class="shadow appearance-none rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white"
          type="text"
          placeholder="Private Key"
          v-bind="pkey"
        />
      </div>
      <br />
      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          @click="handleSubmit"
        >
          Sign In
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',

  data() {
    return {
      formLayout: 'horizontal',
      pkey: '',
    }
  },

  methods: {
    handleSubmit(e) {
      e.preventDefault()
    },
  },
}
</script>

<style scoped>
.box-header {
  color: #fafaff;
  font-family: 'Lexend Deca', sans-serif;
  font-size: 1.8vw;
  letter-spacing: -1.75px;
}
</style>
