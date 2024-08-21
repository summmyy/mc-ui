<script setup>

import NavBar from '@/components/NavBar.vue';
import SearchBar from '@/components/SearchBar.vue';
import ScrollWheel from '@/components/ScrollWheel.vue';
import MovieCard from '@/components/MovieCard.vue';
import {onMounted, ref, watch} from 'vue';
import axios from 'axios';
// import { ElMain } from 'element-plus';

const shows = ref([]);
const countries = ref([]);
const country = ref('');
const token = ref(localStorage.getItem('authToken'));

watch(country, (newTitle) => {
  getShowsByCountry(newTitle);
});

// Get request to the API to get shows by genre
const getShowsByCountry = async (countryName) => {
  try {
    const url = `http://localhost:8080/api/shows/country/${countryName}`;
    const response = await axios.get(url, {
        headers : {
          'Authorization': `Bearer ${token.value}`,
        },
      }
    );
    shows.value = response.data;
    console.log(response.data); // For testing purposes
  } catch (error) {
    console.error('Oops, an unexpected error occurred:', error);
  }
};

const getCountry = async () => {
  try {
    const url = `http://localhost:8080/api/shows/country/all`;
    const response = await axios.get(url, {
      headers: {
        'Authorization': `Bearer ${token.value}`,
      },
    });
    countries.value = response.data;
    console.log(response.data); // For testing purposes
  } catch (error) {
    console.error('Oops, an unexpected error occurred:', error);
  }
}

onMounted(() => {
  getCountry();
});

</script>

<template>
    <div class="countryView">
      <NavBar pageName="Country" />
    <div class="countryView__content">
      <div class="countryView__header">
        <h1> Country </h1>
        <SearchBar :getSearchResult="getShowsByCountry" v-model:searchInput="country" />
      </div>
      <div class="countryView__scrollwheel">
        <ScrollWheel @click = "getShowsByCountry(country)" 
        v-for="country in countries" :key="country"
        :item="country"
        />
      </div>
      <div class="countryView__shows">
        <MovieCard
          v-for="showData in shows" :key="showData.id"
          :title="showData.title"
          :genre="showData.genre"
          :showType="showData.showType"
          :duration="showData.duration"
          :description="showData.description"
          :imgSrc="showData.showPosterUrl"
        />
      </div>
    </div>
  </div>
</template>