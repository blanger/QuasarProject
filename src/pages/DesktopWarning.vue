<template>
  <q-page class="flex flex-center">
    <div class="text-center q-pa-md">
      <q-icon name="warning" size="100px" color="red" />
      <p class="text-h5">{{ $t("desktopWarningPage") }}</p>
      <p style="margin-bottom: 25px;">{{ $t("visitWithMobile") }}</p>
      <try-button />
    </div>
  </q-page>
</template>

<script>
import TryButton from 'src/components/TryButton.vue';
import { useI18n } from 'vue-i18n';
export default {
  components: { TryButton },
  name: "DesktopWarning",
  setup() {
    const { t } = useI18n();
    return { t };
  },
};
</script>
