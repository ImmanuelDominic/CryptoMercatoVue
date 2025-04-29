<template>
  <MenuComponent />

  <div class="title text-center mt-3">
    <h1>Crypto<span class="text-success">Mercato</span></h1>
    <small>Global Crypto Data ~ Powered by CoinLore API</small>
  </div>

  <SlidingText />

  <div class="crypto-info">
    <h3>📜 Global Coin Info</h3>
    <hr />

    <div v-if="error" class="error-box">⚠️ Error retrieving data for Coin ID: {{ idCrypto }}</div>
    <div v-else-if="loading" class="loading-box">Loading...</div>
    <ul v-else>
      <li v-for="coin in coinData" :key="coin.id">
        <p><strong><i class="fa-solid fa-coins"></i> Name:</strong> {{ coin.name }} ({{ coin.symbol }})</p>
        <p><strong><i class="fa-solid fa-ranking-star"></i> Rank:</strong> {{ coin.rank }}</p>
        <p><strong><i class="fa-solid fa-dollar-sign"></i> Price (USD):</strong> ${{ formatNumber(coin.price_usd) }}</p>

        <p>
          <strong><i class="fa-solid fa-chart-line"></i> 24h Change:</strong>
          <span :class="percentClass(coin.percent_change_24h)">
            {{ formatPercent(coin.percent_change_24h) }}
          </span>
        </p>

        <p>
          <strong><i class="fa-solid fa-arrow-trend-up"></i> 1h Change:</strong>
          <span :class="percentClass(coin.percent_change_1h)">
            {{ formatPercent(coin.percent_change_1h) }}
          </span>
        </p>

        <p>
          <strong><i class="fa-solid fa-chart-bar"></i> 7d Change:</strong>
          <span :class="percentClass(coin.percent_change_7d)">
            {{ formatPercent(coin.percent_change_7d) }}
          </span>
        </p>

        <p><strong><i class="fa-solid fa-building-columns"></i> Market Cap:</strong> ${{ formatNumber(coin.market_cap_usd) }}</p>
        <p><strong><i class="fa-solid fa-coins"></i> 24h Volume:</strong> ${{ formatNumber(coin.volume24) }}</p>
        <p><strong><i class="fa-solid fa-coins"></i> Circulating Supply:</strong> {{ formatNumber(coin.csupply) }} {{ coin.symbol }}</p>
      </li>
    </ul>
  </div>

  <FootComponent />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

import MenuComponent from '@/components/MenuComponent.vue'
import SlidingText from '@/components/SlidingText.vue'
import FootComponent from '@/components/FootComponent.vue'

const route = useRoute()
const idCrypto = route.params.id

const coinData = ref([])
const loading = ref(true)
const error = ref(false)

const fetchCoin = async () => {
  try {
    const response = await axios.get(`https://api.coinlore.net/api/ticker/?id=${idCrypto}`)
    coinData.value = response.data
  } catch (err) {
    console.error('API error:', err)
    error.value = true
  } finally {
    loading.value = false
  }
}

const formatNumber = (num) => Number(num).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })
const formatPercent = (num) => `${Number(num).toFixed(2)}%`
const percentClass = (num) => (Number(num) < 0 ? 'text-danger' : 'text-success')

onMounted(fetchCoin)
</script>

<style scoped>
.crypto-info {
  background: #1a1a1a;
  padding: 20px;
  margin: 30px auto;
  border-radius: 8px;
  max-width: 700px;
  color: #fff;
}

.crypto-info hr {
  border: 1px solid #ffffff33;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

li {
  background-color: #222;
  padding: 20px;
  border-radius: 8px;
}

.text-success {
  color: #28a745;
}

.text-danger {
  color: #dc3545;
}

.error-box {
  color: red;
  padding: 10px;
  text-align: center;
  background-color: #f8d7da;
  border-radius: 8px;
}

.loading-box {
  color: #fff;
  text-align: center;
}
</style>
