<script setup>

import NavBar from '@/components/NavBar.vue';
import SearchBar from '@/components/SearchBar.vue';
import MovieCard from '@/components/MovieCard.vue';

// Get request to the API to get shows by genre
const getShowsByGenre = () => {
    console.log('getShowResult');
}
</script>

<template>
    <NavBar pageName="Genre" />
    <SearchBar :getSearchResult="getShowsByGenre"/>
    <MovieCard />
</template>