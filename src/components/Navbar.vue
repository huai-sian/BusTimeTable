<template>
  <div>
    <div class="container bg-transparent" >
      <nav class="navbar navbar-expand-lg pt-4 pb-4 fixed-top" style="background-color: rgba(2,11,18,.8);">
          <div class="container-fluid">
            <router-link class="navbar-brand text-white" to="/"><i class="fas fa-bus-alt me-2"></i>Taiwan Bus</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <i class="fas fa-bars text-white"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item my-2">
                  <router-link class="nav-link" aria-current="page" to="/">首頁</router-link>
                </li>
                <li class="nav-item my-2">
                  <router-link class="nav-link" aria-current="page" to="/bus">公車動態</router-link>
                </li>
                <li class="nav-item my-2">
                  <a class="nav-link" aria-current="page" href="">常見問題</a>
                </li>
              </ul>
            </div>
          </div>
      </nav>
    </div>
  </div>
</template>