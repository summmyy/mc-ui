<script setup>

import NavBar from '@/components/NavBar.vue';
// import SearchBar from '@/components/SearchBar.vue';
// import axios from 'axios';
import { ref } from 'vue';
import { ElButton } from 'element-plus';

const goToSignIn = () => {
  window.location.href = '/sign-in';
};

const goToSignUp = () => {
  window.location.href = '/sign-up';
};

const token = ref(localStorage.getItem('authToken'));

</script>

<template>
  <div class="dashboardview">
      <NavBar pageName="Dashboard" />
    <div class="dashboardview__content">
      <div class="dashboardview__header">
        <h1> Dashboard </h1>
        <!-- <SearchBar /> -->
      </div>
      <h2 class="dashbaordview__hero"> Welcome to Movie Checkr! <br /> 
        An online movie database with 1000s of your favorite movies from 90s classics to action packed adventure comedy's. <br/> <br />
        Click on one of the menu option in the navbar to get started.
      </h2>
      <div class="dashboardview__buttons" v-if="token == '' ">
        <el-button type="primary" @click="goToSignIn">Sign In</el-button>
        <el-button @click="goToSignUp">Sign Up</el-button>
      </div>
    </div>
  </div>

</template>