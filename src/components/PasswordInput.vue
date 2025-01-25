<template>
  <q-input
    class="P-input"
    v-model="password"
    :type="passwordVisible ? 'text' : 'password'"
    :label="$t('passwordInput')"
    outlined
    :placeholder="$t('passwordPlaceholder')"
    :hint="passwordHint"
    :rules="[validatePassword]"
    :class="languageClass"
    @focus="onFocus"
    @blur="onBlur"
  >
    <template v-slot:append>
      <q-icon
        :name="passwordVisible ? 'visibility' : 'visibility_off'"
        class="cursor-pointer"
        @click="togglePasswordVisibility"
      />
    </template>
  </q-input>
</template>

<script>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';

export default {
  setup() {
    const { t, locale } = useI18n();
    const password = ref("");
    const passwordVisible = ref(false);
    const passwordHint = ref("");
    const onFocus = () => {
      if (password.value === '') {
        passwordHint.value = t("passwordHint");
      }
    };

    const onBlur = () => {
      if (password.value === '') {
        passwordHint.value = '';
      }
    };

    const validatePassword = (val) => {
      if (val && val.length < 8) {
        return t("invalidPassword");
      }
      if (val && val.length >= 8) {
        passwordHint.value = "";
      }
      return true;
    };

    const togglePasswordVisibility = () => {
      passwordVisible.value = !passwordVisible.value;
    };

    const languageClass = computed(() => {
      return locale.value === "fa-IR" ? "rtl-transform" : "ltr-transform";
    });

    return {
      password,
      passwordVisible,
      passwordHint,
      validatePassword,
      togglePasswordVisibility,
      onFocus,
      onBlur,
      languageClass,
    };
  },
};
</script>

<style>
.cursor-pointer {
  cursor: pointer;
}
.P-input {
  margin-top: 12px;
  margin-bottom: 10px;
}
.rtl-transform .q-field__label {
  transform-origin: right top !important;
  text-align: right;
}

.ltr-transform .q-field__label {
  transform-origin: left top !important;
  text-align: left;
}
</style>
