<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App'
});
</script>
<style>
@font-face {
  font-family: 'IRANSansX-Black'; /* نام فونت */
  src: url("src/assets/fonts/IRANSansX-Medium.woff") format('woff2'); /* مسیری که به فایل فونت شما اشاره دارد */
  font-weight: normal;
  font-style: normal;
}
body {
  font-family: 'IRANSansX-Black', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
