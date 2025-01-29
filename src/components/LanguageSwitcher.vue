<template>
  <div>
    <q-btn @click="toggleLanguage" class="lang-toggle-btn" round style="width: 1px; height: 1px;">
      <div class="flag-container">
        <img :src="flagIcon" alt="flag" class="flag-img" />
      </div>
    </q-btn>
  </div>
</template>

<script>
import { ref, onMounted } from "vue"
import { useI18n } from "vue-i18n"

export default {
  setup() {
    const { locale } = useI18n()
    const flagIcon = ref('')

    const setFlagIcon = () => {
      if (locale.value === "fa-IR") {
        flagIcon.value = "src/assets/iranflag.png"
      } else {
        flagIcon.value = "src/assets/americaflag.png"
      }
    }

    const toggleLanguage = () => {
      if (locale.value === "en-US") {
        locale.value = "fa-IR"
      } else {
        locale.value = "en-US"
      }
      setFlagIcon()
    }

    onMounted(() => {
      setFlagIcon()
    })

    return {
      flagIcon,
      toggleLanguage,
    }
  },
}
</script>

<style scoped>
.lang-toggle-btn {
  background-color: transparent;
  border: 2px rgb(82, 82, 218);
  display:inline;
  justify-content: center;
  position:relative;
  bottom: 200px;
  left: 159px;
  opacity: 0.8;

}


.flag-img {
  width: 50%;
  height: 50%;
  object-fit: cover;
  border-radius: 100%;
}
.flag-container {
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.flag-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}
</style>
