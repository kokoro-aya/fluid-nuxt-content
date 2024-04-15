<script setup lang="ts">

</script>

<template>
  <div class="container nopadding-x-md">
    <div id="board" >
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-10 m-auto">
            <slot>

            </slot>
          </div>
        </div>
      </div>
    </div>
  </div>
  <a id="scroll-top-button" href="#" role="button">
    <i class="iconfont icon-arrowup"></i>
  </a>
  <!-- TODO: Search bar -->
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

<style scoped>

#board {
  margin-top: 0;
}

#scroll-top-button {
  bottom: 20px;
  right: 20px;
}

</style>