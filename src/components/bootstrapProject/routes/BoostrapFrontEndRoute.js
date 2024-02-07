import { createRouter, createWebHistory } from 'vue-router'

import Login from '../components/auths/login/Login.vue'
import Register from '../components/auths/register/Register.vue'
import ForGetPassword from '../components/auths/forgetPassword/ForGetPassword.vue'
import PageNotFound from '../layouts/commonPage/PageNotFound.vue'
import DasgBoard from '../components/dashboard/BoostrapDashBoard.vue'

import UserCreate from '../components/user/UserCreate.vue'
import UserUpdate from '../components/user/UserUpdate.vue'
import UserListing from '../components/user/UserListing.vue'
import UserDelete from '../components/user/UserDelete.vue'

import RoleAdd from '../components/role/RoleAdd.vue'
import RoleUpdate from '../components/role/RoleUpdate.vue'
import RoleDelete from '../components/role/RoleDelete.vue'
import RoleListing from '../components/role/RoleListing.vue'

import PermissionDelete from '../components/permissionAssign/PermissionDelete.vue'
import PermissionUpdate from '../components/permissionAssign/PermissionUpdate.vue'
import PermissionListing from '../components/permissionAssign/PermissionListing.vue'
import PermissionAssign from '../components/permissionAssign/PermissionAssign.vue'


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
    {
        name: 'RouterPageNotFound',
        path: '/:pathMatch(.*)*',
        component: PageNotFound
    },
    {
        name: '/dasboard',
        path: '/',
        component: DasgBoard,
        meta: {
            is_auth: false
        }
    },
    {
        name: '/user_add',
        path: '/user_add',
        component: UserCreate,
        meta: {
            is_auth: false
        }
    },
    {
        name: '/user_update',
        path: '/user_update',
        component: UserUpdate,
        meta: {
            is_auth: false
        }
    },
    {
        name: '/user_listing',
        path: '/user_listing',
        component: UserListing,
        meta: {
            is_auth: false
        }
    },
    {
        name: '/user_delete',
        path: '/user_delete',
        component: UserDelete,
        meta: {
            is_auth: false
        }
    },
    {
        name: '/role_lising',
        path: '/role_lising',
        component: RoleListing,
        meta: {
            is_auth: false
        }
    },
    {
        name: '/role_add',
        path: '/role_add',
        component: RoleAdd,
        meta: {
            is_auth: false
        }
    },
    {
        name: '/role_update',
        path: '/role_update',
        component: RoleUpdate,
        meta: {
            is_auth: false
        }
    },
    {
        name: '/role_delete',
        path: '/role_delete',
        component: RoleDelete,
        meta: {
            is_auth: false
        }
    },
    {
        name: '/permission_delete',
        path: '/permission_delete',
        component: PermissionDelete,
        meta: {
            is_auth: false
        }
    },
    {
        name: '/permission_update',
        path: '/permission_update',
        component: PermissionUpdate,
        meta: {
            is_auth: false
        }
    },
    {
        name: '/permission_listing',
        path: '/permission_listing',
        component: PermissionListing,
        meta: {
            is_auth: false
        }
    },
    {
        name: '/permission_add',
        path: '/permission_add',
        component: PermissionAssign,
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