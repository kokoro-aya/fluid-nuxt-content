<template>
  <main>
    <PartialCommonHeader >
      <NavBar :class="scrollHeight < 40 ? '' : 'top-nav-collapse' "/>
      <div id="banner" class="banner" parallax="true"
           :style="'transform: translate3d(0px, ' + offsetTop + 'px, 0px);'"
      >
        <div class="full-bg-img">
          <div id="mask" class="mask flex-center">
            <div class="banner-text text-center fade-in-up">
              <div class="h2">
            <span id="subtitle" data-typed-text="Just want to explore faraway landscapes">
              Just want to explore faraway landscapes
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

    <ContentDoc v-slot="{ doc }">
      <div class="container-fluid nopadding-x">
        <div class="row nomargin-x">
          <div class="side-col d-none d-lg-block col-lg-2" :style="'padding-top: ' + offsetTop + 'px'">
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
                  <div>
                    <div class="post-metas my-3">
                      <div class="post-meta mr-3 d-flex align-items-center">
                        <i class="iconfont">
                          <Icon name="tabler:category-2" />
                        </i>
                        <span class="category-chains">
                          <span class="category-chain">
                            <a href="/categories/">{{ doc.categories[0] }}</a>
                          </span>
                        </span>
                      </div>
                      <div class="post-meta">
                        <i class="iconfont">
                          <Icon name="mdi:tag-multiple-outline" />
                        </i>
                          <a v-for="tag in doc.tags"
                             :href="'/tags/' + tag">
                            #{{tag}}
                          </a>
                      </div>
                    </div>
                    <LicenseBox :title="doc.title" :path="doc._path" :date="doc.date" />
                    <!-- TODO: prev/next cannot be currently implemented -->
                  </div>
                  <!-- TODO: implement comment section -->
                </article>
              </div>
            </div>
          </div>

          <div class="side-col d-none d-lg-block col-lg-2" :style="'padding-top: ' + offsetTop + 'px'">
          </div>
        </div>

      </div>
      <Footer />

    </ContentDoc>
  </main>
</template>
<script setup lang="ts">
import CommonHeader from "~/views/header/CommonHeader.vue";
import Footer from "~/views/Footer.vue";
import {onMounted} from "#imports";
import PartialCommonHeader from "~/views/header/PartialCommonHeader.vue";
import NavBar from "~/views/header/NavBar.vue";
import LicenseBox from "~/views/LicenseBox.vue";


let scrollHeight = ref(0)

// TODO this offset animation is lagging in current implementation, postponed
const offsetTop = computed(() => {
  return 0
})

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

span .iconfont {
  padding: 3px;
}

/* TODO: fix this CC icon to fit the window size */

#cc-large-icon {
  position: absolute;
  top: 0;
  right: 0;
}

#cc-large-icon i {
  display: block;
  height: 200px;
  width: 200px;
  line-height: 1;
  opacity: 0.1;
  position: relative;
  z-index: -1;
}

</style>