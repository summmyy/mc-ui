<script setup>
import {ElCard, ElImage } from 'element-plus';
import { ref, defineProps } from 'vue'; 

defineProps({
    title: {
        type: String,
        default: 'Lord of the rings'
    },
    genre: {
        type: String,
        default: 'Action'
    },
    showType: {
        type: String,
        default: 'Movie'
    },
    duration: {
        type: Number,
        default: 110
    },
    description: {
        type: String,
        default: 'This is a movie about lords who love rings.'
    },
    imgSrc: {
        type: String,
        default: 'https://via.placeholder.com/300'
    },
})

const showDetails = ref(false);
</script>

<template>
    <div class="movie-card">
        <el-card @mouseenter="showDetails = true" @mouseleave="showDetails = false" >
            <div class="movie-card__wrapper">
                <el-image :src="imgSrc" alt="Movie Poster" width="300px" height="400px" />
                <div class="movie-card__details" :class="{'movie-card__show-details' : showDetails}" >
                <h4>Show Type: {{ showType }}</h4>
                <h4>Duration: {{ duration }} mins</h4>
                <h4>Description: {{ description }}</h4>
            </div>
            </div>
            <div class="movie-card__title">
                <h4> {{ title }} </h4>
                <h4> {{ genre }}</h4>
            </div>
            <!-- <div class="movie-card__details" :class="{'movie-card__show-details' : showDetails}" >
                <h4>Show Type: {{ showType }}</h4>
                <h4>Duration: {{ duration }} mins</h4>
                <h4>Description: {{ description }}</h4>
            </div> -->
            
        </el-card>
    </div>
</template>