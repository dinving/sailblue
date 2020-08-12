
  
<template>
  <div>
    <h1>Mapa marin a jachtařským míst</h1>
    <div id="map">
      <main></main>
    </div>
  </div>
</template>
<script>
export default {
  name: "Maps",

  // mounted() {
  //   let main = document.querySelector("#map");
  //   // Adding a map and choosing the first focus and its zoom size
  //   let center = SMap.Coords.fromWGS84(14.4252625, 50.0833472);
  //   this.map = new SMap(main, center, 7);
  //   this.map.addDefaultLayer(SMap.DEF_BASE).enable();
  //   this.layer = new SMap.Layer.Marker();
  //   this.map.addLayer(this.layer);
  //   this.layer.enable();

  //   window.addEventListener("resize", () => this.map.syncPort());
  // },
  data() {
    return {
      map: null
    };
  },
  // mounted() {
  //   this.initMap();
  //   this.initLayers();
  // },
  //  methods: {
  //   initMap
  mounted() {
    let main = document.querySelector("#map");
    let center = SMap.Coords.fromWGS84(15.8964834, 43.7351949);
    let map = new SMap(main, center, 8);
    map.addDefaultLayer(SMap.DEF_BASE).enable();

    map.addDefaultControls();

    let layer = new SMap.Layer.Marker();
    map.addLayer(layer);
    layer.enable();

    let marker = new SMap.Marker(center);
    layer.addMarker(marker);

    let card = new SMap.Card();
    card.getHeader().innerHTML = "<strong>Nadpis</strong>";
    card.getBody().innerHTML = "Ahoj, já jsem <em>obsah vizitky</em>!";
    card.getFooter().innerHTML = "Toto je zápatí vizitky.";
    card.getContainer().classList.add("karta");
    card.getBody().style.backgroundColor = "#ccc";

    marker.decorate(SMap.Marker.Feature.Card, card);
  }
};
</script>
<style scoped>
main {
  width: 50vw;
  height: 90vh;
  margin-top: 30px;
}
.karta {
  background-color: blueviolet;
}
#map {
  width: 90vw;
  height: 80vh;
  margin: 30px;
}
h1 {
  margin-top: 30px;
  margin-left: 30px;
  margin-bottom: 10px;
}
</style>