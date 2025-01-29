<template>
  <q-page>
    <div>
      <language-switcher />
      <email-input />
      <password-input />
      <router-link :to="{ name: 'forgot-password' }">{{ $t('forgotPassword') }}</router-link>

      <ButtonComponent
      :label="$t('loginButton')"
      color="primary"
      textColor="white"
      :customClass="'loginbutton'"
      />
    </div>
  </q-page>
</template>

<script>
import EmailInput from './EmailInput.vue'
import PasswordInput from './PasswordInput.vue'
import ButtonComponent from './ButtonComponent.vue'
import LanguageSwitcher from './LanguageSwitcher.vue'

export default {
  components: { EmailInput, PasswordInput, ButtonComponent, LanguageSwitcher },
  setup() {},
}
</script>

<style>
.q-page {
  min-height: unset !important;
}
.loginbutton {
  margin-top: 20px;
  padding: 11.5px 0;
  text-align: center;
  width: 100%;
  display: block;
  font-size: 16px;
}
</style>
