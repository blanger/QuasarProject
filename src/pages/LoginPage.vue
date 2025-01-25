<template>
  <div class="page">
    <q-page class="language-page" :class="{ rtl: isRtl }">
      <div class="white-box" style="justify-content: center" role="rtl">
        <div>
          <q-img src="../assets/AppleLogo.png" style="height: 100%; width: 50px; margin-top: 30px;" />

        </div>

        <h3 style="margin-top: 15px; font-size: 26px">{{ $t('loginTitle') }}</h3>
        <check-device />
        <br />
      </div>
    </q-page>
  </div>
</template>

<script>
import CheckDevice from 'src/components/CheckDevice.vue'

export default {
  components: { CheckDevice },

  setup() {
  },
}
</script>

<style scoped>
.page {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
