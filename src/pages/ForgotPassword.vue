<template>
  <div class="page">
    <q-page>
      <div class="white-box" style="justify-content: center">
        <div>

          <q-img src="../assets/AppleLogo.png" style="height: 100%; width: 50px; margin-top: 45px;" />
        </div>

        <h3 style="margin-top: 15px; font-size: 26px; margin-bottom: 8px;">{{ $t("forgotPasswordPage") }}</h3>
        <p style="font-size: 17px; margin-bottom:45px; ">{{ $t('PasswordDes') }}</p>


        <email-input />
        <br />
        <ButtonComponent
      :label="$t('SendButton')"
      color="primary"
      textColor="white"
      customClass="sendbutton"
    />
    <ButtonComponent
      :label="$t('backButton')"
      color="primary"
      textColor="white"
      customClass="backbutton"
      to="/login"
    />
      </div>

    </q-page>
  </div>
</template>

<style></style>

<script>
import EmailInput from 'src/components/EmailInput.vue'
import ButtonComponent from 'src/components/ButtonComponent.vue';

export default {
  components: { EmailInput , ButtonComponent },
}
</script>

<style>
.page {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.backbutton {
  outline: none !important;
  box-shadow: none !important;
  font-size: 11px;
  padding: 5px;
  display: flex;
  position: absolute;
  top: 43px;
}
.sendbutton {
  margin-top: 20px;
  padding: 11.5px 0;
  text-align: center;
  width: 100%;
  display: relative;
  font-size: 16px;
  top: 50px;
}
</style>
