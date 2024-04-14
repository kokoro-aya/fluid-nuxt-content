<template>
  {{ localParam }}
</template>
<script setup lang="ts">

import {onMounted, useRoute} from "#imports";

const route = useRoute()

const localParam = ref("")

onMounted(() => {
  localParam.value = <string>route.params.tag
})

</script>


<style scoped>

</style>