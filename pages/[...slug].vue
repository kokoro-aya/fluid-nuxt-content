<template>
  <main>
    <ContentDoc v-slot="{ doc }">
    <PartialCommonHeader>
      <NavBar :class="scrollHeight < 40 ? '' : 'top-nav-collapse' "/>
      <div id="banner" class="banner" parallax="true">
        <div class="full-bg-img">
          <div id="mask" class="mask flex-center">
            <div class="banner-text text-center fade-in-up">
              <div class="h2">
            <span id="subtitle" :data-typed-text="doc.title">
              {{doc.title}}
            </span>
                <span class="typed-cursor typed-cursor--blink" aria-hidden="true">_</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PartialCommonHeader>
    <AsideSpacingContainer>
      <div class="side-col d-none d-lg-block col-lg-2" style="padding-top: 0px">
      </div>

        <div class="col-lg-8 nopadding-x-md">
          <div class="container nopadding-x-md" id="board-ctn">
            <div id="board">
              <article class="post-content mx-auto">
                <h1 id="seo-header">{{doc.title}}</h1>
                <div class="markdown-body">
                  <ContentRenderer :value="doc" />
                </div>
                <hr>
                <!-- TODO: implement comment section -->
              </article>
            </div>
          </div>
        </div>

        <div class="side-col d-none d-lg-block col-lg-2" style="padding-top: 0px">
        </div>
      </AsideSpacingContainer>
    </ContentDoc>
  </main>
</template>
<script setup lang="ts">
import CommonHeader from "~/views/header/CommonHeader.vue";
import AsideSpacingContainer from "~/views/AsideSpacingContainer.vue";
import PartialCommonHeader from "~/views/header/PartialCommonHeader.vue";
import NavBar from "~/views/header/NavBar.vue";
import FullCommonHeader from "~/views/header/FullCommonHeader.vue";
import {onMounted} from "#imports";


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

.container {
  margin-top: -4rem;
}


</style>