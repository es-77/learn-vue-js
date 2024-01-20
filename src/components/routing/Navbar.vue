<template>
  <div id="app">
    <!-- Navigation Links -->
    <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link> |
    <router-link to="/contact">Contact</router-link> | <router-link to="/UsersLis">User list</router-link> |
    <router-link to="/RequestPost">Request Post</router-link> |
    <router-view></router-view>
  </div>
</template>

<script>
import Home from './Home.vue';
import About from './About.vue';
import Contact from './Contact.vue';
import UsersLis from './UsersLis.vue';
import RequestPost from '../requestPostGetDelete/RequestPost.vue';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Navbar',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Home,
    // eslint-disable-next-line vue/no-unused-components
    About,
    // eslint-disable-next-line vue/no-unused-components
    Contact,
    // eslint-disable-next-line vue/no-unused-components
    UsersLis,
    // eslint-disable-next-line vue/no-unused-components
    RequestPost
  }
};
</script>

<style>
</style>