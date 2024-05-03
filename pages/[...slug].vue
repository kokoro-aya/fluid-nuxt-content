<template>
  <main>
    <PartialCommonHeader>
      <div id="banner" class="banner" parallax="true">
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
    <AsideSpacingContainer>
      <div class="side-col d-none d-lg-block col-lg-2" style="padding-top: 0px">
      </div>

      <ContentDoc v-slot="{ doc }">
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
      </ContentDoc>
    </AsideSpacingContainer>
  </main>
</template>
<script setup lang="ts">
import CommonHeader from "~/views/header/CommonHeader.vue";
import AsideSpacingContainer from "~/views/AsideSpacingContainer.vue";
import PartialCommonHeader from "~/views/header/PartialCommonHeader.vue";

</script>

<style scoped>

#banner {
  background: url("/img/default.jpg") center center / cover no-repeat;
}

.container {
  margin-top: -4rem;
}


</style>