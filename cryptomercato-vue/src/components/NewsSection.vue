<template>
  <div class="news-container">
    <div class="title text-left mt-3">
      <h3 class="text-success">News</h3><br />
      <small>Global News Data ~ Powered by Mediastack API</small>
    </div>

    <div class="news-grid">
      <template v-if="!error && newsList.length">
        <div class="news-box" v-for="(news, index) in newsList" :key="index">
          <h3><strong>{{ news.title || 'No Title' }}</strong></h3>
          <h4>
            <strong>Author: </strong>
            <span class="text-success">{{ news.author || 'Unknown' }}</span>
          </h4>
          <p><strong>Topic:</strong> {{ news.source || 'Unknown' }}</p>
          <p><strong>Country:</strong> {{ news.country || 'N/A' }}</p>
          <small><strong>Published at:</strong> {{ news.published_at || 'N/A' }}</small>
        </div>
      </template>

      <template v-else-if="error">
        <div class="error-box">⚠️ Error fetching news data</div>
      </template>

      <template v-else>
        <div class="loading-box">Loading news...</div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const newsList = ref([])
const error = ref(false)

const fetchNews = async () => {
  try {
    const url = 'https://api.mediastack.com/v1/news?access_key=26572a63897db92e028a784a42b8cbe6&countries=us,gb&sources=business&limit=5'
    const response = await axios.get(url)
    newsList.value = response.data.data || []
  } catch (err) {
    console.error('Error fetching news:', err)
    error.value = true
  }
}

onMounted(fetchNews)
</script>
  
<style lang="css" scoped>
/* NEWS */
.news-container {
  background: #1a1a1a;
  padding: 20px;
  margin: 30px;
  border-radius: 8px;
  color: #e0e0e0;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 15px;
}

.news-box {
  background: #2a2a2a;
  padding: 15px;
  border-left: 5px solid #126123;
  border-radius: 5px;
  text-align: left;
  box-shadow: 2px 2px 10px rgba(29, 143, 25, 0.2);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  margin-bottom: 15px;
}

.news-box h3 {
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 8px;
}

.news-box h4 {
  font-size: 16px;
  margin-bottom: 5px;
}

.news-box p {
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 5px;
}

.news-box:hover {
  transform: translateY(-5px);
  box-shadow: 3px 3px 15px rgba(29, 143, 25, 0.4);
  background: #2b2b2b;
}


.error-box {
  background: #ff3333;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
}
</style>