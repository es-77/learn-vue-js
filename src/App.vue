<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- <Home name="Emmanuel" lastName="Saleem"/> -->
  <ButtonEvent />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Home from './components/Home.vue'
import ButtonEvent from './components/ButtonEvent.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // Home
    ButtonEvent
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
</style>
