<template>
  <div id="banner" class="banner" parallax="true">
    <div class="full-bg-img">
      <div id="mask" class="mask flex-center">
        <div class="banner-text text-center fade-in-up">
          <div class="h2">
            <span id="subtitle" data-typed-text="Just want to explore faraway landscapes">
              Just want to explore faraway landscapes
            </span>
            <span class="typed-cursor typed-cursor--blink" aria-hidden="true">_</span>
          </div>
        </div>
        <div class="scroll-down-bar">
          <i class="iconfont icon-arrow-down">_</i>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

#banner {
  background: url("/img/default.jpg") center center / cover no-repeat;
  transform: translate3d(0px, 0px, 0px);
}

#mask {
  background-color: rgba(0, 0, 0, 0.3);
}

</style>