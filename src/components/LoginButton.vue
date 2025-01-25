<template>
  <q-btn
    :label="$t('loginButton')"
    color="primary"
    class="loginbutton"
    @click="LoginClick"
  ></q-btn>
</template>

<script>
export default {
  methods: {
    LoginClick() {
      console.log("Login button clicked !");
    }
  }
}
</script>

<style scoped>
.loginbutton {
  margin-top: 20px;
  padding: 11.5px 0;
  text-align: center;
  width: 100%;
  display: block;
  font-size: 16px;
}
</style>
