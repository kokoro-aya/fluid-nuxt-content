<template>
  <header>
    <div id="header-inner" class="header-inner">
      <slot />
    </div>
  </header>
  <hr>

</template>

<script setup lang="ts">

import NavBar from "~/views/header/NavBar.vue";

</script>

<style scoped>

#header-inner {
  height: 70vh;
}

</style>