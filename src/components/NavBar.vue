<script setup>
import { ElHeader } from 'element-plus';
import MenuIcon from '@/components/icons/MenuIcon.vue';
// import { Menu } from '@element-plus/icons-vue/dist/types';

 defineProps({
    pageName:{
        type: String,
        default: 'Home'
    }
});
</script>


<template>
    <ElHeader class="navbar">
        <h1 class="navbar__Logo"> Movie Checkr  </h1>
        <h1 class="navbar__pageName">{{ pageName }}</h1>
        <MenuIcon class="navbar__menu-button"/>
        <!-- <ElButton class="navbar__menu-button" type="warning"><MenuIcon /></ElButton> -->
        <!-- <el-button type="primary" :icon="MenuIcon" /> -->
    </ElHeader>
</template>
