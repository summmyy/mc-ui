<script setup>
// import { ElHeader,
//      ElDropdownMenu, 
//      ElDropdownItem,
//      ElDropdown,
//     } from 'element-plus';
import { ElHeader } from 'element-plus';
// import MenuIcon from '@/components/icons/MenuIcon.vue';

 defineProps({
    pageName:{
        type: String,
        default: 'Home'
    }
});

const goToDashboard = () => {
    window.location.href = '/';
}
</script>


<template>
    <ElHeader class="navbar">
        <div class="navbar__container">
            <h1 class="navbar__Logo" @click="goToDashboard"> <a href="/" > Movie Checkr </a>  </h1>
            <h1 class="navbar__pageName"> {{ pageName }}</h1>
            <h3> <a href="/shows" > Shows </a>  </h3>
            <h3> <a href="/genre" > Genre </a>  </h3>
            <h3> <a href="/country" > Country </a>  </h3>
            <h3> <a href="/add-show" > Add Shows </a>  </h3>
            
                <!-- <el-dropdown>
                    <button class="navbar__menu-button">
                        <MenuIcon />
                    </button>
                    <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item> <a href="/"> Home </a></el-dropdown-item>
                        <el-dropdown-item><a href="/shows"> Shows </a></el-dropdown-item>
                        <el-dropdown-item><a href="/genre"> Genre </a></el-dropdown-item>
                        <el-dropdown-item> <a href="/country"> Country </a></el-dropdown-item>
                        <el-dropdown-item> <a href="/add-show"> Add Shows </a></el-dropdown-item>
                    </el-dropdown-menu>
                    </template>
                </el-dropdown> -->
        </div>
    </ElHeader>
</template>
