import { createRouter, createWebHistory } from 'vue-router'
import { stringifyQuery } from 'vue-router'
import Combinaisons from '../views/Combinaisons.vue'
import Accueil from '../views/Accueil.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  stringifyQuery: (query) => stringifyQuery(query),
  routes: [
    {
        path: "/",
        name: "Accueil",
        component: Accueil
    },
    {
        path: "/combinaisons",
        name: "combinaisons",
        component: Combinaisons
    }
  ]
})

export default router

