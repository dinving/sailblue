<template>
<div>
  <Header />
  <router-view></router-view>
  <!-- <img src="assets/img/more_m.jpg" /> -->
  <body>
    <div class="contejner">
      <div class="lev">
        <div class="slogan">
          <p>Připojte se k jachtařům z&nbsp;yachting°com. Společně můžeme zachovat oceány modré a pláže čisté. Odpovědné jachtaře podpoříme.</p>
          <p>Sail Blue!</p>
        </div>
        <br />
        <button class="button">
          <a href="/Page1">Zjistit víc</a>
        </button>
      </div>
      <div class="prav">
        <h2>Co je Sail Blue?</h2>Neformální iniciativa podporujici odpovědný přístup, ochranu pobřeží i podmořského světa.
        <br />
        <br />
        <ul>
          <li>Podporujeme všechny jachtaře hrdiny, kteří při svých plavbách šetří životní prostředí a chrání oceán</li>
          <li>Šíříme osvětu, inspirujeme a nadšence propojujeme</li>
          <li>Monitorujeme problematická místa i pozitivní příklady</li>
          <li>Organizujeme společné ekologicky odpovědné plavby a akce</li>
        </ul>
      </div>
    </div>
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

<style scoped>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  background: url(img/more.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  margin-left: -15px;
  margin-right: -15px;
}
img {
  /* background: url(img/plachetnice-na-mori.jpg); */
}
.contejner {
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: baseline;
}
.lev {
  width: 60%;
  /* background-color: white; */
  margin: 7%;
  padding: 30px;
  border-radius: 10px 0 0 10px;
}
.prav {
  width: 40%;
  background-color: #071d49;
  margin: 7%;
  padding: 15px 30px 15px 30px;
  border-radius: 0 10px 10px 0;
  position: relative;
  color: white;
}
.slogan {
  color: white;
  font-size: 33px;
  /* font-weight: bold; */
  background-color: #071d4942;
  padding: 15px 30px 15px 30px;
  border-radius: 10px;
}
.button {
  background-color: white;
  border: white;
  border-radius: 10px;
  color: #071d49;
  text-decoration: none;
  padding: 10px 20px 10px 20px;
  font-weight: 700;
  font-size: 25px;
  margin-left: 10px;
  margin-top: 30px;
  position: absolute;
  left: 38%;
}
.button a:hover {
  /* border-radius: 10px;
  background-color: white;
  border: white; */
  color: #071d49a1;
  text-decoration: none;
}

@media (max-width: 760px) {
  .contejner {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: baseline;
  }
  .prav {
    width: 90%;
    background-color: #071d49;
    margin: 7%;
    padding: 15px;
    border-radius: 0 10px 10px 0;
    font-size: 25px;
    color: white;
  }
  .lev {
    width: 90%;
    /* background-color: white; */
    margin: 7%;
    padding: 30px;
    border-radius: 10px 0 0 10px;
  }
}
/* .button a {
  text-decoration: none;
  color: white;
} */
</style>