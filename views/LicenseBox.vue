<template>
  <div class="license-box my-3">
    <div class="license-title">
      <div>{{ title }}</div>
      <div>https://next.inori.moe{{ path }}</div>
    </div>
    <div class="license-meta">
      <div class="license-meta-item">
        <div>Author</div>
        <div>inori</div>
      </div>
      <div class="license-meta-item license-meta-date">
        <div>Published</div>
        <div>{{ renderDate(date) }}</div>
      </div>
      <div class="license-meta-item">
        <div>License</div>
        <div>
          <a class="print-no-link" target="_blank" href="https://creativecommons.org/licenses/by-nc-nd/4.0/">
                              <span class="hint--top hint--rounded" aria-label="BY - 署名">
                                <i class="iconfont icon-by">
                                  <Icon name="cib:creative-commons-by" />
                                </i>
                              </span>
          </a>
          <a class="print-no-link" target="_blank" href="https://creativecommons.org/licenses/by-nc-nd/4.0/">
                              <span class="hint--top hint--rounded" aria-label="NC - 非商业使用">
                                <i class="iconfont icon-nc">
                                  <Icon name="cib:creative-commons-nc" />
                                </i>
                              </span>
          </a>
          <a class="print-no-link" target="_blank" href="https://creativecommons.org/licenses/by-nc-nd/4.0/">
                              <span class="hint--top hint--rounded" aria-label="ND - 禁止演绎">
                                <i class="iconfont icon-nd">
                                  <Icon name="cib:creative-commons-nd" />
                                </i>
                              </span>
          </a>
        </div>
      </div>
    </div>
    <div id="cc-large-icon">
      <i>
        <Icon name="cib:creative-commons"
              size="200px"
        />
      </i>
    </div>
  </div>
</template>

<script setup lang="ts">

defineProps<{
  title: string,
  path: string,
  date: string
}>()

const renderDate = (date: string) => {
  const dateParts = date.split("T")[0].split('-')
  return `${dateParts[0]}年${dateParts[1]}月${dateParts[2]}日`
}

</script>

<style scoped>

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