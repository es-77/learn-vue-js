import { createApp } from 'vue';
import App from './App.vue';
import routes from './components/routingVueJS3/routes';
// import { createRouter, createWebHistory } from 'vue-router';
// import Home from './components/routing/Home.vue';
// import About from './components/routing/About.vue';
// import Contact from './components/routing/Contact.vue';
// import UsersLis from './components/routing/UsersLis.vue';
// import PageNotFound from './components/routing/PageNotFound.vue';
// import SingleUser from './components/routing/SingleUser.vue';
// import RequestPost from './components/requestPostGetDelete/RequestPost.vue';
// import { capitalizeDirective, fontSizeDirective } from './components/customDirectives';


// Register the custom directives globally
// App.directive('custom-font-size', fontSizeDirective);
// App.directive('capitalize-text', capitalizeDirective);
// const routes = [
//     { path: '/', component: Home },
//     { path: '/about', component: About },
//     { path: '/contact', component: Contact },
//     { path: '/UsersLis', component: UsersLis },
//     { path: '/RequestPost', component: RequestPost },
//     { path: '/SingleUser/:id', component: SingleUser },
//     // { path: '*', component: PageNotFound },
// ];

// const router = createRouter({
//     history: createWebHistory(),
//     routes,
// });

const app = createApp(App);

// app.directive('custom-font-size', fontSizeDirective);
// app.directive('capitalize-text', capitalizeDirective);
// app.mount('#app');
app.use(routes).mount('#app');
// createApp(App).use(router).mount('#app');
