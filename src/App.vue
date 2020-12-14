<template>
  <body>
    <div class="nav-bar">

      <div class="dropdown">
        <router-link :to="{ path: `/homepage`}" >Home</router-link>
        <router-link :to="{ path: `/customer-support`}" >Customer Support</router-link>
        <router-link :to="{ path: `/about-us`}" >About Us</router-link>
      </div>

    </div>
    <div id="app">
      <img alt="Vue logo" src="./assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
  </body>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.nav-bar {
  background: linear-gradient(-90deg, #ff0000, #ffa500, #84CF6A, #16C0B0, #ee82ee);
  height: 60px;
  margin-bottom: 20px;
  overflow: hidden;
  font-family: Arial, Helvetica, sans-serif;
}

.nav-bar a {
  float: left;
  font-size: 16px;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
</style>
