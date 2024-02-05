import { createRouter, createWebHistory } from 'vue-router'

import LoginForm from './components/login/LoginForm.vue';
import RegistorForm from './components/registor/RegistorForm.vue';
import Dashboard from './components/dashboard/Dashboard.vue';
import User from './components/user/User.vue';
import Role from './components/role/Role.vue';
import Permission from './components/permission/Permission.vue';
// import CreatePermission from './components/permission/CreatePermission.vue';
import UserAsignRole from './components/userAsignRole/UserAsignRole.vue';
import RoleAssignPermission from './components/roleAssignPermission/RoleAssignPermission.vue';
// import { getUser } from './common/LocalStoreage';
import { dashbordEnums, permissionEnums, roleEnums, userEnums } from './common/PermissionEnums';

let routesArray = [
    {
        name: 'dashboard',
        path: '/',
        component: Dashboard,
        meta: {
            permission_name: dashbordEnums.DASHBORD_VIEW,
            is_auth: true
        }
    },
    {
        name: 'user',
        path: '/user',
        component: User,
        meta: {
            permission_name: userEnums.USER_VIEW,
            is_auth: true
        }
    },
    {
        name: 'role',
        path: '/role',
        component: Role,
        meta: {
            permission_name: roleEnums.ROLE_VIEW,
            is_auth: true
        }
    },
    {
        name: 'assign_role',
        path: '/assign_role',
        component: UserAsignRole,
        meta: {
            permission_name: 'dashbord_view',
            is_auth: true
        }
    },
    {
        name: 'permission',
        path: '/permission',
        component: Permission,
        meta: {
            permission_name: permissionEnums.PERMISSION_VIEW,
            is_auth: true
        }
    },
    {
        name: 'permissions_assing',
        path: '/permissions_assing',
        component: RoleAssignPermission,
        meta: {
            permission_name: 'dashbord_view',
            is_auth: true
        }
    },
    {
        name: 'login',
        path: '/login',
        component: LoginForm,
        meta: {
            is_auth: false
        }
    },
    {
        name: 'registor',
        path: '/registor',
        component: RegistorForm,
        meta: {
            is_auth: false
        }
    },
]

const FrontendRoutes = createRouter({
    history: createWebHistory(),
    routes: routesArray
})

// FrontendRoutes.beforeEach((to, from, next) => {
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

export default FrontendRoutes