<script setup>
import { ref, watch } from 'vue'; 
import { ElMain } from 'element-plus';
import NavBar from '@/components/NavBar.vue';
import SearchBar from '@/components/SearchBar.vue';
import MovieCard from '@/components/MovieCard.vue';
import axios from 'axios';

const shows = ref([]);
const title = ref('');


watch(title, (newTitle) => {
  getShowsByTitle(newTitle);
});

const getShowsByTitle = async (searchTitle) => {
  try {
    const url = `http://localhost:8080/api/shows/title/${searchTitle}`;
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
  <SearchBar :getSearchResult="getShowsByTitle" v-model:searchInput="title" />
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