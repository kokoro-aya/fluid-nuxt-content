<template>
  <header>
    <div id="header-inner" class="header-inner">
      <NavBar :class="scrollHeight < 40 ? '' : 'top-nav-collapse' "/>
      <Background :title="props.title" />
    </div>
  </header>
  <hr>

</template>

<script setup lang="ts">

import NavBar from "~/views/header/NavBar.vue";
import Background from "~/views/header/Background.vue";
import {onMounted} from "#imports";

const props = defineProps({
  title: String
})

let scrollHeight = ref(0)

let scrollListener = () => {
  scrollHeight.value = window.scrollY
}

onMounted(() => {
  scrollListener()
  window.addEventListener('scroll', scrollListener)
})

onUnmounted(() => {
  window.removeEventListener('scroll', scrollListener)
})

</script>

<style scoped>

#banner {
  background: url("/img/default.jpg") center center / cover no-repeat;
  transform: translate3d(0px, v-bind(scrollHeight)px, 0px);
}

#header-inner {
  height: 100vh;
}

</style>