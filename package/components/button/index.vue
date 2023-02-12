<template>
  <button :class="['f-button', type ? 'f-button--' + type : '']">
    <slot />
  </button>
</template>
<script lang="ts" setup>
// import { ref, reactive } from 'vue'
</script>
<script lang="ts">
export default {
  name: "f-button",
  props: {
    type: { type: String, default: "default" },
  },
};
</script>
