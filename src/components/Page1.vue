<template>
  <div>
    <h1>Page 1</h1>
    <Maps />
    <Card />
  </div>
</template>
  <script>
import Maps from "./Maps.vue";
import Carousel from "./Carousel.vue";
import Card from "./Card.vue";

export default {
  name: "Page1",
  components: {
    Maps,
    Carousel,
    Card
  }
};
</script>
