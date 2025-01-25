<template>
  <q-layout
    view="hHh LpR fFf"
    :dir="layoutDirection"
    style="height: 100vh; width: 100vw; justify-content: center;"
  >
    <q-header reveal elevated class="bg-primary text-white"> </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, computed } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: "LayoutPage",

  setup() {
    const { locale } = useI18n()

    const layoutDirection = computed(() => {
      return locale.value === "fa-IR" ? "rtl" : "ltr";
    })

    return {
      layoutDirection
    }
  },
})
</script>

<style scoped>
</style>

