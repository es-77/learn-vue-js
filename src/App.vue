<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- <Home name="Emmanuel" lastName="Saleem"/> -->
  <!-- <ButtonEvent /> -->
  <!-- <ConditionalRender /> -->
  <!-- <ForLoop /> -->
  <!-- <MainLayOut /> -->
  <!-- <Styling /> -->
  <!-- <InputDataBinding /> -->
  <!-- <PropsDataPassing /> -->
  <ParentComponent />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Home from './components/Home.vue'
// import ButtonEvent from './components/ButtonEvent.vue'
// import ConditionalRender from './components/ConditionalRender.vue'
// import ForLoop from './components/ForLoop.vue';
// import MainLayOut from './components/layout/MainLayOut.vue';
// import Styling from './components/Styling.vue';
// import InputDataBinding from './components/InputDataBinding.vue';
// import PropsDataPassing from './components/props/PropsDataPassing.vue';
import ParentComponent from './components/props/propschildtoparentcomponent/ParentComponent.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // Home
    // ButtonEvent
    // ConditionalRender
    // ForLoop
    // MainLayOut
    // Styling
    // InputDataBinding
    // PropsDataPassing
    ParentComponent
  }
};
</script>