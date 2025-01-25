<template>

  <q-btn color="primary" class="loginbutton" @click="GoToLogin">
    {{ $t("tryAgain") }}
  </q-btn>
</template>

<script>
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

export default {
  setup() {
    const router = useRouter()
    const { t } = useI18n()

    const GoToLogin = () => {
      router.push('/')
    };

    return {
      GoToLogin,
      t,
    };
  },
};
</script>

<style>
.loginbutton {
  margin-top: 5px;
  padding-right: 44%;
  padding-left: 42.5%;
  text-align: center;
  padding: 12px 134.5px;
}
</style>
