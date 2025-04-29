<template>
    <MenuComponent />
    <SlidingText />

  <div class="categories">
    <div class="title text-center mt-3">
      <h3>All Coins:</h3>
      <br />
      <small>First 100</small>
    </div>

    <div class="crypto-grid">
      <template v-if="!error && coins.length">
        <div
          v-for="coin in coins"
          :key="coin.id"
          class="crypto-box"
        >
          <RouterLink
            :to="`/coin/${coin.id}`"
            class="text-decoration-none text-white"
          >
            <p><strong>{{ coin.name }}</strong></p>
          </RouterLink>
        </div>
      </template>

      <template v-else-if="error">
        <div class="error-box">⚠️ Error loading coin data.</div>
      </template>

      <template v-else>
        <div class="loading-box">Loading coins...</div>
      </template>
    </div>
  </div>
  <FootComponent />

</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

import MenuComponent from '@/components/MenuComponent.vue'
import SlidingText from '@/components/SlidingText.vue'
import FootComponent from '@/components/FootComponent.vue'

const coins = ref([])
const error = ref(false)

const fetchCoins = async () => {
  try {
    const response = await axios.get('https://api.coinlore.net/api/tickers/?start=0&limit=100')
    if (response.status !== 200) {
      throw new Error('Failed to fetch data')
    }
    coins.value = response.data.data || []
  } catch (err) {
    console.error('Error fetching coin data:', err)
    error.value = true
  }
}

onMounted(fetchCoins)
</script>


