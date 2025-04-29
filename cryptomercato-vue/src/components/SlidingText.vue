<template>
  <div class="ticker-container">
    <div class="ticker">
      <template v-if="!error">
        📈 Coin Count: {{ globalData.coins_count }} |
        📊 Active Markets: {{ globalData.active_markets }} |
        💰 Total Market Cap: ${{ formatNumber(globalData.total_mcap) }} |
        📉 Total Volume: ${{ formatNumber(globalData.total_volume) }}
      </template>
      <template v-else>
        ⚠️ Error fetching global crypto data.
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const globalData = ref({})
const error = ref(false)

const fetchGlobalData = async () => {
  try {
    const response = await axios.get('https://api.coinlore.net/api/global/')
    globalData.value = response.data[0] // The API returns an array with a single object
  } catch (err) {
    console.error('Error fetching global data:', err)
    error.value = true
  }
}

const formatNumber = (value) => {
  return Number(value).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })
}

onMounted(fetchGlobalData)
</script>

<style lang="css" scoped>
/* Crypto Ticker */
.ticker-container {
  width: 100%;
  overflow: hidden;
  background: #1a1a1a;
  color: #e0e0e0;
  padding: 12px 0;
  font-size: 16px;
  font-weight: 500;
  border-top: 2px solid #126123;
  border-bottom: 2px solid #126123;
}

.ticker {
  display: inline-block;
  white-space: nowrap;
  animation: scrollTicker 25s linear infinite;
}

@keyframes scrollTicker {
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(-100%);
  }
}
  
</style>