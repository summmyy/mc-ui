<script setup>
import { ref, watch, onMounted } from 'vue'; 
// import { ElMain } from 'element-plus';
import NavBar from '@/components/NavBar.vue';
import SearchBar from '@/components/SearchBar.vue';
import MovieCard from '@/components/MovieCard.vue';
import axios from 'axios'; 

const show = ref([]);
const shows = ref([]);
const title = ref('');
const token = ref(localStorage.getItem('authToken'));


watch(title, (newTitle) => {
  getShowsByTitle(newTitle);
});

const getShowsByTitle = async (searchTitle) => {
  try {
    const url = `http://localhost:8080/api/shows/search/${searchTitle}`;
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

const getShows = async () => {
  try {
    const url = `http://localhost:8080/api/shows/all`;
    const response = await axios.get(url, {
      headers: {
        'Authorization': `Bearer ${token.value}`,
      },
    });
    show.value = response.data;
    console.log(response.data); // For testing purposes
  } catch (error) {
    console.error('Oops, an unexpected error occurred:', error);
  }
}

onMounted(() => {
  getShows();
});

</script>

<template>
  <div class="showsView">
      <NavBar pageName="Shows" />
    <div class="showsView__content">
      <div class="showsView__header">
        <h1> Shows </h1>
        <SearchBar :getSearchResult="getShowsByTitle" v-model:searchInput="title" />
      </div>
      
      <!-- This is for the initial page load. This shows random movies from the database-->
        <div class="showsView__shows" v-if="shows.length == 0" >
          <MovieCard 
            v-for="showData in show" :key="showData.id"
            :title="showData.title"
            :genre="showData.genre"
            :showType="showData.showType"
            :duration="showData.duration"
            :description="showData.description"
            :imgSrc="showData.showPosterUrl"
          />
        </div>
        <!-- This is for the search page load. This shows searched movies from the database-->
        <div class="showsView__shows"  v-else>
          <MovieCard
            v-for="showData in shows" :key="showData.id"
            :title="showData.show.title"
            :genre="showData.show.genre"
            :showType="showData.show.showType"
            :duration="showData.show.duration"
            :description="showData.show.description"
            :imgSrc="showData.show.showPosterUrl"
          />
        </div>
    </div>
  </div>
</template>