import { createRouter, createWebHistory } from 'vue-router'
import vCatalog from '../components/v-catalog'
import vCart from '../components/v-cart'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', //root url
            name: 'catalog',
            component: vCatalog
        },
        {
            path: '/cart',
            name: 'cart',
            component: vCart,
            props: true
        },
    ],
})


export default router;