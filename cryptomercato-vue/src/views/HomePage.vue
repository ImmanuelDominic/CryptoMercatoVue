<template>
  <div>
    <MenuComponent />

    <div class="title text-center mt-3">
      <h1>Crypto<span class="text-success">Mercato</span></h1>
      <small>Global Crypto Data ~ Powered by CoinLore API</small>
    </div>

    <SlidingText />

    <div class="popular mt-5">
      <h3><span class="text-success">Popular</span> Cryptos</h3>

      <nav class="navbar navbar-expand navbar-dark">
        <ul class="nav navbar-nav">
          <li class="nav-item active" v-for="crypto in popularCryptos" :key="crypto.id">
            <a class="nav-link" :href="`/coin/${crypto.id}`">
              <span v-if="crypto.icon">
                <img :src="crypto.icon" alt="" height="16" width="16" />
              </span>
              <i v-else :class="crypto.iconClass"></i> {{ crypto.name }}
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/veureCategories">More</a>
          </li>
        </ul>
      </nav>
    </div>

    <NewsSection />
    <FootComponent />
  </div>
</template>

<script setup>
// Import ref and onMounted from Vue's Composition API
import { ref, onMounted } from 'vue'
import axios from 'axios'

// Components
import MenuComponent from '@/components/MenuComponent.vue'
import SlidingText from '@/components/SlidingText.vue'
import NewsSection from '@/components/NewsSection.vue'
import FootComponent from '@/components/FootComponent.vue'

// Popular Cryptos array (moved inside setup)
const popularCryptos = [
  { id: 90, name: 'Bitcoin', iconClass: 'fa-brands fa-bitcoin' },
  { id: 80, name: 'Ethereum', iconClass: 'fa-brands fa-ethereum' },
  { id: 58, name: 'Xrp', icon: '/assets/images/xrp-icon.svg' },
  { id: 518, name: 'Tether', icon: '/assets/images/tether-icon.svg' },
  { id: 2710, name: 'Binance Coin', icon: '/assets/images/binance-icon.svg' },
  { id: 33285, name: 'Usd Coin', icon: '/assets/images/usd-icon.svg' }
]

// Data for cryptos
const cryptos = ref([])
const loading = ref(true)
const error = ref(false)

// Fetch cryptos on mount
const fetchCryptos = async () => {
  try {
    const response = await axios.get('https://api.coinlore.net/api/tickers/')
    cryptos.value = response.data.data
  } catch (err) {
    error.value = true
    console.error('Error fetching crypto data:', err)
  } finally {
    loading.value = false
  }
}

// Call fetch function when component is mounted
onMounted(fetchCryptos)
</script>


<style lang="css" scoped>
/* Button Styles */
.btn-primary {
  background-color: #00c3ff;
  border: none;
  font-weight: 500;
}

.btn-primary:hover {
  background-color: #0099cc;
}

.menu>.nav-link {
  color: #126123;
}

.menu>.nav-link:hover {
  color: #459c58;
}

.menu>.nav-link.disabled {
  color: #8aa08f;
}

.popular {
  background: #1a1a1a;
  padding: 20px;
  margin: 30px;
  border-radius: 8px;
}

.categories {
  background: #1a1a1a;
  padding: 20px;
  margin: 30px;
  border-radius: 8px;
}

.crypto-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 15px;
}

.crypto-box {
  background: #2a2a2a;
  padding: 15px;
  border-left: 5px solid #126123;
  border-radius: 5px;
  text-align: left;
  box-shadow: 2px 2px 10px rgba(29, 143, 25, 0.2);
  transition: transform 0.3s ease-in-out;
}

.crypto-box:hover {
  transform: translateY(-5px);
}

.crypto-info {
  margin-bottom: 20px;
}

.crypto-info {
  background: #1a1a1a;
  padding: 20px;
  margin: 30px;
  border-radius: 8px;
}

.crypto-info hr {
  border: 1px solid #fff;
}

.social-container {
  background: #1a1a1a;
  padding: 20px;
  margin: 30px;
  border-radius: 8px;
  color: #e0e0e0;
}

.social-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 15px;
}

.social-box {
  background: #2a2a2a;
  padding: 15px;
  border-left: 5px solid #126123;
  border-radius: 5px;
  text-align: left;
  box-shadow: 2px 2px 10px rgba(29, 143, 25, 0.2);
  transition: transform 0.3s ease-in-out;
}

.social-box:hover {
  transform: translateY(-5px);
}
</style>
