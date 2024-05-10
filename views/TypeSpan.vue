<template>
  <div class="h2">
    <span id="subtitle"></span>
  </div>
</template>

<script setup lang="ts">

import Typed from "typed.js";

let props = withDefaults(defineProps<{
  typewriteText: string
}>(), {
  typewriteText: ''
})

onMounted(() => {
  const typed = new Typed('#subtitle', {
    strings: [props.typewriteText],
    typeSpeed: 50,
  })
})

</script>

<style scoped>

</style>