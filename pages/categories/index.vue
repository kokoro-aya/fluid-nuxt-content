<template>
  <PartialCommonHeader>
    <div id="banner" class="banner" parallax="true">
      <div class="full-bg-img">
        <div id="mask" class="mask flex-center">
          <div class="banner-text text-center fade-in-up">
            <div class="h2">
            <span id="subtitle" data-typed-text="Just want to explore faraway landscapes">
              {{pageName}}
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
  </PartialCommonHeader>
  <main>
    <MainContainer>
      <ContentList path="/blog" v-slot="{ list }">
        <div class="category-list"
             v-for="group in groupByCategories(list)" :key="group.key">
          <div class="category row nomargin-x">
            <a class="category-item list-group-item category-item-action col-10 col-md-11 col-xm-11"
               :class="group.expanded ? '' : 'collapsed'"
               :title="group.key"
               role="tab"
               @click="expandGroup(group.key)"
            >
              {{group.key}}
              <span class="list-group-count"></span>
              <i class="iconfont">
                <Icon name="material-symbols:arrow-forward-ios-rounded" />
              </i>
            </a>
            <NuxtLink :to="'/categories/' + group.key" class="category-count col-2 col-md-1 col-xm-1">
              <i class="iconfont">
                <Icon name="pixelarticons:article-multiple" />
              </i>
              <span>{{group.count}}</span>
            </NuxtLink>

            <div class="category-collapse collapse"
                 :class="group.expanded ? 'show' : ''"
                 role="tabpanel">
              <div class="category-post-list"
                   v-for="article in group.group" :key="article.title">
                <NuxtLink :to="article.link" class="list-group-item list-group-item-action"
                          :title="article.title">
                  <span class="category-post">{{article.title}}</span>
                </NuxtLink>
              </div>
            </div>

          </div>
        </div>
      </ContentList>
    </MainContainer>

  </main>
</template>
<script setup lang="ts">

import CommonHeader from "~/views/header/CommonHeader.vue";
import {Ref} from "@vue/reactivity";
import MainContainer from "~/views/MainContainer.vue";
import PartialCommonHeader from "~/views/header/PartialCommonHeader.vue";

const pageName = "Categories"

const page = ref(0)

const cachedQuery: Ref<{ key: string, group: { title: string, link: string }[], count: number, expanded: boolean }[]> = ref([])

const expandGroup = (key: string) => {
  const v = cachedQuery.value.find(e => e.key === key)
  if (v !== undefined) {
    v.expanded = !v.expanded
  }
}

// Specialized version of `groupBy` to group articles according to categoris
// It uses `article.categories`, assume that it has at least one category (or `Nothing` will be assigned
// And it unwrap the ref (Proxy) to obtain its inner array
const groupByCategories = (list: any[]): { key: string, group: { title: string, link: string }[], count: number, expanded: boolean }[] =>   {
  if (cachedQuery.value.length === 0) {
    let ret: { key: string, group: { title: string, link: string }[], count: number, expanded: boolean }[] = []
    for (let elem of list) {
      // @ts-ignore
      let groupEval = toRaw(elem.categories)?.[0] ?? "Nothing"
      let entry = ret.find(s => s.key === groupEval)
      if (entry !== undefined) {
        if (entry.group.length < 8) {
          // @ts-ignore
          entry.group.push({title: elem.title, link: elem._path})
        } else if (entry.group.length == 8) {
          entry.group.push({title: "More...", link: '/categories/' + entry.key})
        } else {

        }
        entry.count ++
      } else {
        // @ts-ignore
        ret.push({ key: groupEval, group: [{title: elem.title, link: elem._path}], count: 1, expanded: false })
      }
    }
    cachedQuery.value = ret
    return ret
  } else {
    return cachedQuery.value
  }
}

</script>
<style scoped>

#banner {
  background: url("/img/default.jpg") center center / cover no-repeat;
}

.category {
  margin-bottom: 1rem;
}

</style>