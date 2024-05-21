<template>

  <FullCommonHeader >
    <NavBar :class="scrollHeight < 40 ? '' : 'top-nav-collapse' "/>
    <div id="banner" class="banner" parallax="true">
      <div class="full-bg-img">
        <div id="mask" class="mask flex-center">
          <div class="banner-text text-center fade-in-up">
            <TypeSpan :typewrite-text="slogan" />
          </div>
          <div class="scroll-down-bar">
            <i class="iconfont">
              <Icon name="ph:arrow-fat-down-bold" />
            </i>
          </div>
        </div>
      </div>
    </div>
  </FullCommonHeader>
  <main>
    <MainContainer>
      <ContentList :query="mkQuery(blogIndexPage, blogIndexShow)" v-slot="{ list }">
        <div v-for="article in list" :key="article._path">
          <div class="row mx-auto py-3 index-card">
            <div class="col-12 col-md-4 m-auto index-img">
              <NuxtLink :to="article._path">
                <img :src="article.index_img" :alt="article.title" />
              </NuxtLink>
            </div>
            <article class="col-12 col-md-8 mx-auto index-info">
              <h2 class="index-header">
                <NuxtLink :to="article._path">{{ article.title }}</NuxtLink>
              </h2>
              <NuxtLink :to="article._path"
                        class="index-excerpt">
                <div>{{ article.description }}</div>
              </NuxtLink>
              <div class="index-btm post-metas">
                <div class="post-meta mr-3">
                  <i class="iconfont">
                    <Icon name="material-symbols:calendar-month" />
                  </i>
                  <time :datetime="article.date" pubdate>{{ article.date.slice(0, 10) }}</time>
                </div>
                <div class="post-meta mr-3 d-flex align-items-center">
                  <i class="iconfont">
                    <Icon name="tabler:category-2" />
                  </i>
                  <span v-for="category in article.categories" :key="category"
                        class="category-chains">
                              <span class="category-chain">
                                <NuxtLink :to="'/categories/' + category"
                                          class="category-chain-item"
                                >{{ category }}</NuxtLink>
                              </span>
                            </span>
                </div>
                <div v-for="tag in article.tags" :key="tag"
                     class="post-meta mr-3">
                  <i class="iconfont">
                    <Icon name="mdi:tag-multiple-outline" />
                  </i>
                  <NuxtLink :to="'/tags/' + tag"
                            class="category-chain-item">{{ tag }}</NuxtLink>
                </div>
              </div>
            </article>
          </div>
        </div>
        <nav>
          <div class="pagination" id="pagination">
            <div>
              <a v-if="blogIndexPage > 0"
                 class="extend next" rel="next" @click="pageDecr">
                <i class="iconfont">
                  <Icon name="material-symbols:keyboard-double-arrow-left-rounded" />
                </i>
              </a>
            </div>
            <div v-for="index in pageIndices()" :key="index">
                          <span v-if="index == blogIndexPage"
                                class="page-number current">{{index}}</span>
              <a v-else class="page-number" @click="pageJump(index)">{{index}}</a>
            </div>
            <div>
              <a v-if="blogIndexPage < pageIndices().length - 1"
                 class="extend next" rel="next" @click="pageIncr">
                <i class="iconfont">
                  <Icon name="material-symbols:keyboard-double-arrow-right-rounded" />
                </i>
              </a>
            </div>
          </div>
        </nav>
      </ContentList>
    </MainContainer>
  </main>
</template>
<script setup lang="ts">

import {QueryBuilderParams} from "@nuxt/content/dist/runtime/types";
import {onMounted} from "#imports";
import MainContainer from "~/views/MainContainer.vue";
import FullCommonHeader from "~/views/header/FullCommonHeader.vue";
import NavBar from "~/views/header/NavBar.vue";
import TypeSpan from "~/views/TypeSpan.vue";

const slogan = "Just want to explore faraway landscapes"

const pageCount = ref(0)

onMounted(async () => {
  const { data }  = await useAsyncData('blog', async () => {
    let contents = await queryContent('/blog').find()
    return contents.length
  })
  pageCount.value = data.value ?? 0
})


// (3 + 1) * 10 => 40 ... 40 ... 1 2 3 4
// (3 + 1) * 10 => 40 ... 41 ...

const pageIndices = (): number[] => {
  const count = Math.ceil(pageCount.value / blogIndexShow.value)
  return [...Array(count).keys()]
}

const pageJump = (i: number) => {
  blogIndexPage.value = i
}

const pageIncr = () => {
  if ((blogIndexPage.value + 1) * blogIndexShow.value < pageCount.value) {
    blogIndexPage.value ++
  }
}

const blogIndexPage = ref(0)
const pageDecr = () => {
  if (blogIndexPage.value > 0) {
    blogIndexPage.value--
  }
}

const blogIndexShow = ref(10)

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
}

#header-inner {
  height: 100vh;
}

#pagination {
  margin-top: -20px;
}

</style>