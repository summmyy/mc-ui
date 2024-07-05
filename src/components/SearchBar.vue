<script setup>
// import {ElMain} from 'element-plus'
// import { ref } from 'vue';
// import {ElInput} from 'element-plus'
// import {Search} from '@element-plus/icons-vue'
import SearchIcon from '@/components/icons/SearchIcon.vue'

defineProps({
    placeHolderMessage: {
        type: String,
        default: 'What would you like to search for?'
    }
})


</script>

<template>
    <div class="search">
        <div class="search-bar">
            <h2> Search: </h2>
            <div class="search-bar__container">
                <SearchIcon class="search-bar__icon"/>
                <input type="text" class="search-bar__input" :placeholder=placeHolderMessage >
            </div>
        </div>
    </div>

</template>