<template>
  <div>
    <q-btn
      :label="label"
      :color="color"
      :text-color="textColor"
      :class="customClass"
      fullwidth="full"
      :to="to"
    >
    </q-btn>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ButtonComponent',
  props: {
    label: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: 'primary',
    },
    textColor: {
      type: String,
      default: 'white',
    },
    customClass: {
      type: String
    },
    to: {
      type: String,
      required: ""
    }
  },

});
</script>

<style >


</style>
