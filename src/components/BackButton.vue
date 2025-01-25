<template>
  <router-link to="/" class="back-to-Login-btn">

    <q-btn
    :label="$t('backButton')"
    color="primary"
    class="no-outline" />

  </router-link>
</template>

<script>
export default {
  name: 'BackToLoginButton',
}
</script>

<style scoped>

.no-outline {
  outline: none !important;
  box-shadow: none !important;
  font-size: 11px;
  padding: 5px;
  display: flex;
  position: absolute;
  top: 43px;
}
</style>
