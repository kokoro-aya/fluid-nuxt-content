<template>
  <main>
    <div>Index of the blog</div>

    <div>
      <span v-if="page > 0">
        <button @click="pageDecr"> Previous page </button>
      </span>
      <button @click="pageIncr"> Next page </button>
    </div>

    <div>
      <span v-if="show > 0">
        <button @click="showDecr"> {{ show - 1 }} articles/page </button>
      </span>
      <span v-if="show < 9">
        <button @click="showIncr"> {{ show + 1 }} articles/page </button>
      </span>
    </div>

    <hr>

    <ContentList :query="mkQuery(page, show)" v-slot="{ list }">
      <div v-for="article in list" :key="article._path">
        <NuxtLink :to="article._path"><h2>{{ article.title }}</h2></NuxtLink>
        <p>{{ article.description }}</p>
      </div>
    </ContentList>
  </main>
</template>
<script setup lang="ts">

import {QueryBuilderParams} from "@nuxt/content/dist/runtime/types";

const page = ref(0)

const pageIncr = () => { page.value ++ }
const pageDecr = () => { page.value -- }

const show = ref(5)

const showIncr = () => { show.value ++ }
const showDecr = () => { show.value -- }

const mkQuery = (page: number, show: number): QueryBuilderParams => {
  return {
    path: '/blog',
        skip: page * show,
      limit: show,
      sort: [{ date: -1 }]
  }
}

</script>