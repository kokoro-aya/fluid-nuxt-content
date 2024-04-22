<template>
  <main>
    <CommonHeader />

    <ContentDoc v-slot="{ doc }">
      <div class="container-fluid nopadding-x">
        <div class="row nomargin-x">
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
        </div>

      </div>

    </ContentDoc>
  </main>
</template>
<script setup lang="ts">
import CommonHeader from "~/views/header/CommonHeader.vue";

</script>