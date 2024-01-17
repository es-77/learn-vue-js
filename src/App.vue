<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- <Home name="Emmanuel" lastName="Saleem"/> -->
  <!-- <ButtonEvent /> -->
  <ConditionalRender />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Home from './components/Home.vue'
// import ButtonEvent from './components/ButtonEvent.vue'
import ConditionalRender from './components/ConditionalRender.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // Home
    // ButtonEvent
    ConditionalRender
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
