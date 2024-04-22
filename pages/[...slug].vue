<template>
  <main>
    <CommonHeader />

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

</script>