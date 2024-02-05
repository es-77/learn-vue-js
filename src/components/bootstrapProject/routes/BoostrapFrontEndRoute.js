import { createRouter, createWebHistory } from 'vue-router'

// import LoginForm from './components/login/LoginForm.vue';
// import RegistorForm from './components/registor/RegistorForm.vue';
// import CreatePermission from './components/permission/CreatePermission.vue';
// import { getUser } from './common/LocalStoreage';

import Login from '../components/auths/login/Login.vue'
import Register from '../components/auths/register/Register.vue'
import ForGetPassword from '../components/auths/forgetPassword/ForGetPassword.vue'
let routesArray = [
    {
        name: 'login',
        path: '/login',
        component: Login,
        meta: {
            is_auth: false
        }
    },
    {
        name: 'register',
        path: '/register',
        component: Register,
        meta: {
            is_auth: false
        }
    },
    {
        name: 'forget_password',
        path: '/forget_password',
        component: ForGetPassword,
        meta: {
            is_auth: false
        }
    },
]

const BoostrapFrontEndRoute = createRouter({
    history: createWebHistory(),
    routes: routesArray
})

// BoostrapFrontEndRoute.beforeEach((to, from, next) => {
//     const userPermissions = getUser()?.rolePermission?.permissions || [];
//     const requiredPermission = to.meta.permission_name;

//     console.log(userPermissions.length)
//     if (to.meta.is_auth && userPermissions.includes(requiredPermission)) {
//         next();
//     } else if (to.meta.is_auth) {
//         if (userPermissions.length > 0) {
//             next('/');

//         } else {
//             console.log('User does not have permission for this route.');
//             next('/login');
//         }
//     } else {
//         next();
//     }
// });

export default BoostrapFrontEndRoute