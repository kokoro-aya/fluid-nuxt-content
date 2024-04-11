<template>
  <main>

    <CommonHeader />

    <div>This directory and its subs are rendered by blog/[...slug].vue</div>
    <NuxtLink :to="{ name: 'blog', target: '_parent' }">Back</NuxtLink>

    <hr>

    <ContentDoc />
  </main>
</template>
<script setup lang="ts">
import CommonHeader from "~/views/CommonHeader.vue";
</script>