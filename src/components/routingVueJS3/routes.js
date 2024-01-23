import { createRouter, createWebHistory } from 'vue-router'

import ComponentAbout from './ComponentAbout.vue'
import RouterHome from './RouterHome.vue'
import ComponentContact from './ComponentContact.vue'
import RouterPageNotFound from './RouterPageNotFound.vue'

const routesArray = [
    {
        name: 'ComponentAbout',
        path: '/ComponentAbout',
        component: ComponentAbout
    },
    {
        name: 'ComponentContact',
        path: '/ComponentContact',
        component: ComponentContact
    },
    {
        name: 'RouterHome',
        path: '/',
        component: RouterHome
    },
    {
        name: 'RouterPageNotFound',
        path: '/:pathMatch(.*)*',
        component: RouterPageNotFound
    },
]

const routes = createRouter({
    history: createWebHistory(),
    routes: routesArray
})

export default routes