<template>
  <div class="container-fluid">
    <Header />
    <router-view></router-view>
  </div>
</template>
<script src="https://api.mapy.cz/loader.js"></script>
<script>
Loader.load();
</script>
<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header
  }
};
</script>

<style lang="css">
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}
</style>