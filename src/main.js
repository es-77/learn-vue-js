import { createApp } from 'vue';
import App from './App.vue';
// import routes from './components/routingVueJS3/routes';
import { createPinia } from 'pinia'
// import uppercase from './components/customDirectives/uppercase.js'
// import canDirective from './components/customDirectives/can.js'
import { permissionAccess } from './components/customDirectives/permissionAccess.js'
import { uppercase } from './components/customDirectives/uppercase.js'
import FrontendRoutes from './components/projectSetup/FrontendRoutes';
// import capitalizeDirective from './components/customDirectives/capitalizeDirective.js'
const pinia = createPinia();
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
app
    .use(pinia)
    // .use(routes)
    .use(FrontendRoutes)
    .directive('can', permissionAccess) // Register the directive
    .directive('capitalize-text', uppercase) // Register the directive
app.mount('#app');
// .directive('can', (element, binding) => {
//     console.log('element,binding', element, binding)
// })

// app.directive('custom-font-size', fontSizeDirective);
// app.directive('capitalize-text', capitalizeDirective);
// app.mount('#app');
// createApp(App).use(router).mount('#app');
