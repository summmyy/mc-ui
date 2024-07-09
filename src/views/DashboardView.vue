<script setup>

import NavBar from '@/components/NavBar.vue';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// import { faTv } from '@fortawesome/free-solid-svg-icons';
import TvIcon from '@/components/icons/TvIcon.vue';
import GlobeIcon from '@/components/icons/GlobeIcon.vue';
import FilmIcon from '@/components/icons/FilmIcon.vue';

const goToShows = () => {
    window.location.href = '/shows';
}

const goToGenres = () => {
    window.location.href = '/genre';
}

const goToCountry = () => {
    window.location.href = '/country';
}
</script>

<template>
  <NavBar pageName="Dashboard" />
  <div class="dashboard">
      <button class="dashboard__shows__button" @click="goToShows">
        <a>
          <TvIcon  class="__icon" />
          <h3>Shows</h3>
        </a>
      </button>
      <button class="dashboard__genre__button" @click="goToGenres">
        <a>
          <FilmIcon class="__icon" />
          <h3> Genres </h3>
        </a>
      </button>
      <button class="dashboard__country__button" @click="goToCountry">
        <a>
          <GlobeIcon class="__icon" />
          <h3> Country </h3>
        </a>
      </button>
  </div>


</template>