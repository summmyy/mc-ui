<script setup>

import NavBar from '@/components/NavBar.vue';
import SearchBar from '@/components/SearchBar.vue';
// import MovieCard from '@/components/MovieCard.vue';
// import ScrollWheel from '@/components/ScrollWheel.vue';
import axios from 'axios';
import { onMounted, ref } from 'vue';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// import { faTv } from '@fortawesome/free-solid-svg-icons';
// import TvIcon from '@/components/icons/TvIcon.vue';
// import GlobeIcon from '@/components/icons/GlobeIcon.vue';
// import FilmIcon from '@/components/icons/FilmIcon.vue';

// const goToShows = () => {
//     window.location.href = '/shows';
// }

// const goToGenres = () => {
//     window.location.href = '/genre';
// }

// const goToCountry = () => {
//     window.location.href = '/country';
// }

const genres = ref([]);
const token = ref('eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJqZG9lIiwiaWF0IjoxNzIzNTY5OTUyLCJleHAiOjE3MjM2NTYzNTJ9.ag1tqd4Xt3fGD_tFt9klfesTR5wmrNaLl0A_FMuoN1wIYXhDO6fXTCD5BLwm4eXH');

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

// For rendering the genre list
onMounted(() => {
  getGenre();
});

</script>

<template>
  <div class="dashboardview">
      <NavBar pageName="Dashboard" />
    <div class="dashboardview__content">
      <div class="dashboardview__header">
        <h1> Dashboard </h1>
        <SearchBar />
      </div>
      <h2 class="dashbaordview__hero"> Welcome to Movie Checkr! <br /> 
        An online movie database with 1000s of your favorite movies from 90s classics to action packed adventure comedy's. <br/> <br />
        Click on one of the menu option in the navbar to get started.
      </h2>
      <!-- <div class="dashboardview__scrollwheel">
        <ScrollWheel :getGenre="getGenre" 
        v-for="genre in genres" :key="genre"
        :item="genre"
        />
      </div> -->
      <!-- <MovieCard /> -->
    </div>
  </div>

</template>