<script setup>

import NavBar from '@/components/NavBar.vue';
import SearchBar from '@/components/SearchBar.vue';
import MovieCard from '@/components/MovieCard.vue';
import {ref, watch} from 'vue';
import axios from 'axios';
import { ElMain } from 'element-plus';

const shows = ref([]);
const country = ref('');

watch(country, (newTitle) => {
  getShowsByCountry(newTitle);
});

// Get request to the API to get shows by genre
const getShowsByCountry = async (countryName) => {
  try {
    const url = `http://localhost:8080/api/shows/country/${countryName}`;
    const response = await axios.get(url);
    shows.value = response.data;
    console.log(response.data); // For testing purposes
  } catch (error) {
    console.error('Oops, an unexpected error occurred:', error);
  }
};

</script>

<template>
    <NavBar pageName="Country" />
    <SearchBar :getSearchResult="getShowsByCountry" v-model:searchInput="country" />
    <el-main>
        <MovieCard
            v-for="show in shows" :key="show.id"
            :title="show.title"
            :genre="show.genre"
            :showType="show.showType"
            :duration="show.duration"
            :description="show.description"
            :imgSrc="show.showPosterUrl"
        />
    </el-main>
</template>