<template>
  <div class="page">
    <q-page>
      <div class="white-box" style="justify-content: center">
        <div>

          <q-img src="../assets/AppleLogo.png" style="height: 100%; width: 50px; margin-top: 30px;" />
        </div>

        <h3 style="margin-top: 15px; font-size: 26px; margin-bottom: 8px;">{{ $t("forgotPasswordPage") }}</h3>
        <p style="font-size: 17px; margin-bottom:38px; ">{{ $t('PasswordDes') }}</p>


        <email-input />
        <br />
        <send-button />
        <back-button />
      </div>

    </q-page>
  </div>
</template>

<style></style>

<script>
import EmailInput from 'src/components/EmailInput.vue'
import SendButton from 'src/components/SendButton.vue'
import BackButton from 'src/components/BackButton.vue'

export default {
  components: {BackButton , EmailInput , SendButton },
}
</script>

<style
    BackButtontyle scoped>
.page {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
