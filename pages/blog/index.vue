<template>
  <main>

    <CommonHeader />

    <div>Index of the blog</div>

    <div>
      <span v-if="blogIndexPage > 0">
        <button @click="pageDecr"> Previous page </button>
      </span>
      <button @click="pageIncr"> Next page </button>
    </div>

    <div>
      <div v-if="blogIndexShow > 0">
        <p @click="showDecr"> {{ blogIndexShow - 1 }} articles/page </p>
      </div>
      <div v-if="blogIndexShow < 9">
        <p @click="showIncr"> {{ blogIndexShow + 1 }} articles/page </p>
      </div>
    </div>

    <hr>

    <ContentList :query="mkQuery(blogIndexPage, blogIndexShow)" v-slot="{ list }">
      <div v-for="article in list" :key="article._path">
        <NuxtLink :to="article._path"><h2>{{ article.title }}</h2></NuxtLink>
        <p>{{ article.date }}</p>
        <p>{{ article.description }}</p>
        <p>Categories: {{ article.categories }}</p>
        <p>Tags: {{ article.tags }}</p>
      </div>
    </ContentList>
  </main>
</template>
<script setup lang="ts">

import {QueryBuilderParams} from "@nuxt/content/dist/runtime/types";
import CommonHeader from "~/views/header/CommonHeader.vue";

const blogIndexPage = ref(0)

const pageIncr = () => { blogIndexPage.value ++ }
const pageDecr = () => { blogIndexPage.value -- }

const blogIndexShow = ref(5)

const showIncr = () => { blogIndexShow.value ++ }
const showDecr = () => { blogIndexShow.value -- }

const mkQuery = (page: number, show: number): QueryBuilderParams => {
  return {
    path: '/blog',
        skip: page * show,
      limit: show,
      sort: [{ date: -1 }]
  }
}

</script>