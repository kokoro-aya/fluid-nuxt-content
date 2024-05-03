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
        <div class="text-center tagcloud"
             >
          <a v-for="group in groupByTags(list)" :key="group.key"
             :href="'/tags/' +group.key"
             :style="'font-size: ' + renderFontSize(group.count) + '; color: ' + renderColor(group.count) ">
          {{group.key}}</a>
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

const pageName = "Tags"

const cachedQuery: Ref<{ key: string, count: number }[]> = ref([])

const groupByTags = (list: any[]): { key: string, count: number,  }[] =>   {
  if (cachedQuery.value.length === 0) {
    let ret: { key: string, count: number }[] = []
    for (let elem of list) {
      let elemTags = toRaw(elem.tags) ?? []
      elemTags.forEach((t: string) => {
        let entry = ret.find(s => s.key === t)
        if (entry !== undefined) {
          entry.count ++
        } else {
          ret.push({ key: t, count: 1 })
        }
      })
    }
    cachedQuery.value = ret.map(v => ({
      v, sort: Math.random()
    }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ v }) => v)
    return ret
  } else {
    return cachedQuery.value
  }
}

const renderFontSize = (n: number) => {
  if (n <= 1) {
    return "15px"
  } else if (n <= 2) {
    return "17.14px"
  } else if (n <= 3) {
    return "19.29px"
  } else if (n <= 4) {
    return "21.43px"
  } else if (n == 5) {
    return "23.57px"
  } else if (n == 6) {
    return "25.71px"
  } else if (n <= 8) {
    return "27.85px"
  } else {
    return "30px"
  }
}

const renderColor = (n: number) => {
  if (n <= 2) {
    return "#bbe"
  } else if (n <= 5) {
    return "#a8b2e6"
  } else if (n <= 9) {
    return "#94a8de"
  } else {
    return "#337ab7"
  }
}
</script>

<style scoped>

#banner {
  background: url("/img/default.jpg") center center / cover no-repeat;
}

</style>