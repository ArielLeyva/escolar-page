import { createRouter, createWebHistory } from 'vue-router'
import FiguresGame from '../views/FiguresGame.vue'
import ProductsGame from '../views/ProductsGame.vue'
import ConceptsGame from '../views/ConceptsGame.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/figures',
      name: 'figures',
      component: FiguresGame
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsGame
    },
    {
      path: '/concepts',
      name: 'concepts',
      component: ConceptsGame
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    }
  ]
})

export default router
