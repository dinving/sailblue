<template>
  <!-- komponenta Header + logo - na všech pages -->
  <div class="header">
    <router-link to="/">
      <img class="logo" src="assets/img/sailblue-white.png" alt="SailBlue" href />
    </router-link>

    <ul class="menu">
      <router-link tag="li" to="/page1" active-class="active" exact>
        <a>O projektu</a>
      </router-link>
      <router-link tag="li" to="/page2" active-class="active" exact>
        <a>Otestuj se</a>
      </router-link>
      <router-link tag="li" to="/maps" active-class="active" exact>
        <a>Mapa</a>
      </router-link>
    </ul>
  </div>
</template>

<style scoped>
.logo {
  padding-left: 30px;
  max-width: 40%;
}
.header {
  display: flex;
  justify-content: start;
  align-items: center;
  margin: -20px;
  padding: 30px 0 0 30px;
  background-color: #071d49;
  /* border-bottom: solid 30px white; */
  position: sticky;
}
.menu li {
  display: inline-block;
  font-size: 20px;
  padding: 0 10px 0 10px;
}
.menu a {
  display: inline-block;
  text-decoration: none;

  font-weight: 600;
  color: white;
  font-size: 20px;
  margin-left: 150px;
  padding: 0 10px 0 10px;
}
.menu li.active {
  border-radius: 7px 0 0 7px;
}
.menu a:hover {
  border-top: solid 3px white;
  text-decoration: none;
  color: white;
  padding: 10px;
}
</style>