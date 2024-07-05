<script setup>
import {ElMain ,ElCard, ElImage } from 'element-plus';

defineProps({
    title: {
        type: String,
        default: 'Lord of the rings'
    },
    genre: {
        type: String,
        default: 'Action'
    },
    duration: {
        type: String,
        default: '110'
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
</script>

<template>
    <el-main>
        <el-card>
            <el-image :src="imgSrc" alt="Movie Poster" />
            <div>
                <h4>Title: {{ title }} </h4>
                <h4>Genre: {{ genre }}</h4>
                <h4>Duration: {{ duration }} mins</h4>
                <h4>Description: {{ description }}</h4>
            </div>
        </el-card>
        <el-card>
            <el-image :src="imgSrc" alt="Movie Poster" />
            <div>
                <h4>Title: {{ title }} </h4>
                <h4>Genre: {{ genre }}</h4>
                <h4>Duration: {{ duration }} mins</h4>
                <h4>Description: {{ description }}</h4>
            </div>
        </el-card>
        <el-card>
            <el-image :src="imgSrc" alt="Movie Poster" />
            <div>
                <h4>Title: {{ title }} </h4>
                <h4>Genre: {{ genre }}</h4>
                <h4>Duration: {{ duration }} mins</h4>
                <h4>Description: {{ description }}</h4>
            </div>
        </el-card>
        <el-card>
            <el-image :src="imgSrc" alt="Movie Poster" />
            <div>
                <h4>Title: {{ title }} </h4>
                <h4>Genre: {{ genre }}</h4>
                <h4>Duration: {{ duration }} mins</h4>
                <h4>Description: {{ description }}</h4>
            </div>
        </el-card>
    </el-main>
</template>