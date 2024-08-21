<script setup>
import { ElScrollbar, ElButton } from 'element-plus';
// import { ref, defineProps, watch } from 'vue';

defineProps({
    item: {
        type: String,
        default: 'Action'
    },
    getData: {
        type: Function,
        default: () => {}
    },
});


</script>

<template>
    <el-scrollbar>
        <div class="scroll-wheel">
            <div class="scroll-wheel__content">
                <el-button class="scroll-wheel__item" @click="getData(item)" > 
                    {{ item }}
                </el-button>
            </div>
        </div>
    </el-scrollbar>
</template>