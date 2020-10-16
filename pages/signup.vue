<template>
  <div class="flex w-full justify-center" style="padding-top: 15%">
    <form
      class="h-full shadow-md rounded p-16 mb-4"
      style="background-color: #273469"
    >
      <h1 class="text-gray-200 font-bold text-4xl box-header">
        Student Registration
      </h1>
      <div class="text-xs text-gray-500">
        Make sure to save this key in a safe place. This is your password.
      </div>
      <br />
      <br />
      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          @click="handleGenerate"
        >
          Generate Student ID and Private Key
        </button>
      </div>
      <br />
      <br />
      <div class="mb-4">
        <input
          id="username"
          v-model="pkey"
          class="shadow appearance-none rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white"
          type="text"
          placeholder="Private Key"
        />
        <br />
        <br />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Signup',

  data() {
    return {
      formLayout: 'horizontal',
      pkey: '',
    }
  },

  methods: {
    handleGenerate(e) {
      e.preventDefault()
      this.pkey =
        'goddess drift milk learn museum disease gap crouch vote version acquire frozen'
    },
  },
}
</script>

<style>
.box-header {
  color: #fafaff;
  font-family: 'Lexend Deca', sans-serif;
  font-size: 1.8vw;
  letter-spacing: -1.75px;
}
</style>
