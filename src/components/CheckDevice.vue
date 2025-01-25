<template>

  <q-page>
    <div v-if="isMobile">
      <email-input />
      <password-input />
      <router-link :to="{ name: 'forgot-password' }">{{ $t("forgotPassword") }}</router-link>
      <login-button />
    </div>
    <div v-else>
  <Warning-Desktop />
    </div>
    <language-switcher />
  </q-page>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import EmailInput from './EmailInput.vue'
import PasswordInput from './PasswordInput.vue'
import LoginButton from './LoginButton.vue'
import WarningDesktop from 'src/pages/DesktopWarning.vue'
import LanguageSwitcher from './LanguageSwitcher.vue'

export default {
  components: { WarningDesktop, EmailInput, PasswordInput, LoginButton , LanguageSwitcher },
  setup() {
    const isMobile = ref(false)
    const router = useRouter()

    // چک کردن دستگاه
    const checkDevice = () => {
      const userAgent = navigator.userAgent.toLowerCase()
      isMobile.value = /mobile|android|iphone|ipad/.test(userAgent)

      if (!isMobile.value) {
        router.push("/warning")
      }
    }

    onMounted(() => {
      checkDevice()
    })

    return {
      isMobile,
    }
  },
}
</script>

<style scoped>
.q-page {
  min-height: unset !important;
}
</style>
