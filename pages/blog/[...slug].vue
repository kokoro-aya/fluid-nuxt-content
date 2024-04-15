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
                  <div>
                    <div class="post-metas my-3">
                      <div class="post-meta mr-3 d-flex align-items-center">
                        <i class="iconfont icon-category"></i>
                        <span class="category-chains">
                          <span class="category-chain">
                            <a href="/categories/">{{ doc.categories[0] }}</a>
                          </span>
                        </span>
                      </div>
                      <div class="post-meta">
                        <i class="iconfont icon-tags"></i>
                          <a v-for="tag in doc.tags"
                             :href="'/tags/' + tag">
                            #{{tag}}
                          </a>
                      </div>
                    </div>
                    <div class="license-box my-3">
                      <div class="license-title">
                        <div>{{doc.title}}</div>
                        <div>https://next.inori.moe/{{doc._path}}</div>
                      </div>
                      <div class="license-meta">
                        <div class="license-meta-item">
                          <div>Author</div>
                          <div>inori</div>
                        </div>
                        <div class="license-meta-item license-meta-date">
                          <div>Published</div>
                          <div>{{ renderDate(doc.date) }}</div>
                        </div>
                        <div class="license-meta-item">
                          <div>License</div>
                          <div>
                            <a class="print-no-link" target="_blank" href="https://creativecommons.org/licenses/by-nc-nd/4.0/">
                              <span class="hint--top hint--rounded" aria-label="BY - 署名">
                                <i class="iconfont icon-by"></i>
                              </span>
                            </a>
                            <a class="print-no-link" target="_blank" href="https://creativecommons.org/licenses/by-nc-nd/4.0/">
                              <span class="hint--top hint--rounded" aria-label="NC - 非商业使用">
                                <i class="iconfont icon-nc"></i>
                              </span>
                            </a>
                            <a class="print-no-link" target="_blank" href="https://creativecommons.org/licenses/by-nc-nd/4.0/">
                              <span class="hint--top hint--rounded" aria-label="ND - 禁止演绎">
                                <i class="iconfont icon-nd"></i>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="license-icon iconfont"></div>
                    </div>
                    <!-- TODO: prev/next cannot be currently implemented -->
                  </div>
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

const renderDate = (date: string) => {
  const dateParts = date.split("T")[0].split('-')
  return `${dateParts[0]}年${dateParts[1]}月${dateParts[2]}日`
}
</script>