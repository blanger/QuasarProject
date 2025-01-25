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
  font-family: 'IRANSansX-Black';
  src: url("src/assets/fonts/IRANSansX-Medium.woff") format('woff2');
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
