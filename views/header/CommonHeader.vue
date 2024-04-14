<template>
  <header>
    <div id="header-inner" class="header-inner">
      <NavBar />
      <Background :title="props.title" />
    </div>
  </header>
  <hr>

</template>

<script setup lang="ts">

import NavBar from "~/views/header/NavBar.vue";
import Background from "~/views/header/Background.vue";

const props = defineProps({
  title: String
})

</script>

<style scoped>

#header-inner {
  height: 100vh;
}

</style>