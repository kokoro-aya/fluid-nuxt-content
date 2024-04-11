<template>
  <main>

    <CommonHeader />

    <div>Archives</div>

    <div>
      <span v-if="page > 0">
        <button @click="pageDecr"> Previous page </button>
      </span>
      <button @click="pageIncr"> Next page </button>
    </div>

    <hr>

    <ContentList :query="mkQuery(page, show)" v-slot="{ list }">
      <div v-for="group in groupBy(list, ar => ar.date.slice(0, 4))" :key="group.key">
        <h4>{{ group.key }}</h4>
        <div v-for="article in group.group">
          <NuxtLink :to="article._path"><h2>{{ article.title }}</h2></NuxtLink>
          <p>{{ article.date.slice(0, 10) }}</p>

        </div>
      </div>
    </ContentList>
  </main>
</template>
<script setup lang="ts">

import {QueryBuilderParams} from "@nuxt/content/dist/runtime/types";
import CommonHeader from "~/views/CommonHeader.vue";

import {groupBy} from "~/utils/Utils";

const page = ref(0)


const pageIncr = () => { page.value ++ }
const pageDecr = () => { page.value -- }

const show = ref(10)


const mkQuery = (page: number, show: number): QueryBuilderParams => {
  return {
    path: '/blog',
    skip: page * show,
    limit: show,
    sort: [{ date: -1 }]
  }
}

</script>