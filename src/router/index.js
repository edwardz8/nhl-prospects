import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('../views/Home.vue')
        },
        {
            path: '/register',
            component: () => import('../views/Register.vue')
        },
        {
            path: '/sign-in',
            component: () => import('../views/SignIn.vue')
        },
        {
            path: '/players',
            component: () => import('../views/Players.vue')
        },
        /* {
            path: "/player/:id",
            name: "PlayerDetails",
            props: (route) => {
              return {
                playerId: route.params.id
              };
            },
            component: () => import('../views/PlayerDetails.vue')
          }, */
    ]
})

export default router