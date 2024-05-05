<template>
  <PartialCommonHeader>
    <NavBar :class="scrollHeight < 40 ? '' : 'top-nav-collapse' "/>
    <div id="banner" class="banner" parallax="true">
      <div class="full-bg-img">
        <div id="mask" class="mask flex-center">
          <div class="banner-text text-center fade-in-up">
            <!-- similar to category headline -->
            <div class="h2">
              <span id="subtitle"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </PartialCommonHeader>
  <main>
    <MainContainer>
      <div v-if="articleCount() <= 0">
        <p class="h4">Loading ...</p>
      </div>
      <div v-else class="list-group">
        <p class="h4">{{articleCount()}} Articles</p>
        <hr>
        <div v-for="group in showCurrentWindow()" :key="group.year">
          <p class="h5">{{group.year}}</p>
          <a v-for="article in group.group" :key="article.link"
             :href="article.link"
             class="list-group-item list-group-item-action">
            <time>{{renderMonthDay(article.date)}}</time>
            <div class="list-group-item-title">{{article.title}}</div>
          </a>
        </div>
      </div>
      <nav v-if="pageIndices().length > 1">
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
    </MainContainer>
  </main>
</template>
<script setup lang="ts">

import {onMounted, useRoute} from "#imports";
import MainContainer from "~/views/MainContainer.vue";
import CommonHeader from "~/views/header/CommonHeader.vue";
import {QueryBuilderParams} from "@nuxt/content/dist/runtime/types";
import {Ref} from "@vue/reactivity";
import PartialCommonHeader from "~/views/header/PartialCommonHeader.vue";
import NavBar from "~/views/header/NavBar.vue";
import FullCommonHeader from "~/views/header/FullCommonHeader.vue";
import TypeSpan from "~/views/TypeSpan.vue";
import Typed from "typed.js";

const route = useRoute()

const localParam = ref("")

const pageName = computed(() =>
  `Tag - ${localParam.value}`
)

const cachedQuery: Ref<{ year: string, group: { title: string, link: string, date: string, articleCount: number }[] }[]> = ref([])

onMounted(async () => {
  localParam.value = <string>route.params.tag
  let data = await queryContent('/blog')
      .where({ 'tags': { $contains: localParam.value } })
      .only(['title', '_path', 'date'])
      .find()
  cachedQuery.value = groupByYears(data)

  // Setup of typed.js object here
  const typed = new Typed('#subtitle', {
    strings: [pageName.value],
    typeSpeed: 50,
  })
})

const groupByYears = (list: any[]): { year: string, group: { title: string, link: string, date: string, articleCount: number }[] }[] =>   {
  if (cachedQuery.value.length === 0) {
    let ret: { year: string, group: { title: string, link: string, date: string, articleCount: number }[] }[] = []

    for (let elem of list) {
      let dateEval = elem.date
      let year = dateEval.slice(0, 4)
      let entry = ret.find(s => s.year === year)
      if (entry !== undefined) {
        entry.group.push({title: elem.title, link: elem._path, date: dateEval, articleCount: 0 })
      } else {
        ret.push({year, group: [{title: elem.title, link: elem._path, date: dateEval, articleCount: 0 }]})
      }
    }
    ret.sort((a, b) => a.year < b.year ? 1 : -1)
    ret.forEach(e => e.group.sort((a, b) => a.date < b.date ? 1 : -1))
    let count = 0
    for (let yearGroup of ret) {
      for (let item of yearGroup.group) {
        item.articleCount = count
        count++
      }
    }
    cachedQuery.value = ret
    return cachedQuery.value
  } else {
    return cachedQuery.value
  }
}

const showCurrentWindow = (): { year: string, group: { title: string, link: string, date: string, articleCount: number }[] }[] => {
  const bottom = blogIndexPage.value * blogIndexShow.value
  const top = bottom + blogIndexShow.value
  let ret: { year: string, group: { title: string, link: string, date: string, articleCount: number }[] }[] = []
  for (let yearGroup of cachedQuery.value) {
    for (let item of yearGroup.group) {
      if (item.articleCount >= bottom && item.articleCount < top) {
        let entry = ret.find(s => s.year === yearGroup.year)
        if (entry !== undefined) {
          entry.group.push(item)
        } else {
          ret.push({
            year: yearGroup.year,
            group: [item]
          })
        }
      }
    }
  }
  return ret
}

const articleCount = () => {
  return cachedQuery.value.map(e => e.group.length).reduce((a, b) => a + b, 0)
}

const blogIndexPage = ref(0)

const blogIndexShow = ref(10)

const pageIndices = (): number[] => {
  const count = Math.ceil(articleCount() / blogIndexShow.value)
  return [...Array(count).keys()]
}

const pageJump = (i: number) => {
  blogIndexPage.value = i
}

const pageIncr = () => {
  if ((blogIndexPage.value + 1) * blogIndexShow.value < articleCount()) {
    blogIndexPage.value ++
  }
}

const pageDecr = () => {
  if (blogIndexPage.value > 0) {
    blogIndexPage.value--
  }
}

const renderMonthDay = (fullDate: string) => {
  return fullDate.slice(5, 10)
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

</style>