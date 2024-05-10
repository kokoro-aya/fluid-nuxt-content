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
    <i class="iconfont">
      <Icon name="material-symbols:keyboard-arrow-up-rounded"
            size="32px"
      />
    </i>
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