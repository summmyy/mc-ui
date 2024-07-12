<script setup>

import { ref } from 'vue';
import { ElMain } from 'element-plus';
import NavBar from '@/components/NavBar.vue';
import SearchBar from '@/components/SearchBar.vue';
import MovieCard from '@/components/MovieCard.vue';
import axios from 'axios';

const shows = ref([]);


// Get request to fetch all shows
const getShows = async (title) => {
  try {
    const url = `http://localhost:8080/api/shows/all`;
    const response = await axios.get(url);
    shows.value = response.data;
    console.log(response.data); // For testing purposes
  } catch (error) {
    console.error('Oops, an unexpected error occurred:', error);
  }
};
</script>

<template>
    <NavBar pageName="Shows" />
    <SearchBar :getSearchResult="getShows"  />
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