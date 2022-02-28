<template>
  <div id="app">
    <Navbar />
    <div class="page-content">
        <router-view></router-view>
    </div>
    <div class="goTop__mb d-block d-md-none" @click="scrollTop">
      <p>Scroll to top<i class="fas fa-arrow-to-top ms-2"></i></p>
    </div>
    <Footer />
    <div class="goTop" @click="scrollTop">
      <i class="fas fa-arrow-to-top"></i>
    </div>
  </div>
</template>

<script>

import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const scrollTop = document.querySelector('.goTop')
      if(window.scrollY > 300) {
        scrollTop.classList.add('show')
      } else {
        scrollTop.classList.remove('show')
      }
    },
    scrollTop() {
      window.scrollTo({top: 0, behavior: 'smooth'})
    }
  }
}
</script>

<style lang="scss">
@import "./assets/all";
#app {
  overflow-x: hidden;
}
</style>
