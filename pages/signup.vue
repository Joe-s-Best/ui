<template>
  <a-row>
    <a-col :span="8" :offset="8">
      <div style="margin-top: 40%" class="rounded-info-box">
        <h1 class="box-header">Sign-up</h1>
        <a-form
          :form="form"
          :label-col="{ span: 6 }"
          :wrapper-col="{ span: 12 }"
          @submit="handleSubmit"
        >
          <a-input-group>
            <a-row :gutter="[8, 8]">
              <a-col :span="8" :offset="4">
                <a-input placeholder="First Name" />
              </a-col>
              <a-col :span="8">
                <a-input placeholder="Last Name" />
              </a-col>
            </a-row>
          </a-input-group>
          <a-form-item :wrapper-col="{ span: 16, offset: 4 }">
            <a-input placeholder="Student ID" />
          </a-form-item>
          <a-form-item :wrapper-col="{ span: 12, offset: 6 }">
            <a-button type="primary" html-type="submit">Sign-up</a-button>
          </a-form-item>
        </a-form>
      </div>
    </a-col>
  </a-row>
</template>

<script>
export default {
  name: 'Signup',

  data() {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
    }
  },

  methods: {
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          // console.log('lol')
        }
      })
    },
  },
}
</script>

<style>
.box-header {
  color: #fafaff;
  font-family: 'Libre Franklin', sans-serif;
  font-size: 1.8vw;
  letter-spacing: -1.75px;
}
</style>
