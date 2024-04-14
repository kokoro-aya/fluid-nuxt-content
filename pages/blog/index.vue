<template>

  <CommonHeader :title="slogan" />
  <main>
      <div class="container nopadding-x-md">
        <div id="board" >
          <ContentList :query="mkQuery(blogIndexPage, blogIndexShow)" v-slot="{ list }">
          <div class="container">
            <div class="row">
              <div class="col-12 col-md-10 m-auto">
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
                        <i class="iconfont icon-date"></i>
                        <time :datetime="article.date" pubdate>{{ article.date.slice(0, 10) }}</time>
                      </div>
                      <div class="post-meta mr-3 d-flex align-items-center">
                        <i class="iconfont icon-category"></i>
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
                        <i class="iconfont icon-tags"></i>
                            <NuxtLink :to="'/categories/' + tag"
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
                       class="extend next" rel="next" @click="pageIncr">
                      <i class="iconfont icon-arrowright">Prev</i>
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
                      <i class="iconfont icon-arrowright">Next</i>
                    </a>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
          </ContentList>
        </div>
      </div>
    <a id="scroll-top-button" href="#" role="button">
      <i class="iconfont icon-arrowup"></i>
    </a>
    <!-- TODO: Search bar -->
  </main>
  <footer>
    <div class="footer-inner">
      <div class="footer-content">
        <a href="https://content.nuxt.com/" target="_blank" rel="nofollow noopener">
          <span>Nuxt Content</span>
        </a>
        <i class="iconfont icon-love">@</i>
        <a href="https://github.com/kokoro-aya" target="_blank" rel="nofollow noopener">
          <span>aqua</span>
        </a>
        inspired by
        <a href="https://hexo.io" target="_blank" rel="nofollow noopener">
          <span>Hexo</span>
        </a>
        <i class="iconfont icon-love">@</i>
        <a href="https://github.com/fluid-dev/hexo-theme-fluid" target="_blank" rel="nofollow noopener">
          <span>Fluid</span>
        </a>
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">

import {QueryBuilderParams} from "@nuxt/content/dist/runtime/types";
import CommonHeader from "~/views/header/CommonHeader.vue";
import {onMounted} from "#imports";

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

</script>

<style>

#board {
  margin-top: 0;
}

#scroll-top-button {
  bottom: 20px;
  right: -7px;
}

#pagination {
  margin-top: -20px;
}

</style>