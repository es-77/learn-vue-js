import { createRouter, createWebHistory } from 'vue-router'

import TenantPageNotFound from '../tenancyComponents/tenantAuth/TenantPageNotFound.vue'
import TenantForgetPassword from '../tenancyComponents/tenantAuth/TenantForgetPassword.vue'
// import TenantLogin from '../tenancyComponents/tenantAuth/TenantLogin.vue'
import TenantDashboard from '../tenancyComponents/tenantOtherComponents/TenantDashboard.vue'
// tenantregistor
import Billing from '../registerTenant/Billing.vue'
import Workspace from '../registerTenant/Workspace.vue'
import SignupTenant from '../registerTenant/SignupTenant.vue'
import PurposeTenant from '../registerTenant/PurposeTenant.vue'
import PackageSelection from '../registerTenant/PackageSelection.vue'
import PrepareTenant from '../registerTenant/PrepareTenant.vue'
import TenantLogin from '../loginTenant/TenantLogin.vue'
let routesArray = [
    {
        name: 'login',
        path: '/login',
        component: TenantLogin,
        meta: {
            is_auth: false
        }
    },
    {
        name: 'forget_password',
        path: '/forget_password',
        component: TenantForgetPassword,
        meta: {
            is_auth: false
        }
    },
    {
        name: 'RouterPageNotFound',
        path: '/:pathMatch(.*)*',
        component: TenantPageNotFound
    },
    {
        name: '/billing',
        path: '/billing',
        component: Billing,
        meta: {
            is_auth: false
        }
    },
    {
        name: '/prepare_tenant',
        path: '/prepare_tenant',
        component: PrepareTenant,
        meta: {
            is_auth: false
        }
    },
    {
        name: '/package_selection',
        path: '/package_selection',
        component: PackageSelection,
        meta: {
            is_auth: false
        }
    },
    {
        name: '/purpose_tenant',
        path: '/purpose_tenant',
        component: PurposeTenant,
        meta: {
            is_auth: false
        }
    },
    {
        name: '/signup_tenant',
        path: '/signup_tenant',
        component: SignupTenant,
        meta: {
            is_auth: false
        }
    },
    {
        name: '/workspace',
        path: '/workspace',
        component: Workspace,
        meta: {
            is_auth: false
        }
    },
    {
        name: '/dashboard',
        path: '/dashboard',
        component: TenantDashboard,
        meta: {
            is_auth: false
        }
    }
]

const BASE_URL = '/emmanuel';

routesArray = routesArray.map(route => ({
    ...route,
    path: BASE_URL + route.path
}));

const TenantFrontEndRoute = createRouter({
    history: createWebHistory(),
    routes: routesArray
})

export default TenantFrontEndRoute