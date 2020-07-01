<template>
  <!-- komponenta Header + logo - na všech pages -->
  <div class="header">
    <router-link to="/">
      <img class="logo" src="assets/img/sailblue.png" alt="SailBlue" href />
    </router-link>

    <ul class="menu">
      <router-link tag="li" to="/page1" active-class="active" exact>
        <a>Go to Page 1</a>
      </router-link>
      <router-link tag="li" to="/page2" active-class="active" exact>
        <a>Go to Page 2</a>
      </router-link>
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
  text-decoration: none;
  padding: 20px 30px;
  font-weight: 300;
  border-radius: 25px;
  color: #071d49;
}
.menu li.active {
  border-radius: 7px 0 0 7px;
}
.menu a:hover {
  background-color: #e8effd;
}
</style>