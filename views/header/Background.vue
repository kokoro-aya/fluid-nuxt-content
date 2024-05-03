<template>
  <div id="banner" class="banner" parallax="true">
    <div class="full-bg-img">
      <div id="mask" class="mask flex-center">
        <div class="banner-text text-center fade-in-up">
          <div class="h2">
            <span id="subtitle" data-typed-text="Just want to explore faraway landscapes">
              {{ props.title }}
            </span>
            <span class="typed-cursor typed-cursor--blink" aria-hidden="true">_</span>
          </div>
        </div>
        <div class="scroll-down-bar">
          <i class="iconfont">
            <Icon name="ph:arrow-fat-down-bold" />
          </i>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import {onMounted} from "#imports";

const props = defineProps({
  title: String
})


</script>

<style scoped>

#mask {
  background-color: rgba(0, 0, 0, 0.3);
}

</style>