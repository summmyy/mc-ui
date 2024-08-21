<script setup>

import NavBar from '@/components/NavBar.vue';
import SearchBar from '@/components/SearchBar.vue';
import ScrollWheel from '@/components/ScrollWheel.vue';
import MovieCard from '@/components/MovieCard.vue';
import {ref, watch, onMounted} from 'vue';
import axios from 'axios';


const shows = ref([]);
const genre = ref('');
const genres = ref([]);
const token = ref(localStorage.getItem('authToken'));


watch(genre, (newTitle) => {
  getShowsByGenre(newTitle);
});

// Get request to the API to get shows by genre
const getShowsByGenre = async (genreName) => {
  try {
    const url = `http://localhost:8080/api/shows/genre/${genreName}`;
    const response = await axios.get(url, {
      headers: {
        'Authorization': `Bearer ${token.value}`,
      },
  });
    shows.value = response.data;
    console.log(response.data); // For testing purposes
  } catch (error) {
    console.error('Oops, an unexpected error occurred:', error);
  }
};

const getGenre = async () => {
  try {
    const url = `http://localhost:8080/api/shows/genre/all`;
    const response = await axios.get(url, {
      headers: {
        'Authorization': `Bearer ${token.value}`,
      },
    });
    genres.value = response.data;
    console.log(response.data); // For testing purposes
  } catch (error) {
    console.error('Oops, an unexpected error occurred:', error);
  }
}

onMounted(() => {
  getGenre();
});
</script>

<template>
    <div class="genreView">
      <NavBar pageName="Genre" />
    <div class="genreView__content">
      <div class="genreView__header">
        <h1> Genre </h1>
        <SearchBar :getSearchResult="getShowsByGenre" v-model:searchInput="genre" />
      </div>
      <div class="genreView__scrollwheel">
        <ScrollWheel @click="getShowsByGenre(items)" 
        v-for="items in genres" :key="items"
        :item="items"
        />
      </div>
      <div class="genreView__shows">
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