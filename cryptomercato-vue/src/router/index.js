import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import CoinDetail from '../views/CoinDetail.vue'
import CryptoCoins from '../views/CryptoCoins.vue' 
// Import the components for your routes here

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/coin/:id',
    name: 'CoinDetail',
    component: CoinDetail,
    props: true, // Allows passing route params as props
  },
  {
    path: '/coins',
    name: 'CryptoCoins',
    component: CryptoCoins,
  }
  // Add more routes here
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router
