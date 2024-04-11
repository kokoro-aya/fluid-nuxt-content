<template>
  <main>

    <CommonHeader />

    <div>Categories</div>

    <hr>

    <ContentList path="/blog" v-slot="{ list }">
      <div v-for="group in groupByCategories(list)" :key="group.key">
        <h4>{{ group.key }}</h4>
        <p> {{ group.group.length }}</p>
        <div v-for="article in group.group">
          <NuxtLink :to="article._path"><h2>{{ article.title }}</h2></NuxtLink>
        </div>
      </div>
    </ContentList>
  </main>
</template>
<script setup lang="ts">

import CommonHeader from "~/views/CommonHeader.vue";


const page = ref(0)

const renderCategories = (article: any) => {
  console.log(toRaw(article.categories)?.[0] ?? "Nothing")
  return article.categories
}

// Specialized version of `groupBy` to group articles according to categoris
// It uses `article.categories`, assume that it has at least one category (or `Nothing` will be assigned
// And it unwrap the ref (Proxy) to obtain its inner array
const groupByCategories = <A, B>(list: A[]): { key: B[], group: A[] }[] =>   {
  let ret: { key: B[], group: A[] }[] = []
  for (let elem of list) {
    // @ts-ignore
    let groupEval = toRaw(elem.categories)?.[0] ?? "Nothing"
    let entry = ret.find(s => s.key === groupEval[0])
    if (entry !== undefined) {
      entry.group.push(elem)
    } else {
      ret.push({ key: groupEval, group: [elem] })
    }
  }
  return ret
}

</script>