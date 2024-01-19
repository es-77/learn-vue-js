<template>
  <div class="parent">
    <div class="div1"><NavBar /></div>
    <div class="div2"><SideBar /></div>
    <div class="div3"><Content /></div>
    <div class="div4"><Footer /></div>
  </div>
</template>

<script>
import NavBar from './NavBar.vue';
import SideBar from './SideBar.vue';
import Footer from './Footer.vue';
import Content from './Content.vue';
export default {
  name: 'MainLayOut',
  components: {
    NavBar,
    SideBar,
    Footer,
    Content
  }
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}

.parent {
  display: grid;
  grid-template-columns: 8rem repeat(3, 1fr);
  grid-template-rows: 6vh 1fr 6vh;
  grid-column-gap: 8px;
  grid-row-gap: 8px;
}

.div1 {
  grid-area: 1 / 1 / 2 / 5;
}
.div2 {
  grid-area: 2 / 1 / 3 / 2;
}
.div3 {
  grid-area: 2 / 2 / 3 / 5;
}
.div4 {
  grid-area: 3 / 1 / 4 / 5;
}

.div1,
.div3,
.div4 {
  border: 1px solid black;
}
.div2 {
  border: 1px solid black;
  height: 84vh;
}
</style>
