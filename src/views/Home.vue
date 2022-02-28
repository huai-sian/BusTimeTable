<template>
  <div>
    <div class="container-fluid hero">
      <div class="hero__txtgrp">
        <div class="d-flex align-items-center justify-content-center">
          <div class="hero__title text-center">
            <h1 class="hero__title-h1">Taiwan Bus Timetable</h1>
            <h2 class="hero__title-h2">全台公車動態時刻查詢應用服務</h2>
            <router-link class="hero__btn mx-auto" to="/bus">立即體驗</router-link>
          </div>

        </div>
      </div>
      
    </div>
    <div class="container-fluid mt-5 px-0">
      <section class="row text-center">
        <div class="col-12">
          <div>
            <span class="top-titleEn">
              WELCOME
            </span>
            <h2 class="mb-5 top-title">我們的服務</h2>
            <p class="top-txt">提供全台最完善、最即時的公車動態服務，把握重要訊息不漏接!</p>
          </div>
        </div>
        <div class="col-12 section-service">
          <div class="container">
            <div class="row">
              <div class="col-12 col-md-4">
                <div class="icon">
                  <img src="../assets/images/bus-stop.png" alt="">
                </div>
                <h5 class="my-3 section-service__title">公車到站時刻</h5>
                <p class="section-service__txt">提供最即時的公車預期到站時刻，讓您輕鬆掌握資訊。</p>
              </div>
              <div class="col-12 col-md-4">
                <div class="icon">
                  <img src="../assets/images/bus-stop.png" alt="">
                </div>
                <h5 class="my-3 section-service__title">公車站序列表</h5>
                <p class="section-service__txt">提供最完整站序列表，清楚了解目前公車到站位置。</p>
              </div>
              <div class="col-12 col-md-4">
                <div class="icon">
                  <img src="../assets/images/bus-stop.png" alt="">
                </div>
                <h5 class="my-3 section-service__title">公車地圖模式</h5>
                <p class="section-service__txt">提供公車路線地圖瀏覽模式，讓您清楚又明瞭。</p>
              </div>
          </div>
          </div>
          
        </div>
      </section>
      <section style="background-color: #f5f5f5;" class="pt-5">
        <div class="container">
          <div class="text-center">
            <span class="top-titleEn">
              GALLERY
            </span>
            <h2 class="mb-5 top-title">搭乘的美好時刻</h2>
            <p class="top-txt">我們的服務您放心，用心紀錄與您互動的美好時刻!</p>
          </div>
          <div class="col-10 section-imgs mx-auto pb-5">
            <div class="row">
              <div class="col-12 col-md-6 mb-2">
                <div class="section-imgfr" style="background-image: url(./static/home-1.jpg);"></div>
              </div>
              <div class="col-12 col-md-6 mb-2">
                <div class="section-imgfr" style="background-image: url(./static/home-2.jpg);"></div>
              </div>
              <div class="col-12 col-md-6 mb-2">
                <div class="section-imgfr" style="background-image: url(./static/home-3.jpg);"></div>
              </div>
              <div class="col-12 col-md-6 mb-2">
                <div class="section-imgfr" style="background-image: url(./static/home-4.jpg);"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Home',
}
</script>