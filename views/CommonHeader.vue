<script setup lang="ts">

</script>

<template>
  <header>
    <div class="header-inner h-screen">
      <nav id="navbar" class="navbar fixed-top navbar-expand-lg scrolling-navbar navbar-dark navbar-col-show">
        <div class="container">
          <div class="navbar-brand">
          <NuxtLink to="/">Forgotten Land</NuxtLink>
        </div>
          <button id="navbar-toggle-btn" class="navbar-toggler" type="button">Button</button>
          <div class="navbar-collapse collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto text-center">

              <NuxtLink class="nav-item"
                        to="/">Home</NuxtLink>
              <NuxtLink class="nav-item"
                        to="/archives">Archives</NuxtLink>
              <NuxtLink class="nav-item"
                        to="/portfolio">Portfolio</NuxtLink>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle"
                >Collections</a>
                <div class="dropdown-menu">
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
              <NuxtLink class="nav-item"
                        to="/friends">Friends</NuxtLink>
              <NuxtLink class="nav-item"
                        to="/about">About</NuxtLink>
              <li class="nav-item">
                Search
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle">Lang</a>
                <div class="dropdown-menu">
                  <a class="dropdown-item">简体中文</a>
                  <a class="dropdown-item">English</a>
                </div>
              </li>
              <li class="nav-item">
                Dark
              </li>

            </ul>


          </div>
        </div>
      </nav>
    </div>

  </header>

  <hr>

</template>

<style scoped>



</style>