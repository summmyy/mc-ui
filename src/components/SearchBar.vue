<script setup>
import { ref, watch } from 'vue';
import SearchIcon from '@/components/icons/SearchIcon.vue';
import { ElButton } from 'element-plus';

defineProps({
  placeHolderMessage: {
    type: String,
    default: 'What would you like to search for?'
  },
  getSearchResult: {
    type: Function,
    default: () => {}
  },
});

const localSearchInput = ref('');

watch(() => localSearchInput.value, (newVal) => {
  this.emit('update:searchInput', newVal);
});

</script>

<template>
  <div class="search">
    <div class="search-bar">
      <h2> Search: </h2>
      <div class="search-bar__container">
        <SearchIcon class="search-bar__icon" />
        <input v-model="localSearchInput" @change="$emit('update:searchInput', localSearchInput)" type="text" @keyup.enter="getSearchResult(localSearchInput)" class="search-bar__input" :placeholder="placeHolderMessage" />
        <div class="search-bar__button-container">
          <el-button class="search-bar__button" @click="getSearchResult(localSearchInput)"> Enter </el-button>
        </div>
      </div>
    </div>
  </div>
</template>