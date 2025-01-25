<template>
  <div class="fullscreen bg-secondary text-white text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 20vh;">
        <q-img src="../assets/404notfound.jpg" style="height: 100%; width: 40vh;" />
      </div>

      <div class="text-h2">
        {{ $t('PageNotFound') }}
      </div>

      <q-btn
        class="q-mt-xl"
        size="20px"
        color="white"
        text-color="primary"
        unelevated
        to="/login"
        :label="$t('GotoLogin')"
        no-caps
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'ErrorNotFound',
  setup() {
    const { t } = useI18n();
    return { t };
  },
});
</script>
<style>
.q-mt-xl {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
</style>
