<template>
  <HeaderMain />
  <router-view />
  <nav>
    <router-link to="/">
      <img src="./assets/home-icon.png" />
    </router-link>
    <router-link to="/spelers">
      <img src="./assets/users-icon.png" />
    </router-link>
    <router-link to="/stats">
      <img src="./assets/stats-icon.png" />
    </router-link>
    <router-link to="/wedstrijden">
      <img src="./assets/calendar-icon.png" />
    </router-link>
  </nav>
</template>

<script>
import HeaderMain from "./components/HeaderMain.vue";

export default {
  components: {
    HeaderMain,
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background: rgb(12, 11, 11);
  max-height: 100vh;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(255, 255, 255);
}

nav {
  position: sticky;
  display: flex;
  overflow: hidden;
  position: fixed;
  bottom: 10px;
  width: 100%;
  justify-content: space-evenly;
}

nav a {
  border: 2px solid white;
  background: black;
  padding: 5px;
}

nav a.router-link-exact-active {
  background: rgb(255, 117, 47);
}
</style>
