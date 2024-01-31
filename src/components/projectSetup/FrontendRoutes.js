import { createRouter, createWebHistory } from 'vue-router'

import LoginForm from './components/login/LoginForm.vue';
import RegistorForm from './components/registor/RegistorForm.vue';
import Dashboard from './components/dashboard/Dashboard.vue';
import User from './components/user/User.vue';
import Role from './components/role/Role.vue';
import Permission from './components/permission/Permission.vue';
// import CreatePermission from './components/permission/CreatePermission.vue';

const routesArray = [
    {
        name: 'dashboard',
        path: '/',
        component: Dashboard
    },
    {
        name: 'user',
        path: '/user',
        component: User
    },
    {
        name: 'role',
        path: '/role',
        component: Role
    },
    {
        name: 'permission',
        path: '/permission',
        component: Permission
    },
    // {
    //     name: 'create_permission',
    //     path: '/create_permission',
    //     component: CreatePermission
    // },
    {
        name: 'login',
        path: '/login',
        component: LoginForm
    },
    {
        name: 'registor',
        path: '/registor',
        component: RegistorForm
    },
]

const FrontendRoutes = createRouter({
    history: createWebHistory(),
    routes: routesArray
})

export default FrontendRoutes