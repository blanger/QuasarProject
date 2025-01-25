<template>
  <div>
    <q-input
      v-model="email"
      type="email"
      :label="$t('emailInput')"
      outlined
      :hint="emailHint"
      :rules="[validateEmail]"
      @focus="onFocus"
      @blur="onBlur"
      :class="languageClass"
    />
  </div>
</template>

<script>
import { ref, watch, computed } from "vue";
import { useI18n } from "vue-i18n";

export default {
  setup() {
    const { t, locale } = useI18n();
    const email = ref("");
    const emailHint = ref("");

    const onFocus = () => {
      if (!isValidEmail(email.value)) {
        emailHint.value = t("emailHint");
      }
    };

    const onBlur = () => {
      if (isValidEmail(email.value) || email.value === "") {
        emailHint.value = "";
      }
    };

    const isValidEmail = (val) => {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(val);
    };

    const validateEmail = (val) => {
      if (!val) return true;
      return isValidEmail(val) || t("invalidEmail");
    };

    watch(email, (newValue) => {
      if (isValidEmail(newValue)) {
        emailHint.value = "";
      } else if (newValue === "") {
        emailHint.value = t("emailHint")
      }
    });

    const languageClass = computed(() => {
      return locale.value === "fa-IR" ? "rtl-transform" : "ltr-transform";
    });

    return {
      email,
      emailHint,
      validateEmail,
      t,
      onFocus,
      onBlur,
      languageClass,
    };
  },
};
</script>

<style>
.rtl-transform .q-field__label {
  transform-origin: right top !important;
  text-align: right;
}

.ltr-transform .q-field__label {
  transform-origin: left top !important;
  text-align: left;
}
</style>
