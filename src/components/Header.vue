<template>
  <!-- komponenta Header + logo - na všech pages -->
  <div class="header">
    <router-link to="/">
      <img class="logo" src="assets/img/sailblue.png" alt="SailBlue" href />
    </router-link>

    <ul class="menu">
      <router-link tag="li" to="/page1" active-class="active" exact>
        <a>Page 1</a>
      </router-link>
      <router-link tag="li" to="/page2" active-class="active" exact>
        <a>Page 2</a>
      </router-link>
      <router-link tag="li" to="/maps" active-class="active" exact>
        <a>Mapa</a>
      </router-link>
      <router-link tag="li" to="/test" active-class="active" exact>
        <a>Otestuj se</a>
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
  background-color: white;
  border-bottom: solid 30px #071d49;
}
.menu li {
  display: inline-block;
  font-size: 20px;
}
.menu a {
  display: inline-block;
  text-decoration: none;
  padding: 15px 15px;
  font-weight: 600;
  color: #071d49;
  font-size: 20px;
  margin-left: 40px;
}
.menu li.active {
  border-radius: 7px 0 0 7px;
}
.menu a:hover {
  border-top: solid 3px #071d49;
  text-decoration: none;

  opacity: 0.6;
}
</style>