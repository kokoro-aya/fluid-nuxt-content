<template>
  <nav id="navbar" class="navbar fixed-top navbar-expand-lg scrolling-navbar"
       :class="collapsed ? '' : 'navbar-col-show'"
  >
    <div class="container">
      <NuxtLink class="navbar-brand"
                to="/"><strong>Forgotten Land</strong></NuxtLink>
      <div :class="collapsed ? '' : 'collapsed'" id="navbar-toggle-btn" class="navbar-toggler"
           @click="collapsed = !collapsed"
      >
        <div :class="collapsed ? '' : 'open'" class="animated-icon"><span/><span/><span/></div>
      </div>

      <div :class="collapsed ? '' : 'show'" class="navbar-collapse collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto text-center">

          <li class="nav-item">
            <NuxtLink class="nav-link"
                      to="/blog">
              <i class="iconfont"><Icon name="ic:round-house" /></i>
              Home</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link"
                      to="/archives">
              <i class="iconfont"><Icon name="ri:archive-fill" /></i>
              Archives</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link"
                      to="/portfolio">
              <i class="iconfont"><Icon name="heroicons:puzzle-piece" /></i>
              Portfolio</NuxtLink>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" @click="dropdownCollapsed = !dropdownCollapsed">Collections</a>
            <div :class="dropdownCollapsed ? '': 'show'" class="dropdown-menu dropdown-collapse">
              <NuxtLink class="dropdown-item"
                        to="/categories">
                <i class="iconfont"><Icon name="tabler:category-2" /></i>
                Categories</NuxtLink>
              <NuxtLink class="dropdown-item"
                        to="/tags">
                <i class="iconfont"><Icon name="mdi:tag-multiple-outline" /></i>
                Tags</NuxtLink>
              <NuxtLink class="dropdown-item"
                        to="/privacy">
                <i class="iconfont"><Icon name="ic:outline-privacy-tip" /></i>
                Privacy</NuxtLink>
              <NuxtLink class="dropdown-item"
                        to="/licences">
                <i class="iconfont"><Icon name="tabler:copyright" /></i>
                Licences</NuxtLink>
            </div>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link"
                      to="/friends">
              <i class="iconfont"><Icon name="ri:links-fill" /></i>
              Friends</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link"
                      to="/about">
              <i class="iconfont"><Icon name="material-symbols:person" /></i>
              About</NuxtLink>
          </li>
          <li class="nav-item">
            <a class="nav-link"><i><Icon name="ic:outline-search" /></i></a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" @click="langDropdownCollapsed = !langDropdownCollapsed">
              <i><Icon name="ion:language" /></i>
            </a>
            <div :class="langDropdownCollapsed ? '': 'show'" class="dropdown-menu dropdown-collapse">
              <a class="dropdown-item">简体中文</a>
              <a class="dropdown-item">正體中文</a>
              <a class="dropdown-item">English</a>
            </div>
          </li>
          <li class="nav-item" id="color-toggle-btn">
            <a class="nav-link">
              <i><Icon name="material-symbols:sunny" /></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">

let collapsed = ref(true)

let dropdownCollapsed = ref(true)

let langDropdownCollapsed = ref(true)

</script>

<style scoped>

#header-inner {
  height: 100vh;
}

</style>