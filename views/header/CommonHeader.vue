<template>
  <header>
    <div id="header-inner" class="header-inner">
      <NavBar />
      <Background />
    </div>
  </header>
  <hr>

</template>

<script setup lang="ts">

import NavBar from "~/views/header/NavBar.vue";
import Background from "~/views/header/Background.vue";

</script>

<style scoped>

#header-inner {
  height: 100vh;
}

</style>