<script setup lang="ts">

import Footer from "~/views/Footer.vue";
</script>

<template>
  <div class="container nopadding-x-md">
    <div id="board" >
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-10 m-auto">
            <slot>
            </slot>
          </div>
        </div>
      </div>
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

#board {
  margin-top: 0;
}

#scroll-top-button {
  bottom: 20px;
  right: 20px;
}

</style>