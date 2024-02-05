import { createApp } from 'vue';
import App from './App.vue';
// import routes from './components/routingVueJS3/routes';
import { createPinia } from 'pinia'
// import uppercase from './components/customDirectives/uppercase.js'
// import canDirective from './components/customDirectives/can.js'
import { permissionAccess } from './components/customDirectives/permissionAccess.js'
import { uppercase } from './components/customDirectives/uppercase.js'
import FrontendRoutes from './components/projectSetup/FrontendRoutes';
// import { usePermissionStore } from './components/projectSetup/projectStore/PermissionStore';
import { hasPermission } from './components/projectSetup/directives/HasPermission';
import 'vue-toast-notification/dist/theme-bootstrap.css';
import ToastPlugin from 'vue-toast-notification';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

// import capitalizeDirective from './components/customDirectives/capitalizeDirective.js'
const pinia = createPinia();
// const permissionStore = usePermissionStore(); // Create an instance of the store
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

console.log('FrontendRoutes', FrontendRoutes)
const app = createApp(App);
app
    .use(pinia)
    // .use(routes)
    .use(FrontendRoutes)
    .directive('capitalize-text', uppercase) // Register the directive
    .directive('hasPermission', hasPermission)
    .directive('can', permissionAccess) // Register the directive
    // .provide('permissionStore', permissionStore) // Provide the store first
    .use(ToastPlugin)
    .mount('#app');


// app.provide('permissionStore', permissionStore); // Provide the store instance
// Provide the store instance to the app
// app.mount('#app');
// .directive('can', (element, binding) => {
//     console.log('element,binding', element, binding)
// })

// app.directive('custom-font-size', fontSizeDirective);
// app.directive('capitalize-text', capitalizeDirective);
// app.mount('#app');
// createApp(App).use(router).mount('#app');



// import { createApp } from 'vue';
// import App from './App.vue';
// import { createPinia } from 'pinia'
// import { permissionAccess } from './components/customDirectives/permissionAccess.js'
// import { uppercase } from './components/customDirectives/uppercase.js'
// import FrontendRoutes from './components/projectSetup/FrontendRoutes';
// const pinia = createPinia();

// const app = createApp(App);
// app
//     .use(pinia)
//     .use(FrontendRoutes)
//     .directive('can', permissionAccess) // Register the directive
//     .directive('capitalize-text', uppercase) // Register the directive
// app.mount('#app');
