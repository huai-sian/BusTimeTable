<template>
  <div id="app">
    <Navbar />
    <div class="page-content">
        <BusDynamic />
    </div>
    <Footer />
    <div class="goTop" @click="scrollTop">
      <i class="fas fa-arrow-to-top"></i>
    </div>
  </div>
</template>

<script>

import BusDynamic from './components/busDynamic.vue'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    BusDynamic,
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
</style>
