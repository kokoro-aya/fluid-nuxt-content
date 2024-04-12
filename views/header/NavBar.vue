<template>
  <nav id="navbar" class="navbar fixed-top navbar-expand-lg scrolling-navbar top-nav-collapse">
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
                      to="/">Home</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link"
                      to="/archives">Archives</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link"
                      to="/portfolio">Portfolio</NuxtLink>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" @click="dropdownCollapsed = !dropdownCollapsed">Collections</a>
            <div :class="dropdownCollapsed ? '': 'show'" class="dropdown-menu dropdown-collapse">
              <NuxtLink class="dropdown-item"
                        to="/categories">Categories</NuxtLink>
              <NuxtLink class="dropdown-item"
                        to="/tags">Tags</NuxtLink>
              <NuxtLink class="dropdown-item"
                        to="/privacy">Privacy</NuxtLink>
              <NuxtLink class="dropdown-item"
                        to="/licences">Licences</NuxtLink>
            </div>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link"
                      to="/friends">Friends</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link"
                      to="/about">About</NuxtLink>
          </li>
          <li class="nav-item">
            <a class="nav-link">Search</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" @click="langDropdownCollapsed = !langDropdownCollapsed">Lang</a>
            <div :class="langDropdownCollapsed ? '': 'show'" class="dropdown-menu dropdown-collapse">
              <a class="dropdown-item">简体中文</a>
              <a class="dropdown-item">正體中文</a>
              <a class="dropdown-item">English</a>
            </div>
          </li>
          <li class="nav-item" id="color-toggle-btn">
            <a class="nav-link">Dark</a>
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