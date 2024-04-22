<script setup lang="ts">

import Footer from "~/views/Footer.vue";
</script>

<template>
  <div class="container-fluid nopadding-x">
    <div class="row nomargin-x">
      <slot />
    </div>
  </div>
  <a id="scroll-top-button" href="#" role="button">
    <i class="iconfont icon-arrowup"></i>
  </a>
  <!-- TODO: Search bar -->
  <Footer />
</template>

<style scoped>

#scroll-top-button {
  bottom: 20px;
  right: 20px;
}

</style>