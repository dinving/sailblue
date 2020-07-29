<template>
<div>
  <body>
    <Header />
    <router-view></router-view>
    <!-- <img src="assets/img/more_m.jpg" /> -->
    <!-- <div class="contejner">
      <div class="lev">llllll</div>
      <div class="prav">pppppp</div>
    </div>-->
  </body>
</div>
</template>

<script>
import Carousel from "./Carousel.vue";
export default {
  name: "Homepage",
  components: {
    Carousel
  }
};
</script>

<style >
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}
body {
  background: url(img/more.jpg);
}
img {
  /* background: url(img/plachetnice-na-mori.jpg); */
}
.contejner {
  display: flex;
  justify-content: center;
}
</style>