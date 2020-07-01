<template>
  <!-- komponenta Header + logo - na všech pages -->
  <div class="header">
    <router-link to="/">
      <img class="logo" src="assets/img/sailblue.png" alt="SailBlue" href />
    </router-link>

    <ul class="menu">
      <router-link tag="li" to="/page1" active-class="active" exact>Go to Page 1</router-link>
      <router-link tag="li" to="/page2" active-class="active" exact>Go to Page 2</router-link>
    </ul>
  </div>
</template>
<style>
.logo {
  width: 50%;
}
.header {
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 20px 0 40px 0;
}
.menu li {
  display: inline-block;
}
.menu a {
  display: inline-block;
  color: white;
  text-decoration: none;
  padding: 20px 30px;
  font-weight: 500;
}
</style>