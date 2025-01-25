<template>
  <q-btn color="primary" class="sendbutton" @click="SendClick">{{ $t("SendButton") }}</q-btn>
</template>

<script>
export default {
  methods: {
    SendClick() {
      console.log("Send button clicked");
    }
  }
}
</script>

<style>
.sendbutton {
  padding: 11.5px 0;
  text-align: center;
  width: 100%;
  display: block;
  font-size: 16px;
  bottom:10px;
}
</style>
